import ExportedImage from "next-image-export-optimizer";
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
      <div className="flex relative  justify-center items-center h-full">
        <div className="h-[500px] flex-1  rounded-2xl overflow-hidden  ">
          <ExportedImage
            src={BsfImages}
            fill
            sizes="(min-width: 768px) 70vw, (max-width: 768px) 35vw, 17vw"
            alt="black soldier fly"
            className="absolute top-0 bottom-0 -z-10 right-0 left-0 object-cover w-full rounded-lg"
          />
        </div>
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container !max-w-[30em] !h-[25em]  ">
              {impactsSection.impacts.map((impact, index) => (
                <div
                  key={index}
                  className="embla__slide !flex-[0_0_100%] backdrop-blur-[4px] rounded-lg  text-white  p-4 !px-6 flex flex-col justify-center gap-4"
                >
                  <h2 className="lg:text-[1.8em] text-[1.375em] font-medium tracking-tight flex gap-2 items-center">
                    <span>{impact.title}</span>
                    {impact.imgUrl && (
                      <ExportedImage
                        src={impact.imgUrl}
                        alt=""
                        height={40}
                        width={20}
                      />
                    )}
                  </h2>
                  <div className="flex flex-col gap-2 leading-[1.4rem]">
                    <p className="text-[1.2em]  ">
                      {impact.description?.hazard}
                    </p>
                    <p className="text-[1.2em] ">
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
