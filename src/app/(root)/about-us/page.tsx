"use client";

import React from "react";
import MainHeader from "@/components/global/main-header";
import MainFooter from "@/components/global/main-footer";
import AboutSection from "./_components/about-front";
import WhatWeDo from "./_components/what-we-do";
import MissionsSection from "./_components/missions-section";
import Commitment from "./_components/commitment";
import LimaHistory from "./_components/history";
import TeamSection from "./_components/team";

const About = () => {
  return (
    <>
      <MainHeader />
      <AboutSection />
      <WhatWeDo />
      <MissionsSection />
      <Commitment />
      <LimaHistory />
      <TeamSection />
      <footer className="relative">
        <div className="flex relative py-10  justify-center flex-col items-center">
          <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 bg-[#3D5C30] backdrop-blur-lg"></div>
          <MainFooter theme="black" />
        </div>
      </footer>
    </>
  );
};

export default About;
