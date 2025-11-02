/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io","res.cloudinary.com", "assets.aceternity.com","images.unsplash.com"],
    // Disable Next's server-side image optimization to avoid dev-time
    // outbound fetches to Cloudinary which may time out in this environment.
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_RAZORPAY_KEY_ID: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  },
};

export default nextConfig;
