/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["cdn.sanity.io","res.cloudinary.com", "assets.aceternity.com","images.unsplash.com", "via.placeholder.com"],
      formats: ['image/webp', 'image/avif'],
      minimumCacheTTL: 60,
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    reactStrictMode: true,
    env: {
      NEXT_PUBLIC_RAZORPAY_KEY_ID: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    },
    // Performance optimizations
    experimental: {
      // optimizeCss: true, // Disabled temporarily to fix critters dependency issue
      optimizePackageImports: ['framer-motion', 'lucide-react'],
    },
    // Enable compression
    compress: true,
    // Optimize fonts
    optimizeFonts: true,
    // Bundle analyzer for production builds
    ...(process.env.ANALYZE === 'true' && {
      webpack: (config) => {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
        config.plugins.push(new BundleAnalyzerPlugin())
        return config
      }
    }),
  };
  
  module.exports = nextConfig;
  