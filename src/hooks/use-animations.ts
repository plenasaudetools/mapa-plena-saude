import { useEffect, useRef, useState, useCallback } from 'react';
import { useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

// Smooth spring configuration for premium feel
export const springConfig = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
};

export const smoothSpringConfig = {
  stiffness: 50,
  damping: 20,
  restDelta: 0.001,
};

// Hook for smooth parallax effects
export function useSmoothParallax(
  range: [number, number] = [0, 1],
  outputRange: [number, number] = [0, -100]
) {
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, springConfig);
  const y = useTransform(smoothProgress, range, outputRange);

  return { ref, y, progress: smoothProgress };
}

// Hook for image reveal on scroll
export function useImageReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isRevealed };
}

// Hook for staggered children animation
export function useStaggerReveal(staggerDelay = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getStaggerDelay = useCallback(
    (index: number) => ({
      transitionDelay: `${index * staggerDelay}s`,
    }),
    [staggerDelay]
  );

  return { ref, isInView, getStaggerDelay };
}

// Hook for smooth section scroll progress
export function useSectionProgress() {
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, smoothSpringConfig);

  // Useful transforms
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
  const y = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]);

  return { ref, progress: smoothProgress, opacity, scale, y };
}

// Hook for magnetic button effect
export function useMagneticButton(strength = 0.3) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      setPosition({
        x: distanceX * strength,
        y: distanceY * strength,
      });
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return { ref, position };
}

// Easing functions for custom animations
export const easings = {
  expoOut: [0.16, 1, 0.3, 1] as const,
  expoIn: [0.7, 0, 0.84, 0] as const,
  expoInOut: [0.87, 0, 0.13, 1] as const,
  spring: [0.175, 0.885, 0.32, 1.275] as const,
  smooth: [0.4, 0, 0.2, 1] as const,
};

// Animation variants for framer-motion
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: easings.expoOut,
    },
  }),
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.7,
      delay,
      ease: 'easeOut',
    },
  }),
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: easings.expoOut,
    },
  }),
};

export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: easings.expoOut,
    },
  }),
};

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: easings.expoOut,
    },
  }),
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.expoOut,
    },
  },
};

// Image reveal variants
export const imageRevealVariants = {
  hidden: { 
    opacity: 0, 
    scale: 1.1,
    filter: 'blur(20px)',
  },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      delay,
      ease: easings.expoOut,
    },
  }),
};

// Line draw variants
export const lineDrawVariants = {
  hidden: { pathLength: 0, opacity: 0.3 },
  visible: (delay = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.8,
      delay,
      ease: easings.expoOut,
    },
  }),
};
