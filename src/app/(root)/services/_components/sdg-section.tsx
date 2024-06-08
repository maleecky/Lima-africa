"use client";

import { Card } from "@/components/ui/card";
import { SDGContents } from "@/lib/constants";
import Image from "next/image";
import BrandValue from "./brand-value";
import ListReveal, { itemVariant } from "@/components/global/list-reveal";
import { motion } from "framer-motion";

const SdgSection = () => {
  return (
    <section className="flex justify-center w-full max-w-[2000px]  bg-[#B5D823] mx-auto  items-center pt-[7.5em] pb-[4em]  flex-col  gap-[1.4em] lg:px-14 md:px-12 px-6">
      <ListReveal styles="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {SDGContents.alignments.map((content, index) => (
          <motion.div
            variants={itemVariant}
            key={index}
            className="h-full block"
          >
            <Card className="bg-[#C6E156] py-[2.4em] flex flex-col h-full  rounded-2xl border-none shadow-none outline-none px-6">
              <div className="relative sm:w-12 w-8 sm:h-12 h-8 ">
                <Image
                  src={content.imgUrl}
                  fill
                  sizes="(min-width: 768px) 20vw, (max-width: 768px) 10vw, 5vw"
                  alt=""
                  className={"block object-cover img-container"}
                />
              </div>
              <div className="flex flex-col w-full rounded-full items-center   ">
                <div className="flex flex-col justify-center  leading-1 w-full  whitespace-normal">
                  <div className="flex justify-between relative !mb-4 items-end  min-h-full z-10 ">
                    <div className="inline-block w-full  ">
                      <p className="text-[#022F35] sm:text-[1.25em]  ">
                        {content.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </ListReveal>
      <BrandValue />
    </section>
  );
};

export default SdgSection;
