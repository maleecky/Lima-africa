import { aboutContents } from "@/lib/constants";
import Image from "next/image";
import headerLarvae from "@/../public/assets/media/headerlarvae.png";
import SlidesBg from "@/components/landingPage/bg-slides/slides_bg";
import Reveal from "@/components/global/reveal";

const AboutSection = () => {
  return (
    <section className="lg:py-0 py-[45vh] relative lg:h-screen flex flex-col justify-center items-center  w-full text-white">
      <SlidesBg />
      <div className="z-20">
        <div className="w-full max-w-[80em] max-auto">
          <h1 className="text-6xl font-semibold tracking-wide leading-[1.4em] lg:text-[100px] text-[#ffffff] text-center  whitespace-wrap">
            <Reveal>{aboutContents.mainLabel}</Reveal>
            <Reveal>Lima Africa</Reveal>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
