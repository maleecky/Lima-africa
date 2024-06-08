"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type props = {
  children: React.ReactNode;
  styles?: string;
};

const Reveal = ({ children, styles }: props) => {
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
        hidden: { x: -45, opacity: 0 },
        visible: { x: 0, opacity: 1 },
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

export default Reveal;
