"use client";
import MainFooter from "@/components/global/main-footer";
import MainHeader from "@/components/global/main-header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full relative flex-col ">
      <MainHeader theme="white" />
      {children}
      <footer className="w-full pb-[1em] pt-[5em]">
        <MainFooter />;
      </footer>
    </div>
  );
};

export default layout;
