import clsx from "clsx";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { contactFormContents } from "@/lib/constants";

const MainFooter = ({ theme }: { theme?: string }) => {
  return (
    <div
      className={clsx(
        " max-md:text-sm flex flex-col items-center justify-center gap-4  w-full  text-center lg:px-8 px-4",
        {
          "text-white": theme,
          "text-[#1e1e1e]": !theme,
        }
      )}
    >
      <div>
        <p>Copyright © 2023 LIMA Co. Ltd. All rights reserved.</p>
        <div className="text-center">
          <a href="/privacy-policy">Privacy Policy</a> |{" "}
          <a href="/terms-and-conditions">Terms and Conditions</a>
        </div>
      </div>
      <ul className="flex lg:relative items-center ">
        <div className="flex max-[210px]:flex-col flex-row gap-5 ">
          {contactFormContents.socials.map((social, index) => (
            <Button
              key={index}
              asChild
              className={clsx(
                "rounded-full px-3 py-3  border border-slate-200   ",
                {
                  "bg-[#1e1e1e]": !theme,
                  "bg-transparent": theme,
                }
              )}
            >
              <Link href={social.link}>{social.icon()}</Link>
            </Button>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default MainFooter;
