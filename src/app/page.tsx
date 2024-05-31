"use client";

import MainFooter from "@/components/global/main-footer";
import Contact from "@/components/global/contact";
import MainHeader from "@/components/global/main-header";

import WhatsappButton from "@/components/global/whatsappBtn";
import OurWorkSection from "@/components/landingPage/sections/our_work_section";
import HomeSection from "@/components/landingPage/sections/home_section";
import ProductSection from "@/components/landingPage/sections/product_section";
import PartnersSection from "@/components/landingPage/sections/partners_section";
import ImpactsSection from "@/components/landingPage/sections/impacts_section";
import TestimonialsSection from "@/components/landingPage/sections/tetimonials_section";
import ClientsSection from "@/components/landingPage/sections/clients_section";
import CollaborateSection from "@/components/landingPage/sections/collaborate_section";

export default function Home() {
  return (
    <>
      <MainHeader />
      <main className="h-full relative overflow-x-hidden w-full">
        <WhatsappButton />
        <HomeSection />
        <OurWorkSection />
        <ProductSection />
        <PartnersSection />
        <ImpactsSection />
        <TestimonialsSection />
        <ClientsSection />
        <CollaborateSection />
        <div className="flex justify-center bg-[#EFF7FF] items-center md:!mt-20 !mt-16 py-10 md:px-12 px-4">
          <Contact />
        </div>
        <footer className="relative">
          <div className="flex relative py-10  justify-center flex-col items-center">
            <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 bg-[#0C3623] backdrop-blur-lg"></div>
            <MainFooter theme="black" />
          </div>
        </footer>
      </main>
    </>
  );
}
