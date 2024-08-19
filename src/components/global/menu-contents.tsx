import React from "react";
import { SheetClose, SheetContent } from "../ui/sheet";
import { headerContents } from "@/lib/constants";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const MenuContents = () => {
  return (
    <SheetContent>
      <div className=" z-[1000000] h-full w-full flex items-center xmd:!pl-8 ">
        <div>
          <Accordion
            type="single"
            collapsible
            className=" flex flex-col !m-0 p-0 gap-4 !mb-[1.5em]"
          >
            {headerContents.links.map((link, index) => {
              let num = 2;
              if (link.label === "Products") {
                return (
                  <AccordionItem
                    key="index"
                    className="border-none w-full font-normal "
                    value="item-1"
                  >
                    <AccordionTrigger className="text-[1.2em] !p-0 font-normal text-green-950">
                      <Button
                        variant={"ghost"}
                        className="text-[1.25em] text-green-950 p-0 font-normal !bg-transparent"
                      >
                        Products
                      </Button>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-3 pt-4 ">
                      {headerContents.links[0].productList.map(
                        (item, index) => (
                          <div key={index}>
                            <SheetClose asChild className="w-full">
                              <Link
                                className=" hover:text-[#3f3f3f]  xmd:!text-[1.35em] !text-[1.25em] p-0  leading-[1]  rounded transition-all ease-in duration-100"
                                href={`/${item.link}`}
                              >
                                {item.label}
                              </Link>
                            </SheetClose>
                          </div>
                        )
                      )}
                    </AccordionContent>
                  </AccordionItem>
                );
              }
              return (
                <AccordionItem
                  key="index"
                  className="border-none font-normal p-0 w-full flex    justify-start accordion  "
                  value={`item-${num++}`}
                >
                  <AccordionTrigger className="!p-0 !font-normal ">
                    <SheetClose asChild>
                      <Link
                        href={link.path}
                        className="text-[1.5em] text-green-950"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  </AccordionTrigger>
                </AccordionItem>
              );
            })}
          </Accordion>
          <SheetClose>
            <Button
              asChild
              className="bg-slate-300 p-6 text-base   rounded-full hover:bg-slate-400"
            >
              <Link href={"/contact"} className="space-x-3">
                <div className="relative w-4 h-4">
                  <Image
                    src={headerContents.contactBtn.icon}
                    fill
                    alt=""
                    className="block object-cover"
                  />
                </div>
                <span className="text-green-950">
                  {headerContents.contactBtn.label}
                </span>
              </Link>
            </Button>
          </SheetClose>
        </div>
      </div>
    </SheetContent>
  );
};

export default MenuContents;
