import Reveal from "@/components/global/reveal";
import SectionTagHeading from "@/components/global/tags-heading";
import { serviceContent } from "@/lib/constants";
import React from "react";

const BrandValue = () => {
  return (
    <div className=" flex border-t border-slate-600/80 flex-col items-center justify-center pt-[3em] mt-[5em] gap-4">
      <Reveal>
        <SectionTagHeading width="max-w-[40em] !font-semibold">
          {serviceContent.pitch[1].title}
        </SectionTagHeading>
      </Reveal>
      <div className="max-w-[55em] text-[1.275em] sm:leading-[1.7em]">
        <Reveal>{serviceContent.pitch[1].description}</Reveal>
      </div>
    </div>
  );
};

export default BrandValue;
