"use client";

import { partnersContents } from "@/lib/constants";
import clsx from "clsx";
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { memo, useEffect, useRef, useState } from "react";

const Testimonials = memo(function Testimonial() {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (isInView) {
      setIsMounted(true);
    }
  }, [isInView]);
  return Array(2)
    .fill("")
    .map((_, i) => (
      <div
        ref={containerRef}
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
              sizes="(min-width: 600px) 100vw, (min-width: 1200px) 50vw, 33vw"
              alt={partner.title}
              title={partner.title}
            />
          </div>
        ))}
      </div>
    ));
});

export default Testimonials;
