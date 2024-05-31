import { aboutContents } from "@/lib/constants";
import ExportedImage from "next-image-export-optimizer";
import React from "react";

const WhatWeDo = () => {
  return (
    <section className="md:px-14 px-4 mb-[8.5em] py-[100px] max-w-[140em] mx-auto">
      <div className="flex lg:flex-row flex-col-reverse justify-center items-center w-full gap-10">
        <div className="lg:flex-[0_0_60%] w-full">
          <h1 className="lg:text-4xl xmd:text-3xl text-2xl xmd:mb-5 mb-1 font-medium  text-[#1e1e1e]">
            {aboutContents.LimaIntiatives[0].title}
          </h1>
          <div className=" text-[#1e1e1e] flex flex-col gap-4 xmd:text-xl xmd:leading-[1.5em]">
            {aboutContents.LimaIntiatives[0].description.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden min-h-[400px] w-full lg:flex-[0_0_40%]  rounded  object-cover ">
          <ExportedImage
            src={aboutContents.photoGallery.lonephoto.url}
            alt={aboutContents.photoGallery.lonephoto.alt}
            fill
            sizes="(min-width: 768px) 50vw, (max-width: 768px) 25vw "
            className="w-full object-cover  "
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
