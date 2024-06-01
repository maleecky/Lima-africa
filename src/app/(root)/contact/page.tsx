import Contact from "@/components/global/contact";
import MainFooter from "@/components/global/main-footer";
import MainHeader from "@/components/global/main-header";

const ContactPage = () => {
  return (
    <div className="max-w-[2000px] mx-auto">
      <MainHeader theme="light" />
      <div className="pb-[3rem] pt-[4rem]">
        <div className="flex justify-center  items-center  py-10 md:px-12 px-4">
          <Contact hideCss="white" />
        </div>
      </div>
      <footer className="w-full">
        <MainFooter />;
      </footer>
    </div>
  );
};

export default ContactPage;
