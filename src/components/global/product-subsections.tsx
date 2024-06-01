import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { headerContents } from "@/lib/constants";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

type props = {
  btn: string;
};
const ProductSubSectionMenu = ({ btn }: props) => {
  return (
    <Sheet>
      <SheetTrigger className="!p-0 relative flex items-end gap-2 hover-arrow-animate text-[1.125em] hover:bg-transparent !border-none !outline-none">
        {btn}
        <ArrowRight width={16} className="absolute -right-5" />
      </SheetTrigger>
      <SheetContent>
        <ul className="p-4 flex justify-center items-center h-full flex-col">
          <div className="flex gap-4 flex-col">
            <SheetClose asChild>
              <Button
                variant={"ghost"}
                className="flex hover-arrow-animate mb-5 relative bg-transparent border-none outline-none md:text-[1.35em] text-[1.125em] !p-0 !h-0 w-max gap-2"
              >
                <ArrowLeft width={18} className="absolute -left-5" />
                <span>Back</span>
              </Button>
            </SheetClose>
            {headerContents.links[0].productList.map((item, index) => (
              <Link
                className=" hover:text-[#3f3f3f]  md:text-[1.35em] text-[1.25em] p-0  leading-[1]  rounded transition-all ease-in duration-100"
                href={`/products/${item.link}`}
                key={index}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default ProductSubSectionMenu;
