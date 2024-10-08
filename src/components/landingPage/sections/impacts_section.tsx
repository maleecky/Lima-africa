import Image from "next/image";
const BsfImages = "v1721898361/BSF_image_azkr9h.jpg";
import React from "react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/global/carouselBtns";
import useEmblaCarousel from "embla-carousel-react";
import { impactsSection } from "@/lib/constants";
import Autoplay from "embla-carousel-autoplay";
import Reveal from "@/components/global/reveal";

const ImpactsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: "auto" }, [
    Autoplay(),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <section className="w-full mb-[7.5rem] lg:px-14 md:px-12 px-6 ">
      <div className="flex relative  w-full h-full">
        <div className="min-h-[500px] relative w-full rounded-2xl overflow-hidden  ">
          <Image
            src={BsfImages}
            fill
            sizes="(min-width: 600px) 100vw, (min-width: 1200px) 50vw, 33vw"
            alt="black soldier fly"
            className="object-cover"
          />
        </div>
        <div className="embla !absolute h-full right-0 top-0 pt-4 !flex !justify-center !items-center">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container   min-[960px]:!max-w-[25em] !max-w-full !h-[25em]   ">
              {impactsSection.impacts.map((impact, index) => (
                <div
                  key={index}
                  className="embla__slide !flex-[0_0_100%] backdrop-blur-[4px] rounded-lg  text-white  p-4 !px-6 flex flex-col justify-center gap-4"
                >
                  <Reveal>
                    <h2 className="lg:text-[1.4em]  text-[1.25em] font-bold flex gap-2 items-center">
                      <span>{impact.title}</span>
                    </h2>
                  </Reveal>
                  <div className="flex flex-col gap-2 sm:leading-[1.8rem] md:max-w-[30em] max-w-[40em] leading-[1.2rem]">
                    <Reveal>
                      <p className="text-[1.0625em]  ">
                        {impact.description?.hazard}
                      </p>
                    </Reveal>
                    <Reveal>
                      <p className="text-[1.0625em] ">
                        {impact.description?.impact}
                      </p>
                    </Reveal>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="embla__controls md:!flex hidden">
            <div className="embla__buttons ">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactsSection;
