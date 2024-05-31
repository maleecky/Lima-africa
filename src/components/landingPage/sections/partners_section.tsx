import { partnersContents } from "@/lib/constants";
import ExportedImage from "next-image-export-optimizer";
import SectionTagHeading from "../../global/tags-heading";
import Testimonials from "@/components/home/testimonials";

const PartnersSection = () => {
  return (
    <section id="partners" className="pb-[7.5rem]">
      <div className="flex justify-center w-full max-w-[2000px] items-center mx-auto flex-col  gap-[1.4rem] px-4 ">
        <div className="  xmd:leading-[2rem] leading-[1.5rem] w-full items-center justify-center flex relative ">
          <div className="  flex justify-center items-center flex-col w-full">
            <SectionTagHeading width="max-w-[17em] ">
              {partnersContents.description}
            </SectionTagHeading>
          </div>
        </div>
        <div className="logos ">
          <Testimonials />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
