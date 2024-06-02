import { aboutContents } from "@/lib/constants";
import Image from "next/image";
import headerLarvae from "@/../public/assets/media/headerlarvae.png";

const AboutSection = () => {
  return (
    <section className="lg:py-0 py-[45vh] relative lg:h-screen flex flex-col justify-center items-center  w-full text-white">
      <Image
        src={headerLarvae}
        fill
        sizes="100vw"
        alt=""
        className="object-cover  block -z-10"
      />
      <div className="absolute top-0 backdrop-blur-[1px] bottom-0 left-0 right-0 z-[-10]  bg-[#0c36238a]"></div>
      <div>
        <div className="w-full max-w-[80em] max-auto">
          <h1 className="text-4xl font-semibold tracking-wide leading-[1.4em] z-[100] lg:text-[100px] text-[#ffffff] text-center  whitespace-wrap">
            <div>{aboutContents.mainLabel}</div>
            <div>Lima Africa</div>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
