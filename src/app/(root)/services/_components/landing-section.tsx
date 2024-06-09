import { serviceContent } from "@/lib/constants";
import Image from "next/image";
import Food from "@/../public/assets/media/foods.jpg";
import Reveal from "@/components/global/reveal";

const LandingSection = () => {
  return (
    <section className="lg:py-0 py-[35vh] relative lg:h-screen flex flex-col justify-center items-center  w-full text-white lg:px-14 md:px-8 px-4">
      <Image
        src={Food}
        fill
        sizes="(min-width:768px) 100vw"
        alt=""
        className="object-cover  block -z-10"
      />
      <div className="absolute top-0 backdrop-blur-[1px] bottom-0 left-0 right-0 z-[-10]  bg-[#0c36238a]"></div>
      <div>
        <div className="w-full flex flex-col items-center justify-center pt-[4em] gap-10 sm:max-w-[65em] max-sm:max-w-full max-auto">
          <h1 className="text-4xl max-w-[20em] font-semibold leading-[1em] z-[10] lg:text-[3em] text-[#ffffff] text-center  whitespace-wrap">
            <Reveal>{serviceContent.pitch[0].title}</Reveal>
          </h1>
          <Reveal>
            <p className="lg:text-[1.25em] text-base leading-[1.5em] max-w-[40em]">
              {serviceContent.pitch[0].description}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
