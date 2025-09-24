"use client";

import { memo } from "react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const LoadingSpinner = memo<LoadingSpinnerProps>(function LoadingSpinner({ 
  size = "md", 
  className 
}) {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-2",
    lg: "w-12 h-12 border-4"
  };

  return (
    <div
      className={cn(
        "border-blue-500 border-t-transparent rounded-full animate-spin",
        sizeClasses[size],
        className
      )}
    />
  );
});

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  variant?: "text" | "rectangular" | "circular";
}

export const Skeleton = memo<SkeletonProps>(function Skeleton({ 
  className, 
  width, 
  height, 
  variant = "rectangular" 
}) {
  const baseClasses = "animate-pulse bg-gray-300";
  
  const variantClasses = {
    text: "rounded h-4",
    rectangular: "rounded-lg",
    circular: "rounded-full"
  };

  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height) style.height = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      className={cn(baseClasses, variantClasses[variant], className)}
      style={style}
    />
  );
});

interface ComponentSkeletonProps {
  height?: string;
  className?: string;
  showSpinner?: boolean;
}

export const ComponentSkeleton = memo<ComponentSkeletonProps>(function ComponentSkeleton({ 
  height = "200px", 
  className,
  showSpinner = true 
}) {
  return (
    <div 
      className={cn("w-full bg-gray-300 rounded-lg", className)}
      style={{ height }}
    >
      {showSpinner && (
        <div className="flex items-center justify-center h-full">
          <LoadingSpinner size="md" />
        </div>
      )}
    </div>
  );
});

interface ImageSkeletonProps {
  width?: number;
  height?: number;
  className?: string;
}

export const ImageSkeleton = memo<ImageSkeletonProps>(function ImageSkeleton({ 
  width = 400, 
  height = 300, 
  className 
}) {
  return (
    <div
      className={cn("bg-gray-300 rounded-lg animate-pulse", className)}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="flex items-center justify-center h-full">
        <svg
          className="w-10 h-10 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  );
});