"use client";

import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { MenuSheet } from "./menu-bar";
import { headerContents } from "@/lib/constants";
import limaWhite from "@/../public/assets/media/lima-logo.png";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

type props = {
  theme?: string;
};

const MainHeader = ({ theme }: props) => {
  const pageUrl = usePathname();

  return (
    <header className="md:p-4 md:!px-8 py-5 px-2  absolute top-0 w-full flex items-center justify-between z-10">
      <aside className="flex items-center gap-2 ">
        <Link href={"/"} className="w-full ">
          <ExportedImage
            src={theme ? limaWhite : headerContents.logourl}
            width={80}
            height={80}
            alt=""
            className="object-cover block "
          />
        </Link>
      </aside>
      <nav className="hidden min-[990px]:block absolute left-[50%] transform translate-x-[-50%] ">
        <ul className="flex items-center py-1.5 px-8  backdrop-blur justify-center gap-8 rounded-3xl text-nowrap">
          {headerContents.links.map((link, index) => {
            if (link.label !== "Products") {
              return (
                <Link
                  className={clsx("text-[1.125em]  ", {
                    "text-[#fff] font-medium":
                      !pageUrl.includes(link.path) && !theme,
                    "text-[#1e1e1e]": theme,
                    "text-[#b0d93b] font-medium": pageUrl.includes(link.path),
                  })}
                  key={index}
                  href={link.path}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <NavigationMenu key={index}>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={clsx(
                      "p-0 bg-transparent rounded-none shadow-none text-[1.125em]  hover:!bg-transparent focus:!bg-transparent focus:!outline-none focus:!outline-offset-0",
                      {
                        "text-[#fff] font-medium  hover:!text-white focus:!text-white ":
                          !pageUrl.includes(link.path) && !theme,
                        "text-[#1e1e1e]  hover:!text-[#1e1e1e] font-normal focus:!text-[#1e1e1e]":
                          theme,
                        "text-[#b0d93b]  hover:!text-[#b0d93b] font-medium focus:!text-[#b0d93b]":
                          pageUrl.includes(link.path),
                      }
                    )}
                  >
                    {link.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="p-4 flex flex-col">
                      {link.productList.map((item, index) => (
                        <Link
                          className="p-2 lg:hover:bg-green-600 rounded transition-all ease-in duration-100 lg:hover:text-white"
                          href={`/products/${item.link}`}
                          key={index}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>
            );
          })}
        </ul>
      </nav>
      <aside className=" max-[990px]:flex max-[990px]:items-center max-[990px]:space-x-5 ">
        <Button
          asChild
          variant={"outline"}
          className={clsx(
            "rounded-full  backdrop-blur p-6 sm:flex md:items-center hidden  ",
            {
              "bg-[#b0d93b] lg:hover:bg-[#a3cc34] border-none": theme,
              "border-slate-200/50 bg-white border": !theme,
            }
          )}
        >
          <Link href={"/contact"} className="space-x-3  ">
            <ExportedImage
              src={headerContents.contactBtn.icon}
              width={16}
              alt=""
            />
            <span className="text-[#1e1e1e]">
              {headerContents.contactBtn.label}
            </span>
          </Link>
        </Button>
        <MenuSheet whiteColor={theme} />
      </aside>
    </header>
  );
};

export default MainHeader;
