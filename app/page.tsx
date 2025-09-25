"use client";

import { lazy, Suspense } from "react";
import { ImagesSliderDemo } from "@/components/imageslider";
import ScrollingBanner from "@/components/scrolling-banner";

// Lazy load heavy components to improve initial page load
const UltraLuxuryFeatures = lazy(() => import("@/components/UltraLuxuryFeatures"));
const Intro = lazy(() => import("@/components/Intro"));
const WorldMapDemo = lazy(() => import("@/components/world-mapcomp").then(module => ({ default: module.WorldMapDemo })));
const PremiumStudentBranchChapters = lazy(() => import("@/components/PremiumStudentBranchChapters"));

// Loading component
const ComponentSkeleton = ({ height = "200px" }: { height?: string }) => (
  <div className="animate-pulse bg-gray-200 rounded-lg w-full flex items-center justify-center" style={{ height }}>
    <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Hero Section - Load immediately */}
            <div className="relative flex items-center justify-center h-[30vh] md:min-h-screen">
                <ImagesSliderDemo />
            </div>

            {/* Scrolling Banner - Load immediately */}
            <ScrollingBanner />

            {/* Lazy loaded sections with proper loading states */}
            <Suspense fallback={<ComponentSkeleton height="400px" />}>
                <Intro />
            </Suspense>

            <Suspense fallback={<ComponentSkeleton height="300px" />}>
                <PremiumStudentBranchChapters />
            </Suspense>

            <Suspense fallback={<ComponentSkeleton height="500px" />}>
                <UltraLuxuryFeatures />
            </Suspense>

            <Suspense fallback={<ComponentSkeleton height="600px" />}>
                <WorldMapDemo />
            </Suspense>
        </div>
    );
}
