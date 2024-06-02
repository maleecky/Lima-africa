import React from "react";
import { SheetClose, SheetContent } from "../ui/sheet";
import { headerContents } from "@/lib/constants";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import ProductSubSectionMenu from "./product-subsections";

const MenuContents = () => {
  return (
    <SheetContent>
      <div className="flex flex-col gap-5 z-[1000000] w-full h-full items-center justify-center">
        {headerContents.links.map((link, index) => {
          if (link.label === "Products") {
            return (
              <SheetClose key={index} asChild>
                <ProductSubSectionMenu btn={link.label} />
              </SheetClose>
            );
          }
          return (
            <SheetClose key={index} asChild>
              <Link href={link.path} className="text-[1.2em] text-green-950">
                {link.label}
              </Link>
            </SheetClose>
          );
        })}
        <SheetClose asChild>
          <Button
            asChild
            className="bg-slate-300 rounded-full hover:bg-slate-400"
          >
            <Link href={"/contact"} className="space-x-3">
              <div className="relative w-4 h-4">
                <Image
                  src={headerContents.contactBtn.icon}
                  fill
                  alt=""
                  sizes="100vw"
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
    </SheetContent>
  );
};

export default MenuContents;
