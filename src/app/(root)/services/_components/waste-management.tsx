import ExportedImage from "next-image-export-optimizer";
import wasteManagementImg from "@/../public/assets/media/Group+765.png";
import SectionTagHeading from "@/components/global/tags-heading";
import { contactFormContents, serviceContent } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const WasteManagement = () => {
  return (
    <section
      className="py-[7.5em] gap-10 flex flex-col justify-center items-cen
    er lg:px-14 md:px-8 px-4"
    >
      <SectionTagHeading width="max-w-[40em] !font-semibold">
        End-to-End Organic Waste Management Service
      </SectionTagHeading>
      <div className="relative h-full w-full max-w-[55em] mx-auto">
        <ExportedImage
          src={wasteManagementImg}
          height={400}
          alt="end to end waste management"
          className="object-contain h-full w-full"
        />
      </div>
      <div className="pt-[5em]  max-w-[55em] mx-auto pb-4">
        <h4 className="text-2xl leading-[1.6em] max-xmd:text-center">
          {"Our vision is " + serviceContent.vision}
        </h4>

        <div className="w-full flex justify-center items-center pt-5">
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
        </div>
      </div>
    </section>
  );
};

export default WasteManagement;
