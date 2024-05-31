import SectionTagHeading from "@/components/global/tags-heading";
import { serviceContent } from "@/lib/constants";
import React from "react";

const BrandValue = () => {
  return (
    <div className=" flex border-t border-slate-600/80 flex-col items-center justify-center pt-[3em] mt-[5em] gap-4">
      <SectionTagHeading width="max-w-[40em] !font-semibold">
        {serviceContent.pitch[1].title}
      </SectionTagHeading>
      <div className="max-w-[55em] text-[1.275em] sm:leading-[1.7em]">
        {serviceContent.pitch[1].description}
      </div>
    </div>
  );
};

export default BrandValue;
