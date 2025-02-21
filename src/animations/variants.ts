import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const hoverGlow: Variants = {
  rest: { scale: 1, filter: "drop-shadow(0 0 0px #0f0)" },
  hover: {
    scale: 1.03,
    filter: "drop-shadow(0 0 10px #0f0)",
    transition: { duration: 0.3 }
  }
};

export const flicker: Variants = {
  hidden: { opacity: 0.8 },
  visible: {
    opacity: [0.8, 1, 0.7, 1, 0.8],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 2
    }
  }
};
