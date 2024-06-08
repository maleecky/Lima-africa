import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type Props = {
  children: React.ReactNode;
  styles?: string;
};
const container = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.2,
    },
  },
};
export const iconVariant = {
  hidden: { scale: 0 },
  visible: {
    rotate: 180,
    scale: 1,
  },
};

const IconReveal = ({ children, styles }: Props) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={mainControls}
      transition={{ type: "spring", stiffness: 260, damping: 20, duration: 1 }}
      className={styles}
    >
      {children}
    </motion.div>
  );
};
export default IconReveal;
