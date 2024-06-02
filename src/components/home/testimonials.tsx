"use client";

import { partnersContents } from "@/lib/constants";
import clsx from "clsx";
import Image from "next/image";
import React, { memo, useEffect, useState } from "react";

const Testimonials = memo(function Testimonial() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsMounted(true), 100);

    return () => clearTimeout(timeoutId);
  }, []);
  return Array(2)
    .fill("")
    .map((_, i) => (
      <div
        key={i}
        className={clsx("logos-slide", {
          "pause-animation": !isMounted,
          "start-animation": isMounted,
        })}
      >
        {partnersContents.partners.map((partner, index) => (
          <div className="slide relative" key={index}>
            <Image
              src={partner.img}
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={partner.title}
              title={partner.title}
            />
          </div>
        ))}
      </div>
    ));
});

export default Testimonials;
