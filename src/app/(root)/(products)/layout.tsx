"use client";

import MainFooter from "@/components/global/main-footer";
import MainHeader from "@/components/global/main-header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainHeader theme="black" />
      <div className="flex h-full w-full relative flex-col ">{children}</div>
      <footer className="w-full pb-[1em] pt-[3em] bg-[#3D5C30]">
        <MainFooter theme="black" />;
      </footer>
    </>
  );
};

export default layout;
