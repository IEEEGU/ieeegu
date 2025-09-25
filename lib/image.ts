import createImageUrlBuilder from '@sanity/image-url';
import { client } from './sanity.client';

const imageBuilder = client ? createImageUrlBuilder(client) : null;

export const urlFor = (source: unknown) => {
  if (!imageBuilder || !source) {
    // Return a fallback with proper chaining structure
    const createFallbackChain = () => ({
      url: () => '/placeholder-image.jpg',
      width: () => createFallbackChain(),
      height: () => createFallbackChain(),
      auto: () => createFallbackChain(),
    });
    return createFallbackChain();
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return imageBuilder.image(source as any).auto('format');
};
