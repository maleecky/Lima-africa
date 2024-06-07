import SectionTagHeading from "@/components/global/tags-heading";
import { aboutContents } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const TeamSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      slidesToScroll: "auto",
      active: true,
      breakpoints: {
        "(min-width: 1120px)": { active: false },
      },
    },
    [Autoplay()]
  );
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };
  return (
    <section className="flex flex-col gap-8 bg-[#EFF7FF] items-center justify-center py-10  lg:px-10 md:px-12 px-6  ">
      <div className="max-w-[800px] text-center">
        <SectionTagHeading width="lg:text-4xl xmd:text-3xl text-2xl xmd:mb-5 mb-1 font-semibold tracking-tight ">
          {aboutContents.Team.title}
        </SectionTagHeading>
        <motion.p
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          className=" text-slate-700 xmd:text-xl xmd:leading-[2rem] "
        >
          {aboutContents.Team.description}
        </motion.p>
      </div>

      <div className="relative flex w-full pt-10 lg:flex-row overflow-x-auto flex-col  items-center whitespace-nowrap">
        <div className="embla !w-full">
          <div className="embla__viewport !w-full" ref={emblaRef}>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="embla__container !w-full !gap-2  "
            >
              {aboutContents.Team.members.map((member, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="embla__slide xl:!flex-[0_0_20%] !flex-[0_0_33%]"
                >
                  <Link
                    href={member.linkedinLink}
                    className=" flex  relative  bg-transparent justify-center items-center flex-col "
                  >
                    <div className="relative min-[720px]:h-32 h-56  min-[720px]:w-32 w-56">
                      <Image
                        src={member.img}
                        width={200}
                        sizes=""
                        alt={member.name}
                        className=" object-cover w-full h-full  object-center rounded-full"
                      />
                    </div>

                    <div className="flex p-2 flex-col items-center w-full   ">
                      <h4 className="text-sm font-medium leading-relaxed">
                        {member.name.toUpperCase()}
                      </h4>
                      <p className="text-sm text-slate-500 px-2">
                        {member.title}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
