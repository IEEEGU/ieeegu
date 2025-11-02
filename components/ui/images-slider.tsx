"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<boolean[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  // Preload images with better performance
  useEffect(() => {
    const loadImages = () => {
      const loadedFlags = new Array(images.length).fill(false);
      let loadedCount = 0;

      images.forEach((image, index) => {
        const img = new window.Image();
        img.src = image;
        img.onload = () => {
          loadedFlags[index] = true;
          loadedCount++;
          if (loadedCount === images.length) {
            setLoadedImages(loadedFlags);
            setIsLoading(false);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === images.length) {
            setLoadedImages(loadedFlags);
            setIsLoading(false);
          }
        };
      });
    };

    loadImages();
  }, [images]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval: NodeJS.Timeout | null = null;
    if (autoplay && !isLoading) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval) clearInterval(interval);
    };
  }, [autoplay, isLoading, handleNext, handlePrevious]);

  const slideVariants = useMemo(() => ({
    initial: { 
      scale: 0.8, 
      opacity: 0, 
      rotateX: 45 
    },
    visible: { 
      scale: 1, 
      rotateX: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.5, 
        ease: [0.645, 0.045, 0.355, 1.0] 
      } 
    },
    upExit: { 
      opacity: 0, 
      y: "-100%", 
      transition: { duration: 0.5 } 
    },
    downExit: { 
      opacity: 0, 
      y: "100%", 
      transition: { duration: 0.5 } 
    },
  }), []);

  const hasLoadedImages = loadedImages.some(Boolean) || !isLoading;

  if (isLoading) {
    return (
      <div className={cn(
        "relative w-full flex items-center justify-center overflow-hidden bg-gray-900",
        "pt-[60px] pb-0 sm:pt-0",
        className
      )}>
        <div className="animate-pulse bg-gray-800 w-full h-full flex items-center justify-center">
          <div className="text-white text-lg">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative w-full flex items-center justify-center overflow-hidden",
        "pt-[60px] pb-0 sm:pt-0",
        className
      )}
      style={{ perspective: "1000px" }}
    >
      {hasLoadedImages && children}
      {hasLoadedImages && overlay && (
        <div className={cn("absolute inset-0 z-40", overlayClassName)} />
      )}
      
      {hasLoadedImages && (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              fill
              className="object-contain sm:object-cover"
              priority={currentIndex === 0}
              quality={85}
              sizes="(max-width: 768px) 100vw, 100vw"
            />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};
