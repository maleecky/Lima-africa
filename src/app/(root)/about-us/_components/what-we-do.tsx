import { aboutContents } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

const WhatWeDo = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 1, staggerChildren: 0.2 },
    },
  };

  const items: Variants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section className="lg:px-20 md:px-12 px-6 mb-[7.5em] pt-[100px] max-w-[140em] mx-auto">
      <div className="flex lg:flex-row flex-col-reverse justify-center items-center w-full gap-20">
        <div className="lg:flex-[0_0_60%] w-full">
          <h1 className="lg:text-4xl xmd:text-3xl text-2xl xmd:mb-5 mb-1 font-medium  text-[#1e1e1e]">
            {aboutContents.LimaIntiatives[0].title}
          </h1>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className=" text-[#1e1e1e] flex flex-col gap-4 xmd:text-xl xmd:leading-[1.5em]"
          >
            {aboutContents.LimaIntiatives[0].description.map((item, index) => (
              <motion.p variants={items} key={index}>
                {item}
              </motion.p>
            ))}
          </motion.div>
        </div>
        <motion.div
          variants={{
            hideslide: { x: 20, opacity: 0 },
            visibleslide: { x: 0, opacity: 1 },
          }}
          initial="hideslide"
          whileInView={"visibleslide"}
          className="relative overflow-hidden min-h-[400px] w-full lg:flex-[0_0_40%]  rounded-2xl  object-cover "
        >
          <Image
            src={aboutContents.photoGallery.lonephoto.url}
            alt={aboutContents.photoGallery.lonephoto.alt}
            fill
            sizes="100vw"
            className="w-full object-cover border  "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
