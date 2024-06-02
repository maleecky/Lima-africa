import { aboutContents } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const MissionsSection = () => {
  return (
    <section className="md:px-14 px-4 mb-[8.5em] py-[100px] bg-[#EFF7FF] max-w-[140em] mx-auto">
      <div className="flex lg:flex-row flex-col justify-center items-center w-full gap-10">
        <div className="relative overflow-hidden min-h-[400px] w-full lg:flex-[0_0_50%]  rounded  object-cover ">
          <Image
            src={aboutContents.photoGallery.twoGrid[0].url}
            fill
            sizes="(min-width: 768px) 50vw, (max-width: 768px) 25vw "
            alt={aboutContents.photoGallery.lastTwoGrid[0].alt}
            className="w-full object-cover  "
          />
        </div>
        <div className="lg:flex-[0_0_50%] w-full">
          <h1 className="lg:text-4xl  xmd:text-3xl  text-2xl xmd:mb-5 mb-1 font-semibold  text-[#1e1e1e]">
            Our Mission
          </h1>
          <div className=" text-[#1e1e1e] flex flex-col gap-4 xmd:text-xl xmd:leading-[1.5em]">
            {aboutContents.missionList.map((list, index) => (
              <div key={index}>{list}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionsSection;
