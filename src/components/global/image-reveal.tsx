"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type Props = {
  children: React.ReactNode;
  styles?: string;
};

const ImageReveal = ({ children, styles }: Props) => {
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
      variants={{
        hidden: { scale: 0 },
        visible: { scale: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.2 }}
      className={styles}
    >
      {children}
    </motion.div>
  );
};
export default ImageReveal;
