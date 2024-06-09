import { aboutContents } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import Reveal from "@/components/global/reveal";
import ImageReveal from "@/components/global/image-reveal";

const WhatWeDo = () => {
  return (
    <section className="lg:px-20 md:px-12 px-6 mb-[7.5em] pt-[100px] max-w-[140em] mx-auto">
      <div className="flex lg:flex-row flex-col-reverse justify-center items-center w-full gap-20">
        <div className="lg:flex-[0_0_60%] w-full">
          <h1 className="lg:text-4xl xmd:text-3xl text-2xl xmd:mb-5 mb-1 font-medium  text-[#1e1e1e]">
            {aboutContents.LimaIntiatives[0].title}
          </h1>
          <div className=" text-[#1e1e1e] flex flex-col gap-4 xmd:text-xl xmd:leading-[1.5em]">
            {aboutContents.LimaIntiatives[0].description.map((item, index) => (
              <Reveal key={index}>
                <p>{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <ImageReveal styles="relative overflow-hidden min-h-[400px] w-full lg:flex-[0_0_40%]  rounded-2xl  object-cover ">
          <Image
            src={aboutContents.photoGallery.lonephoto.url}
            alt={aboutContents.photoGallery.lonephoto.alt}
            fill
            sizes="(min-width:768px) 100vw"
            className="w-full object-cover border  "
          />
        </ImageReveal>
      </div>
    </section>
  );
};

export default WhatWeDo;
