import { useEffect, useRef, useState, useCallback } from 'react';

// Intersection Observer hook for lazy loading
export const useInView = (
  threshold: number = 0.1,
  rootMargin: string = "0px"
) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    observer.observe(current);

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [threshold, rootMargin]);

  return [ref, inView] as const;
};

// Debounce hook for performance optimization
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Throttle hook for scroll events
export const useThrottle = (callback: Function, delay: number) => {
  const throttledCallback = useRef(false);

  return useCallback((...args: any[]) => {
    if (!throttledCallback.current) {
      callback(...args);
      throttledCallback.current = true;
      setTimeout(() => {
        throttledCallback.current = false;
      }, delay);
    }
  }, [callback, delay]);
};

// Image preloader utility
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Bundle size optimization utilities
export const getOptimizedImageUrl = (
  baseUrl: string,
  width: number = 1920,
  height?: number,
  quality: number = 85
): string => {
  // Cloudinary optimization parameters
  if (baseUrl.includes('cloudinary.com')) {
    const heightParam = height ? `,h_${height}` : '';
    return baseUrl.replace(
      '/upload/',
      `/upload/c_fill,w_${width}${heightParam},f_webp,q_auto:good/`
    );
  }
  
  return baseUrl;
};

// Memory cleanup utility
export const useCleanup = (cleanup: () => void) => {
  const cleanupRef = useRef(cleanup);
  cleanupRef.current = cleanup;

  useEffect(() => {
    return () => {
      cleanupRef.current();
    };
  }, []);
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof performance !== 'undefined' && performance.mark) {
    performance.mark(`${name}-start`);
    fn();
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
  } else {
    fn();
  }
};