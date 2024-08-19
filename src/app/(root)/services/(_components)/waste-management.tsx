import Image from "next/image";
const wasteManagementImg = "v1721898372/Group_765_lvozpv.png";
import SectionTagHeading from "@/components/global/tags-heading";
import { contactFormContents, serviceContent } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Reveal from "@/components/global/reveal";
import ImageReveal from "@/components/global/image-reveal";

const WasteManagement = () => {
  return (
    <section
      className="py-[7.5em] gap-10 flex flex-col justify-center items-cen
    er lg:px-14 md:px-8 px-4"
    >
      <Reveal>
        <SectionTagHeading width="max-w-[40em] !font-semibold">
          End-to-End Organic Waste Management Service
        </SectionTagHeading>
      </Reveal>
      <ImageReveal styles="relative h-full w-full max-w-[55em] mx-auto">
        <Image
          src={wasteManagementImg}
          height={400}
          width={200}
          alt="end to end waste management"
          className="object-contain h-full w-full"
        />
      </ImageReveal>
      <div className="pt-[5em]  max-w-[55em] mx-auto pb-4">
        <Reveal>
          <h4 className="text-2xl leading-[1.6em] text-center">
            {"Our vision is " + serviceContent.vision}
          </h4>
        </Reveal>

        <div className="w-full flex justify-center items-center pt-5">
          <Reveal>
            <Button
              asChild
              className="bg-green-950  lg:hover:bg-green-800  py-6 px-6 rounded-full !h-0"
            >
              <Link
                href={`https://wa.me/${
                  contactFormContents.contactsInformation[0].label.split("+")[1]
                }?text=Hello%20Lima%20`}
              >
                Chat us on whatsapp
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WasteManagement;
