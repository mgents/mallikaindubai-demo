import type { Variants, Transition } from 'framer-motion'

export const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  } as Variants,
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  } as Variants,
  slideLeft: {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  } as Variants,
  slideRight: {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  } as Variants,
  scaleIn: {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1 },
  } as Variants,
  blurIn: {
    hidden: { opacity: 0, filter: 'blur(12px)' },
    visible: { opacity: 1, filter: 'blur(0px)' },
  } as Variants,
}

export const transitions = {
  smooth: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } as Transition,
  spring: { type: 'spring', stiffness: 100, damping: 15 } as Transition,
  springBounce: { type: 'spring', stiffness: 150, damping: 12 } as Transition,
  stagger: { staggerChildren: 0.1, delayChildren: 0.1 },
  slowStagger: { staggerChildren: 0.15, delayChildren: 0.2 },
}

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const slowContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}
