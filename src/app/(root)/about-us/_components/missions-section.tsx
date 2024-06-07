import SectionTagHeading from "@/components/global/tags-heading";
import { aboutContents } from "@/lib/constants";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const MissionsSection = () => {
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
    <section className="lg:px-20 md:px-12 px-6 mb-[7.5em] max-w-[140em] mx-auto">
      <div className="flex lg:flex-row flex-col gap-20 justify-center items-center w-full ">
        <motion.div
          variants={{
            hideslide: { x: 20, opacity: 0 },
            visibleslide: { x: 0, opacity: 1 },
          }}
          initial="hideslide"
          whileInView={"visibleslide"}
          className="relative overflow-hidden min-h-[400px] border w-full lg:flex-[0_0_50%]  rounded-2xl  object-cover "
        >
          <Image
            src={aboutContents.photoGallery.twoGrid[0].url}
            fill
            sizes="(min-width: 768px) 100vw "
            alt={aboutContents.photoGallery.lastTwoGrid[0].alt}
            className="w-full object-cover  "
          />
        </motion.div>
        <div className="lg:flex-[0_0_50%] flex flex-col gap-8  w-full">
          <SectionTagHeading width="lg:text-4xl  xmd:text-3xl  text-2xl !text-left font-semibold  text-[#1e1e1e]">
            Our Mission
          </SectionTagHeading>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className=" text-[#1e1e1e] flex flex-col gap-4 xmd:text-xl xmd:leading-[1.5em]"
          >
            {aboutContents.missionList.map((list, index) => (
              <motion.div variants={items} key={index}>
                {list}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionsSection;
