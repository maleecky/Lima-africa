import React from "react";
import ContactForm from "../forms/contact_form";
import { Button } from "../ui/button";
import Link from "next/link";
import { contactFormContents } from "@/lib/constants";

import GoogleMaps from "./google-map";

const Contact = () => {
  return (
    <div className="flex w-full lg:items-start items-center lg:flex-row lg:pb-4 pb-[5rem] flex-col lg:justify-center lg:gap-40 space-x-0  justify-between   relative  ">
      <div className="z-10 flex mb-[2rem]  flex-col lg:items-start  items-center">
        <h4 className="text-2xl max-sm:text-xl  font-medium mb-2">
          {contactFormContents.formHeader}
        </h4>
        <p className="text-center max-xs:text-sm lg:text-left ">
          {contactFormContents.description}
        </p>
        <ul className="mt-6 ">
          <div className="max-w-[400px] max-xs:text-sm  mx-auto space-y-2">
            {contactFormContents.contactsInformation.map(
              (information, index) => (
                <div key={index} className="flex space-x-2 items-center">
                  {information.icon()}
                  <p>{information.label}</p>
                </div>
              )
            )}
          </div>
        </ul>
        <GoogleMaps />
        <ul className="flex lg:relative bottom-0 absolute items-center  lg:my-8">
          <div className="space-x-5 ">
            {contactFormContents.socials.map((social, index) => (
              <Button
                key={index}
                asChild
                className="sm:rounded-full sm:px-3 sm:py-0.5 p-0 sm:bg-[#0C3623] bg-transparent max-sm:hover:bg-transparent  "
              >
                <Link href={social.link}>{social.icon()}</Link>
              </Button>
            ))}
          </div>
        </ul>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
