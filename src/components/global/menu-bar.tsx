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
          className="min-[990px]:hidden block p-2 bg-white/40 backdrop-blur-sm rounded-full hover:bg-white/40  "
          title="menu"
        >
          <MenuIcon color={whiteColor ? "#1e1e1e" : "#fff"} />
        </Button>
      </SheetTrigger>
      <MenuContents />
    </Sheet>
  );
}
