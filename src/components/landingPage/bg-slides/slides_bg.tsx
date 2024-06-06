import { homepageContents } from "@/lib/constants";
import React from "react";
import SlidesCarousel from "./slidesCarousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { align: "start" };

const SlidesBg = () => {
  return (
    <SlidesCarousel slides={homepageContents.homeSlides} options={OPTIONS} />
  );
};

export default SlidesBg;
