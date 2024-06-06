"use client";

import Image from "next/image";
import LarvaeGreen from "@/../public/assets/media/larvae-r.png";
import { OurWork } from "@/lib/constants";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

function OurWorkSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const isInview = useInView(containerRef, { once: false });

  const paragraphValue = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const transformValue = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
    }
  }, [isInview]);
  return (
    <motion.section
      ref={containerRef}
      animate={mainControls}
      initial="hidden"
      className="w-full flex xmd:justify-center xmd:items-center lg:max-w-[93.75em]  mx-auto"
    >
      <div className="py-[7.5em] lg:px-14 px-4 relative lg:max-w-[65em] max-lg:w-full   ">
        <div>
          <h2 className="min-[990px]:text-[min(2.5vw,1.8em)] md:text-[1.8em] sm:text-[1.5em] text-[1.25em] max-[998px]:leading-[1.5em] max-sm:leading-[1.4]  text-green-950 xmd:font-medium font-normal min-[998px]:leading-[1.4em]">
            {OurWork.map((work, i) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="w-full block xmd:text-center"
                key={i}
              >
                {work}
              </motion.div>
            ))}
          </h2>
        </div>
        <div className="absolute  top-10% right-[20%]">
          <div className=" bg-[#f3f7fc] border border-slate-200/10 h-10 w-10 flex items-center justify-center rounded-sm shadow-lg shadow-slate-100 rotate-[100deg] p-1  ">
            <Image
              src={LarvaeGreen}
              width={30}
              height={30}
              alt=""
              className="rotate-45 object-cover block"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default OurWorkSection;
