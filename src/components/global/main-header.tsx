"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { MenuSheet } from "./menu-bar";
import { headerContents } from "@/lib/constants";
const limaWhite = "v1721898380/lima-logo_h5dloq.png";
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
  const [background, setBackground] = useState(false);

  useEffect(() => {
    const changeBackgroundHandler = () => {
      if (window.scrollY >= 80) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    };

    window.addEventListener("scroll", changeBackgroundHandler);
  }, []);

  return (
    <header
      className={clsx(
        "md:p-4 md:!px-8 py-5 px-2 fixed top-0 w-full flex duration-75 ease-in transition-colors items-center justify-between z-50",
        {
          "backdrop-blur-[4px]": background,
          " bg-green-900/70 ": background && !theme,
          "bg-slate-50/80": background && theme,
        }
      )}
    >
      <aside className="flex items-center gap-2 ">
        <Link
          href={"/"}
          as={"/"}
          className="relative md:w-20 md:h-20 w-[5.5em] h-[5em]"
        >
          <Image
            src={theme ? limaWhite : headerContents.logourl}
            fill
            sizes="(min-width:768px) 100vw"
            priority
            alt=""
            className="object-contain w-full h-full"
          />
        </Link>
      </aside>
      <nav className="hidden min-[1100px]:block absolute left-[50%] transform translate-x-[-50%] ">
        <ul className="flex items-center py-1.5 px-8  justify-center gap-8 rounded-3xl text-nowrap">
          {headerContents.links.map((link, index) => {
            if (link.label !== "Products") {
              return (
                <Link
                  className={clsx("!text-[1.1625em] whitespace-nowrap  ", {
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
                      "p-0 bg-transparent rounded-none whitespace-nowrap shadow-none !text-[1.1625em]  hover:!bg-transparent focus:!bg-transparent focus:!outline-none focus:!outline-offset-0",
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
                          className="p-2 lg:hover:bg-green-600 whitespace-nowrap rounded transition-all ease-in duration-100 lg:hover:text-white"
                          href={`/${item.link}`}
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
      <aside className=" max-[1100px]:flex max-[1100px]:items-center max-[1100px]:space-x-5 ">
        <Button
          asChild
          variant={"outline"}
          className={clsx(
            "rounded-full !h-0  backdrop-blur md:p-5 p-[1.5em] sm:flex md:items-center hidden  ",
            {
              "bg-transparent lg:hover:bg-[#5BC89E] text-[#1e1e1e] border border-[#5BC89E]":
                theme,
              " bg-[#d4ffe3] border-none shadow-none": !theme,
            }
          )}
        >
          <Link href={"/contact"} className="space-x-3  ">
            <Image
              src={headerContents.contactBtn.icon}
              width={16}
              height={16}
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
