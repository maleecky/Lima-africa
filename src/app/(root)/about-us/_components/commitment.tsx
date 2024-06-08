import ListReveal, { itemVariant } from "@/components/global/list-reveal";
import Reveal from "@/components/global/reveal";
import SectionTagHeading from "@/components/global/tags-heading";
import { aboutContents } from "@/lib/constants";
import { motion, Variants } from "framer-motion";
import React from "react";

const Commitment = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 1, staggerChildren: 0.2 },
    },
  };

  const items = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section className="lg:px-14 md:px-12 px-6 max-w-[140em] pb-[7.5em] mx-auto">
      <div className="flex items-center w-full h-full  justify-center">
        <div className="flex flex-col gap-10">
          <Reveal>
            <SectionTagHeading width="lg:text-4xl xmd:text-3xl text-2xl !text-left font-bold  text-[#1e1e1e]">
              {aboutContents.commitLists.title}
            </SectionTagHeading>
          </Reveal>

          <ListReveal styles=" text-[#1e1e1e] flex lg:flex-row flex-col  gap-4 xmd:text-2xl xmd:leading-[2.1rem]">
            {aboutContents.commitLists.lists.map((item, index) => (
              <motion.div
                variants={itemVariant}
                className="lg:flex-[0_0_33.33%]  flex-[0_0_100%] space-y-4  bg-[#ADD63B] p-6 rounded-2xl"
                key={index}
              >
                <Reveal>
                  <h4 className="font-medium">{item.label}</h4>
                </Reveal>

                <Reveal>
                  <p className="text-base">{item.description}</p>
                </Reveal>
              </motion.div>
            ))}
          </ListReveal>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
