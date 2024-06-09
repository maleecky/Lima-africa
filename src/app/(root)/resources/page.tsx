import React from "react";
import Animation from "./components/animation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Resources = () => {
  return (
    <div className="flex-1 flex flex-col justify-center xmd:py-8 px-6  py-28 items-center">
      <Animation />
      <div className="flex flex-col items-center gap-10 mb-[5em]">
        <div className="xmd:text-xl max-w-[25em] text-center  leading-[1.5em]">
          All the resources, news and blogs related to Bsf will be displayed
          here but for now there is nothing to show
        </div>
        <Button
          asChild
          className="rounded-full border border-slate-700/80 hover:bg-green-50 whitespace-pre-wrap max-w-[400px] bg-transparent p-5"
        >
          <Link className="text-slate-800" href="/">
            Back to homepage
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Resources;
