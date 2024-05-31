import Contact from "@/components/global/contact";
import MainFooter from "@/components/global/main-footer";
import MainHeader from "@/components/global/main-header";

const ContactPage = () => {
  return (
    <>
      <MainHeader theme="light" />
      <div className="pb-[3rem] pt-[8rem]">
        <div className="flex relative  justify-center  space-y-5 flex-col items-center">
          <Contact />
        </div>
      </div>
      <footer className="w-full">
        <MainFooter />;
      </footer>
    </>
  );
};

export default ContactPage;
