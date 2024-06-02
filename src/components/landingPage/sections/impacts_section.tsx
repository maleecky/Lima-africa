import Image from "next/image";
import BsfImages from "@/../public/assets/media/BSF_image.jpeg";
import React from "react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/global/carouselBtns";
import useEmblaCarousel from "embla-carousel-react";
import { impactsSection } from "@/lib/constants";

const ImpactsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: "auto" });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <section className="w-full mb-[7.5rem] lg:px-14 md:px-8 px-4 ">
      <div className="flex relative  w-full h-full">
        <div className="min-h-[500px] relative w-full rounded-2xl overflow-hidden  ">
          <Image
            src={BsfImages}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="black soldier fly"
            className="object-cover"
          />
        </div>
        <div className="embla !absolute h-full right-0 top-0 pt-4 flex justify-center">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container   !max-w-[25em] !h-[25em]  ">
              {impactsSection.impacts.map((impact, index) => (
                <div
                  key={index}
                  className="embla__slide !flex-[0_0_100%] backdrop-blur-[4px] rounded-lg  text-white  p-4 !px-6 flex flex-col justify-center gap-4"
                >
                  <h2 className="lg:text-[1.4em] text-[1.25em] font-medium tracking-tight flex gap-2 items-center">
                    <span>{impact.title}</span>
                    {impact.imgUrl && (
                      <Image
                        src={impact.imgUrl}
                        alt=""
                        height={40}
                        width={20}
                        className="w-10 h-10"
                      />
                    )}
                  </h2>
                  <div className="flex flex-col gap-2 sm:leading-[1.5rem] leading-[1.2rem]">
                    <p className="text-[1.0625em]  ">
                      {impact.description?.hazard}
                    </p>
                    <p className="text-[1.0625em] ">
                      {impact.description?.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="embla__controls">
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
