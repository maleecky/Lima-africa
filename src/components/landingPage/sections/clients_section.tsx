import Image from "next/image";
import foodWaste from "@/../public/assets/media/food_waste.png";
import boostIcon from "@/../public/assets/media/boost.png";
import { customersPitch } from "@/lib/constants";
import { motion } from "framer-motion";
import Reveal from "@/components/global/reveal";
import IconReveal, { iconVariant } from "@/components/global/icons-reveal";

const ClientsSection = () => {
  return (
    <section className="w-full flex xmd:justify-center xmd:items-center  xmd:max-w-[93.75em] mx-auto lg:px-20 md:px-12 px-6">
      <div className="pb-[6rem] max-w-[65em] relative  ">
        <Reveal>
          <h2 className="min-[990px]:text-[min(2.5vw,1.75em)]  md:text-[1.4em] text-[1.125em] max-[998px]:leading-[1.5em] max-sm:leading-[1.4]  text-green-950 max-xmd:font-normal font-medium min-[998px]:leading-[1.4em]">
            {customersPitch.descriptions.map((description, index) => (
              <div
                key={index}
                className="w-full block max-xmd:text-left text-center  "
              >
                {description}
              </div>
            ))}
          </h2>
        </Reveal>
        <IconReveal>
          <motion.div
            variants={iconVariant}
            className="absolute  -top-[3rem] right-6 icon"
          >
            <Image
              src={boostIcon}
              width={32}
              height={32}
              alt=""
              className="rotate-[100deg]"
            />
          </motion.div>

          <motion.div
            variants={iconVariant}
            className="absolute bottom-[2rem] left-[2rem] icon"
          >
            <Image
              src={foodWaste}
              width={32}
              height={32}
              alt=" rotate-[-100deg]"
            />
          </motion.div>
        </IconReveal>
      </div>
    </section>
  );
};

export default ClientsSection;
