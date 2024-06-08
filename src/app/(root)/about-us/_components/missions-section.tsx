import ImageReveal from "@/components/global/image-reveal";
import Reveal from "@/components/global/reveal";
import SectionTagHeading from "@/components/global/tags-heading";
import { aboutContents } from "@/lib/constants";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const MissionsSection = () => {
  return (
    <section className="lg:px-20 md:px-12 px-6 mb-[7.5em] max-w-[140em] mx-auto">
      <div className="flex lg:flex-row flex-col gap-20 justify-center items-center w-full ">
        <ImageReveal styles="relative overflow-hidden min-h-[400px] border w-full lg:flex-[0_0_50%]  rounded-2xl  object-cover ">
          <Image
            src={aboutContents.photoGallery.twoGrid[0].url}
            fill
            sizes="(min-width: 768px) 100vw "
            alt={aboutContents.photoGallery.lastTwoGrid[0].alt}
            className="w-full object-cover  "
          />
        </ImageReveal>
        <div className="lg:flex-[0_0_50%] flex flex-col gap-8  w-full">
          <Reveal>
            <SectionTagHeading width="lg:text-4xl  xmd:text-3xl  text-2xl !text-left font-semibold  text-[#1e1e1e]">
              Our Mission
            </SectionTagHeading>
          </Reveal>
          <div className=" text-[#1e1e1e] flex flex-col gap-4 xmd:text-xl xmd:leading-[1.5em]">
            {aboutContents.missionList.map((list, index) => (
              <Reveal key={index}>{list}</Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionsSection;
