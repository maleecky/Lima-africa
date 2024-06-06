import {
  useAnimation,
  useInView,
  useScroll,
  motion,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef } from "react";

type props = {
  children: string;
  width: string;
};

const SectionTagHeading = ({ children, width }: props) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const isInview = useInView(containerRef, { once: false });

  const paragraphValue = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);
  const transformValue = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
    }
  }, [isInview]);
  return (
    <motion.h2
      ref={containerRef}
      animate={mainControls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ delay: 0.3 }}
      className={`min-[990px]:text-[min(2.5vw,1.8em)] ${width} md:text-[1.8em] xmd:text-center sm:text-[1.5em] text-[1.25em] max-[998px]:leading-[1.25em]  max-sm:leading-[1.4]  text-green-950 font-medium min-[998px]:leading-[1.4em]`}
    >
      {children}
    </motion.h2>
  );
};

export default SectionTagHeading;
