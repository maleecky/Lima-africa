"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import dynamic from "next/dynamic";

const MenuContents = dynamic(() => import("./menu-contents"), {
  ssr: false,
});

export function MenuSheet({ whiteColor }: { whiteColor?: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"ghost"}
          className="min-[990px]:hidden !h-0 bg-white/40 backdrop-blur-sm rounded-full px-3 py-5 flex justify-center items-center  hover:bg-transparent  "
          title="menu"
        >
          <MenuIcon color={whiteColor ? "#1e1e1e" : "#fff"} className="w-5 " />
        </Button>
      </SheetTrigger>
      <MenuContents />
    </Sheet>
  );
}
