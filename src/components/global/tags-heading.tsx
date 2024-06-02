import React from "react";

type props = {
  children: string;
  width: string;
};

const SectionTagHeading = ({ children, width }: props) => {
  return (
    <h2
      className={`min-[990px]:text-[min(2.5vw,1.8em)] ${width} md:text-[1.8em] xmd:text-center sm:text-[1.5em] text-[1.25em] max-[998px]:leading-[1.25em]  max-sm:leading-[1.4]  text-green-950 font-medium min-[998px]:leading-[1.4em]`}
    >
      {children}
    </h2>
  );
};

export default SectionTagHeading;
