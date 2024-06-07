import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import styles from "./embla.module.css";

interface props {
  slides: { url: StaticImageData }[];
  options?: EmblaOptionsType;
}
const SlidesCarousel = ({ slides, options }: props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className={styles.embla}>
      <div className="absolute h-full w-full bg-[#0000009d] z-10"></div>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, index) => (
            <Image
              key={index}
              src={slide.url}
              width={1200}
              height={1200}
              alt=""
              className={styles.embla__slide}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidesCarousel;
