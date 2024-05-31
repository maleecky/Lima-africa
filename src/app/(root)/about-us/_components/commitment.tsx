import { aboutContents } from "@/lib/constants";
import React from "react";

const Commitment = () => {
  return (
    <section className="md:px-8 px-4 max-w-[140em] pb-[8.5em] mx-auto">
      <div className="flex items-center w-full h-full  justify-center">
        <div className="flex flex-col gap-10">
          <h1 className="lg:text-4xl xmd:text-3xl text-2xl xmd:mb-4 mb-1 font-bold  text-[#1e1e1e]">
            {aboutContents.commitLists.title}
          </h1>
          <div className=" text-[#1e1e1e] flex lg:flex-row flex-col  gap-4 xmd:text-2xl xmd:leading-[2.1rem]">
            {aboutContents.commitLists.lists.map((item, index) => (
              <div
                className="lg:flex-[0_0_33.33%]  flex-[0_0_100%] space-y-4 border border-slate-700/30 p-4 rounded-lg"
                key={index}
              >
                <h4 className="font-medium">{item.label}</h4>
                <p className="text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
