import MainFooter from "@/components/global/main-footer";
import MainHeader from "@/components/global/main-header";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen w-full flex flex-col gap-10 !">
      <MainHeader theme="white" />
      {children}
      <div className="pb-5">
        <MainFooter />
      </div>
    </div>
  );
};

export default Layout;
