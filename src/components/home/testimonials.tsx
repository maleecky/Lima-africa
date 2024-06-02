import { partnersContents } from "@/lib/constants";
import Image from "next/image";
import React, { memo } from "react";

const Testimonials = memo(function Testimonial() {
  return Array(2)
    .fill("")
    .map((_, i) => (
      <div key={i} className="logos-slide">
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
