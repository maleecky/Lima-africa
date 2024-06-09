import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { testimonialsContents } from "@/lib/constants";
import Image from "next/image";
import quotationTag from "@/../public/assets/media/Double_quotation_marks.png";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/global/carouselBtns";
import useEmblaCarousel from "embla-carousel-react";
import SectionTagHeading from "@/components/global/tags-heading";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Reveal from "@/components/global/reveal";
import ListReveal, { itemVariant } from "@/components/global/list-reveal";

const TestimonialsSection = () => {
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
    <section
      id="testimonials"
      className="flex justify-center space-y-3 w-full max-w-[2000px] mx-auto  items-center pb-[8.5em] pt-4 flex-col  gap-[1.4rem] lg:px-14 md:px-12 px-6  "
    >
      <div className="w-full relative ">
        <div className="space-y-1 mb-4 flex justify-center items-center flex-col w-full">
          <Reveal>
            <SectionTagHeading width="max-w-[20em]">
              {testimonialsContents.description}
            </SectionTagHeading>
          </Reveal>
        </div>
      </div>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container  ">
            {testimonialsContents.testimonials.map((testimonial, index) => (
              <Reveal styles="embla__slide" key={index}>
                <Card
                  className={
                    "flex relative border-[#3D5C30]/40 shadow-none rounded-2xl h-full  border  flex-col !p-4 !pt-6  "
                  }
                >
                  <Image
                    src={quotationTag}
                    width={16}
                    height={16}
                    aria-hidden
                    alt=""
                  />
                  <CardContent className="p-2 max-xmd:!pb-8 text-[#1e1e1e]  md:my-2 max-[298px]:mb-14">
                    {testimonial.testimonial}
                  </CardContent>
                  <CardFooter className="flex absolute min-[268px]:flex-row flex-col-reverse  left-0 justify-between max-[298px]:gap-1  bottom-6 !px-5 items-start  w-full !py-0 mt-auto min-[268px]:items-center">
                    <div className="flex items-center space-x-2">
                      <Image
                        src={testimonial.photo.url}
                        height={50}
                        width={50}
                        alt={""}
                        className="rounded-full w-10 h-10 object-cover border p-2 border-slate-400"
                      />
                      <div>
                        <p className="font-[500] text-sm ">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-[#1e1e1e] ">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between max-[268px]:w-max">
                      {Array(5)
                        .fill("")
                        .map((_, i) => (
                          <svg
                            key={i}
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z"
                              fill="#E78C36"
                            />
                            <path
                              opacity="0.3"
                              d="M10.08 13.3L6.32 15.57L7.32 11.29L4 8.41L8.38 8.03L10.08 4L11.79 8.04L16.17 8.42L12.85 11.3L13.85 15.58L10.08 13.3Z"
                              fill="#FFA41C"
                            />
                          </svg>
                        ))}
                    </div>
                  </CardFooter>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="embla__controls min-[720px]:!flex !hidden">
          <div className="embla__buttons">
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
    </section>
  );
};

export default TestimonialsSection;
