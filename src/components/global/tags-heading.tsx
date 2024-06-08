"use client";

import React from "react";

type props = {
  children: string | React.ReactNode;
  width: string;
};

const SectionTagHeading = ({ children, width }: props) => {
  return (
    <h2
      className={`${
        width.includes("text")
          ? width
          : `${width} min-[990px]:text-[min(2.5vw,1.8em)]  md:text-[1.8em] sm:text-[1.5em] text-[1.25em]`
      }  xmd:text-center  max-[998px]:leading-[1.25em]  max-sm:leading-[1.4]  text-green-950 font-semibold min-[998px]:leading-[1.4em]`}
    >
      {children}
    </h2>
  );
};

export default SectionTagHeading;
