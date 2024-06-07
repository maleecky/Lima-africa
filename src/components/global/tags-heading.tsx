"use client";

import {
  useAnimation,
  useInView,
  useScroll,
  motion,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef } from "react";

type props = {
  children: string | React.ReactNode;
  width: string;
};

const SectionTagHeading = ({ children, width }: props) => {
  return (
    <motion.h2
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.3,
      }}
      className={`min-[990px]:text-[min(2.5vw,1.8em)] ${width} md:text-[1.8em] xmd:text-center sm:text-[1.5em] text-[1.25em] max-[998px]:leading-[1.25em]  max-sm:leading-[1.4]  text-green-950 font-semibold min-[998px]:leading-[1.4em]`}
    >
      {children}
    </motion.h2>
  );
};

export default SectionTagHeading;
