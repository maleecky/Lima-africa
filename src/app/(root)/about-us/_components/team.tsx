import SectionTagHeading from "@/components/global/tags-heading";
import { aboutContents } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Reveal from "@/components/global/reveal";
import ImageReveal from "@/components/global/image-reveal";

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
  return (
    <section className="flex flex-col gap-8 bg-[#EFF7FF] items-center justify-center py-10  lg:px-10 md:px-12 px-6  ">
      <div className="max-w-[800px] text-center">
        <Reveal>
          <SectionTagHeading width="lg:text-4xl xmd:text-3xl text-2xl xmd:mb-5 mb-1 font-semibold tracking-tight ">
            {aboutContents.Team.title}
          </SectionTagHeading>
        </Reveal>
        <Reveal>
          <p className=" text-slate-700 xmd:text-xl xmd:leading-[2rem] ">
            {aboutContents.Team.description}
          </p>
        </Reveal>
      </div>

      <div className="embla !w-full">
        <div className="embla__viewport !w-full" ref={emblaRef}>
          <div className="embla__container !w-full !gap-2  ">
            {aboutContents.Team.members.map((member, index) => (
              <div
                key={index}
                className="embla__slide xl:!flex-[0_0_20%] !flex-[0_0_33%]"
              >
                <Link
                  href={member.linkedinLink}
                  className=" flex  relative  bg-transparent justify-center items-center flex-col "
                >
                  <ImageReveal styles="relative min-[720px]:h-32 h-56  min-[720px]:w-32 w-56">
                    <Image
                      src={member.img}
                      width={200}
                      sizes=""
                      alt={member.name}
                      className=" object-cover w-full h-full  object-center rounded-full"
                    />
                  </ImageReveal>

                  <div className="flex p-2 flex-col items-center w-full   ">
                    <Reveal>
                      <h4 className="text-sm font-medium leading-relaxed">
                        {member.name.toUpperCase()}
                      </h4>
                    </Reveal>
                    <Reveal>
                      <p className="text-sm text-slate-500 px-2">
                        {member.title}
                      </p>
                    </Reveal>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
