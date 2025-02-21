import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const hoverGlow: Variants = {
  rest: { scale: 1, filter: "drop-shadow(0 0 0px #0f0)" },
  hover: {
    scale: 1.02,
    filter: "drop-shadow(0 0 8px #0f0)",
    transition: { duration: 0.3 }
  }
};
