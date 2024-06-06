"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface props {
  children: ReactNode;
  pageId: string;
  styles: string;
}

const TransitionSection = ({ children, pageId, styles }: props) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  return (
    <motion.section
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={ref}
      id={pageId}
      className={styles}
    >
      {children}
    </motion.section>
  );
};

export default TransitionSection;
