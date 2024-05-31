import { partnersContents } from "@/lib/constants";
import ExportedImage from "next-image-export-optimizer";
import React, { memo } from "react";

const Testimonials = memo(function Testimonial() {
  return Array(2)
    .fill("")
    .map((_, i) => (
      <div key={i} className="logos-slide">
        {partnersContents.partners.map((partner, index) => (
          <div className="slide relative" key={index}>
            <ExportedImage
              src={partner.img}
              fill
              sizes="(max-width: 768px) 40vw, (max-width: 1200px) 20vw, 11vw"
              alt={partner.title}
              title={partner.title}
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    ));
});

export default Testimonials;
