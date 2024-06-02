"use client";

import Image from "next/image";
import LarvaeGreen from "@/../public/assets/media/larvae-r.png";
import { OurWork } from "@/lib/constants";

function OurWorkSection() {
  return (
    <section className="w-full flex xmd:justify-center xmd:items-center lg:max-w-[93.75em]  mx-auto">
      <div className="py-[7.5em] lg:px-14 px-4 relative lg:max-w-[85em] max-lg:w-full   ">
        <div>
          <h2 className="min-[990px]:text-[min(2.5vw,1.8em)] md:text-[1.8em] sm:text-[1.5em] text-[1.25em] max-[998px]:leading-[1.5em] max-sm:leading-[1.4]  text-green-950 xmd:font-medium font-normal min-[998px]:leading-[1.4em]">
            {OurWork.map((work, i) => (
              <div className="w-full block xmd:text-center" key={i}>
                {work}
              </div>
            ))}
          </h2>
        </div>
        <div className="absolute top-10% right-[20%]">
          <div className=" bg-[#f3f7fc] border border-slate-200/10 h-10 w-10 flex items-center justify-center rounded-sm shadow-lg shadow-slate-100 rotate-[100deg] p-1  ">
            <Image
              src={LarvaeGreen}
              width={30}
              height={30}
              alt=""
              className="rotate-45 object-cover block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurWorkSection;
