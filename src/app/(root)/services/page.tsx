import MainHeader from "@/components/global/main-header";
import React from "react";
import LandingSection from "./(_components)/landing-section";
import SdgSection from "./(_components)/sdg-section";
import WasteManagement from "./(_components)/waste-management";
import MainFooter from "@/components/global/main-footer";

const ServicesPage = () => {
  return (
    <>
      <MainHeader />
      <LandingSection />
      <SdgSection />
      <WasteManagement />
      <footer className="relative">
        <div className="flex relative py-10  justify-center flex-col items-center">
          <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 bg-transparent backdrop-blur-lg"></div>
          <MainFooter />
        </div>
      </footer>
    </>
  );
};

export default ServicesPage;
