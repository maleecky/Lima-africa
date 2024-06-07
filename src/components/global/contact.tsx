import { contactFormContents } from "@/lib/constants";
import { Button } from "../ui/button";
import Link from "next/link";
import GoogleMaps from "./google-map";
import { Mail, PhoneCall } from "lucide-react";
import ContactForm from "../forms/contact_form";
import clsx from "clsx";

type props = {
  hideCss?: string;
};

const Contact = ({ hideCss }: props) => {
  return (
    <div className="flex w-full py-[4em] lg:items-start lg:flex-row lg:pb-4 pb-[5rem] flex-col  lg:gap-20   justify-between relative  ">
      <div
        className={clsx("z-10 flex flex-[0_0_50%] flex-col lg:items-start ", {
          "max-lg:hidden": hideCss,
        })}
      >
        <h4 className="text-[2em]  font-medium mb-2">
          {contactFormContents.formHeader}
        </h4>
        <p className=" text-xl lg:text-left ">
          {contactFormContents.description}
        </p>
        <Button
          className="bg-[#013941] lg:hover:bg-[#013494] p-6 w-max lg:hidden flex mt-7 max-xmd:w-full"
          asChild
        >
          <Link href="/contact">Fill in the Form</Link>
        </Button>
        <GoogleMaps />
        <div className="mt-8 max-sm:flex-col flex-row flex xmd:gap-20 gap-10">
          <Link
            href={`mailto:${contactFormContents.contactsInformation[1].label}`}
            className="space-y-1"
          >
            <div>
              <Mail className="w-8 h-8" />
              <h4 className="text-[1.125em] font-medium ">Email</h4>
            </div>
            <p className="text-sm">
              {contactFormContents.contactsInformation[1].label}
            </p>
          </Link>
          <Link
            href={`tel:${contactFormContents.contactsInformation[0].label}`}
            className="space-y-1"
          >
            <div>
              <PhoneCall className="w-8 h-8" />
              <h4 className="text-[1.125em] font-medium">Phone</h4>
            </div>
            <p className="text-sm">
              {contactFormContents.contactsInformation[0].label}
            </p>
          </Link>
        </div>
      </div>
      <ContactForm hideCss={hideCss} />
    </div>
  );
};

export default Contact;
