import { createClient } from 'next-sanity'
import { config } from './sanity.config'
import { Post, Author, Category, Organization } from '@/types'

// Check if Sanity is properly configured
const isSanityConfigured = config.projectId !== 'dummy-project-id' && 
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'dummy-project-id';

export const client = isSanityConfigured ? createClient({
  ...config,
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published',
}) : null;

const REVALIDATE_INTERVAL = 60 // seconds

// Helper function to safely execute Sanity queries
async function safeQuery<T>(
  fallbackValue: T,
  queryFn: () => Promise<T>
): Promise<T> {
  if (!isSanityConfigured || !client) {
    console.warn('Sanity is not configured, returning fallback value');
    return fallbackValue;
  }

  try {
    return await queryFn();
  } catch (error) {
    console.warn('Error executing Sanity query:', error);
    return fallbackValue;
  }
}

export async function getPosts(limit?: number, category?: string, author?: string): Promise<Post[]> {
  return safeQuery([], async () => {
    // Build the query based on optional filters
    let query = `*[_type == "post"]`;
    const params: Record<string, string | number> = {};
    
    // Add category filter if provided
    if (category) {
      query += ` && $category in categories[]->slug.current`;
      params.category = category;
    }
    
    // Add author filter if provided
    if (author) {
      query += ` && $author in authors[]->slug.current`;
      params.author = author;
    }
    
    // Add sorting and limiting
    query += ` | order(publishedAt desc)`;
    if (limit) {
      query += `[0...$limit]`;
      params.limit = limit - 1;
    }
    
    // Add field selection
    query += ` {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      mainImage,
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
      "categories": categories[]->{ _id, title, "slug": slug.current },
      "authors": authors[]->{ _id, name, "slug": slug.current, image }
    }`;
    
    return client!.fetch(
      query,
      params,
      {
        next: { 
          revalidate: REVALIDATE_INTERVAL,
          tags: ['posts'] 
        }
      }
    );
  });
}

export async function getPost(slug: string): Promise<Post | null> {
  return safeQuery(null, async () => {
    return client!.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        excerpt,
        mainImage,
        content,
        "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180),
        "categories": categories[]->{ _id, title, "slug": slug.current },
        "authors": authors[]->{ 
          _id, 
          name, 
          "slug": slug.current, 
          image, 
          bio, 
          "organization": organization->{
            _id, 
            name, 
            "slug": slug.current
          }, 
          socialLinks 
        }
      }`,
      { slug },
      {
        next: { 
          revalidate: REVALIDATE_INTERVAL,
          tags: ['post', `post-${slug}`] 
        }
      }
    );
  });
}

export async function getCategories(): Promise<Category[]> {
  return safeQuery([], async () => {
    return client!.fetch(
      `*[_type == "category"] {
        _id,
        title,
        "slug": slug.current,
        description
      }`,
      {},
      {
        next: { 
          revalidate: REVALIDATE_INTERVAL,
          tags: ['categories']
        }
      }
    );
  });
}

export async function getAuthors(): Promise<Author[]> {
  return safeQuery([], async () => {
    return client!.fetch(
      `*[_type == "author"] {
        _id,
        name,
        "slug": slug.current,
        image,
        bio,
        "organization": organization->{
          _id,
          name,
          "slug": slug.current
        },
        socialLinks
      }`,
      {},
      {
        next: { revalidate: REVALIDATE_INTERVAL }
      }
    );
  });
}

export async function getAuthor(slug: string): Promise<(Author & { posts: Post[] }) | null> {
  return safeQuery(null, async () => {
    return client!.fetch(
      `*[_type == "author" && slug.current == $slug][0] {
        _id,
        name,
        "slug": slug.current,
        image,
        bio,
        "organization": organization->{
          _id,
          name,
          "slug": slug.current
        },
        socialLinks,
        "posts": *[_type == "post" && references(^._id)] | order(publishedAt desc) {
          _id,
          title,
          "slug": slug.current,
          publishedAt,
          excerpt,
          mainImage
        }
      }`,
      { slug },
      {
        next: { revalidate: REVALIDATE_INTERVAL }
      }
    );
  });
}

export async function getFeaturedPosts(limit = 3): Promise<Post[]> {
  return safeQuery([], async () => {
    return client!.fetch(
      `*[_type == "post" && featured == true] | order(publishedAt desc)[0...$limit] {
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        excerpt,
        mainImage,
        "authors": authors[]->{ _id, name, "slug": slug.current, image }
      }`,
      { limit: limit - 1 },
      {
        next: { revalidate: REVALIDATE_INTERVAL }
      }
    );
  });
}

export async function getPostsByCategory(categorySlug: string, limit?: number): Promise<Post[]> {
  return safeQuery([], async () => {
    const limitClause = limit ? `[0...$limit]` : '';
    const params: Record<string, string | number> = { categorySlug };
    
    if (limit) params.limit = limit - 1;
    
    return client!.fetch(
      `*[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc)${limitClause} {
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        excerpt,
        mainImage,
        "authors": authors[]->{ _id, name, "slug": slug.current, image }
      }`,
      params,
      {
        next: { revalidate: REVALIDATE_INTERVAL }
      }
    );
  });
}

export async function getRelatedPosts(slug: string, limit = 3): Promise<Post[]> {
  return safeQuery([], async () => {
    return client!.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        "related": *[_type == "post" && slug.current != $slug && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc)[0...$limit] {
          _id,
          title,
          "slug": slug.current,
          publishedAt,
          excerpt,
          mainImage,
          "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180),
          "authors": authors[]->{ _id, name, "slug": slug.current, image }
        }
      }.related`,
      { slug, limit: limit - 1 },
      {
        next: { revalidate: REVALIDATE_INTERVAL }
      }
    );
  });
}

export async function getOrganization(slug: string): Promise<(Organization & { authors: Author[], posts: Post[] }) | null> {
  return safeQuery(null, async () => {
    return client!.fetch(
      `*[_type == "organization" && slug.current == $slug][0] {
        _id,
        name,
        "slug": slug.current,
        logo,
        description,
        website,
        "authors": *[_type == "author" && references(^._id)] {
          _id,
          name,
          "slug": slug.current,
          image
        },
        "posts": *[_type == "post" && references(*[_type=="author" && organization._ref == ^._id]._id)] | order(publishedAt desc) {
          _id,
          title,
          "slug": slug.current,
          publishedAt,
          excerpt,
          mainImage,
          "authors": authors[]->{ _id, name, "slug": slug.current, image }
        }
      }`,
      { slug },
      {
        next: { revalidate: REVALIDATE_INTERVAL }
      }
    );
  });
}

export async function getOrganizations(): Promise<Organization[]> {
  return safeQuery([], async () => {
    return client!.fetch(
      `*[_type == "organization"] {
        _id,
        name,
        "slug": slug.current,
        logo,
        website
      }`,
      {},
      {
        next: { revalidate: REVALIDATE_INTERVAL }
      }
    );
  });
}

export async function triggerRevalidation(type?: string, id?: string, path?: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

  try {
    // Make request to our revalidation API endpoint
    const response = await fetch(`${baseUrl}/api/revalidate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REVALIDATION_TOKEN}`
      },
      body: JSON.stringify({
        type,
        id,
        path,
        tag: type ? `${type}-${id}` : undefined
      }),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(`Revalidation failed: ${data.message || response.statusText}`);
    }
    
    return { success: true, message: data.message };
  } catch (error) {
    console.error('Revalidation error:', error);
    return { success: false, message: error instanceof Error ? error.message : 'Unknown error' };
  }
}