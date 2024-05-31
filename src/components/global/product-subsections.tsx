import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import { headerContents, productsContent } from "@/lib/constants";

type props = {
  btn: string;
};
const ProductSubSectionMenu = ({ btn }: props) => {
  return (
    <Sheet>
      <SheetTrigger className="!p-0 hover:bg-transparent !border-none !outline-none">
        {btn}
      </SheetTrigger>
      <SheetContent>
        <ul className="p-4 flex flex-col">
          {headerContents.links[0].productList.map((item, index) => (
            <Link
              className="p-2 lg:hover:bg-green-600 rounded transition-all ease-in duration-100 lg:hover:text-white"
              href={`/products/${item.link}`}
              key={index}
            >
              {item.label}
            </Link>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default ProductSubSectionMenu;
