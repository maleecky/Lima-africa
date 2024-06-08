import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { homepageContents } from "@/lib/constants";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import Reveal from "@/components/global/reveal";
const CollaborateSection = () => {
  return (
    <section className="flex justify-center w-full max-w-[2000px] mx-auto items-center pb-[2em] pt-4 lg:px-20 md:px-12 px-6 ">
      <div className="flex  min-[845px]:flex-row flex-col gap-4  w-full mx-auto justify-center    ">
        {homepageContents.registrationCards.map((card, index) => (
          <div key={index}>
            <Card
              className={clsx(
                "lg:flex-1 max-xmd:flex-col max-[300px]:h-full !py-[2.5rem] space-x-3 rounded-2xl xmd:space-x-0 max-xmd:space-y-3  border-0 shadow-none relative min-[845px]:h-[200px] flex max-lg:flex-row  flex-row  items-center justify-between overflow-hidden p-4",
                {
                  "text-white bg-[#0C3623]": card.theme === "black",
                  "text-[#fff] bg-[#0C3623]": card.theme === "white",
                }
              )}
            >
              <CardHeader className="md:p-4 p-2 flex-1">
                <Reveal>
                  <p
                    className={clsx(
                      "text-xl  text-[#fff] max-lg:mb-2  max-[390px]:whitespace-wrap font-medium min-[905px]:mb-2 mb-0 !p-0"
                    )}
                  >
                    {card.title}
                  </p>
                </Reveal>
                <Reveal>
                  <p className={"text-[#fff]"}>{card.description}</p>
                </Reveal>
              </CardHeader>
              <CardContent className=" max-lg:w-max max-xmd:w-full p-0 ">
                <Reveal>
                  <Button
                    asChild
                    variant={"outline"}
                    className={
                      "flex flex-col min-[905px]:py-2 py-[2px] w-full rounded-full border-[2px] text-slate-50 border-slate-50/60  bg-transparent backdrop-blur-2xl  px-4"
                    }
                  >
                    <Link href={card.link.path}>{card.link.title}</Link>
                  </Button>
                </Reveal>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollaborateSection;
