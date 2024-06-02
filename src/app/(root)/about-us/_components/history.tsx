import { aboutContents } from "@/lib/constants";
import React from "react";
import CustomizedTimeline from "./timeline";

const LimaHistory = () => {
  return (
    <section className="lg:px-8 px-4 max-w-[140em] pb-[7.5em] mx-auto">
      <div className="flex items-center w-full h-full  justify-center">
        <div className="flex justify-center items-center flex-col gap-10">
          <h1 className="lg:text-4xl xmd:text-3xl text-2xl xmd:mb-5 mb-1 font-semibold  text-[#1e1e1e]">
            {aboutContents.history.title}
          </h1>
          <CustomizedTimeline />
        </div>
      </div>
    </section>
  );
};

export default LimaHistory;
