import { homepageContents } from "@/lib/constants";
import { Montserrat } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SlidesBg from "../bg-slides/slides_bg";
import Reveal from "@/components/global/reveal";

const montserratFont = Montserrat({ weight: "700", subsets: ["latin"] });

const HomeSection = () => {
  return (
    <section className="lg:py-0 max-lg:pt-[24vh] max-lg:pb-[30vh] relative lg:h-screen flex flex-col justify-center items-center  w-full text-white">
      <SlidesBg />
      <div className="flex-1 max-w-[2500px] mx-auto w-full overflow-hidden relative flex justify-center flex-col md:px-8 px-4 z-20">
        <div className="flex flex-col gap-4">
          <Reveal>
            <p className="text-sm">{homepageContents.welcomeNote}</p>
          </Reveal>
          <div className="pb-4 max-xmd:pb-[2.5em] w-full flex flex-col gap-4">
            <div className="sm:leading-[1.2] leading-none">
              {homepageContents.mainHeading.map((heading, index) => (
                <Reveal key={index}>
                  <h1
                    className={`${montserratFont.className} w-full block whitespace-pre-wrap min-[695px]:text-[3.5em]  text-[min(11vw,2.8em)] max-md:leading-[min(12vw,50px)] font-semibold tracking-wide `}
                  >
                    {heading}
                  </h1>
                </Reveal>
              ))}
            </div>
            <div className="block xmd:max-w-[60em] ">
              {homepageContents.mainDescription.map((description, index) => (
                <Reveal key={index}>
                  <p className="w-full max-sm:leading-none max-xmd: leading-[1.2]  whitespace-pre-wrap block xmd:text-[1.3em] ">
                    {description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal>
            <Button
              className="bg-[#d4ffe3] hover:bg-[#d4ffe3] backdrop-blur-[4px] sm:w-max max-sm:text-xs text-black  whitespace-pre-wrap flex space-x-2 max-[192px]:text-center !h-0 !p-6  rounded-full"
              asChild
            >
              <Link href="/bsf_dried" className="hover-arrow-animate">
                <span>Check our products</span>
                <ArrowRight width={14} />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
