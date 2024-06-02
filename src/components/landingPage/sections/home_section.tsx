import { homepageContents } from "@/lib/constants";
import { Montserrat } from "next/font/google";
import headerLarvae from "@/../public/assets/media/headerlarvae.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const montserratFont = Montserrat({ weight: "700", subsets: ["latin"] });

const HomeSection = () => {
  return (
    <section className="lg:py-0 py-[35vh] relative lg:h-screen flex flex-col justify-center items-center  w-full text-white">
      <Image
        src={headerLarvae}
        fill
        sizes="100vw"
        alt=""
        className="object-cover block -z-10 first-letter:"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 z-[-10] backdrop-blur-[1px] bg-[#0c36238a]"></div>
      <div className="flex-1 max-w-[2500px] mx-auto w-full relative flex justify-center flex-col md:px-8 px-4 ">
        <div className="flex flex-col gap-4">
          <p className="text-sm">{homepageContents.welcomeNote}</p>
          <div className="pb-4 max-xmd:pb-[2.5em] w-full flex flex-col gap-4">
            <div className="sm:leading-[1.2] leading-none">
              {homepageContents.mainHeading.map((heading, index) => (
                <h1
                  key={index}
                  className={`${montserratFont.className} w-full block whitespace-pre-wrap md:text-[3.5em] max-md:text-[2.75em] max-xmd:text-[2.175em] max-[250px]:text-[1.6em]  font-semibold xmd:tracking-wide`}
                >
                  {heading}
                </h1>
              ))}
            </div>
            <div className="block xmd:max-w-[60em] ">
              {homepageContents.mainDescription.map((description, index) => (
                <p
                  key={index}
                  className="w-full max-sm:leading-none max-xmd: leading-[1.2]  whitespace-pre-wrap block xmd:text-[1.3em] "
                >
                  {description}
                </p>
              ))}
            </div>
          </div>
          <Button
            className="bg-[#B0D93B] xmd:w-max hover:bg-[#B0D93D] max-sm:text-xs text-black max-[192px]:whitespace-normal flex space-x-2 max-[192px]:text-center !h-0 !p-6  rounded-full"
            asChild
          >
            <Link href="/products/bsf_dried" className="hover-arrow-animate">
              <span>Check our products</span>
              <ArrowRight width={14} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
