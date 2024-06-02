import Image from "next/image";
import foodWaste from "@/../public/assets/media/food_waste.png";
import boostIcon from "@/../public/assets/media/boost.png";
import { customersPitch } from "@/lib/constants";

const ClientsSection = () => {
  return (
    <section className="w-full flex justify-center items-center max-w-[93.75em] mx-auto">
      <div className="pb-[6rem] px-[1.25rem] max-w-[65em] relative  ">
        <h2 className="min-[990px]:text-[min(2.5vw,1.8em)] md:text-[1.8em] sm:text-[1.6em] text-[1.4em] max-[998px]:leading-[1.375em] max-sm:leading-[1.4]  text-green-950 font-medium min-[998px]:leading-[1.4em]">
          {customersPitch.descriptions.map((description, index) => (
            <div key={index} className="w-full block text-center ">
              {description}
            </div>
          ))}
        </h2>
        <div>
          <div className="absolute -top-[3rem] right-6 icon">
            <Image
              src={boostIcon}
              width={40}
              height={40}
              alt=""
              className="rotate-[100deg]"
            />
          </div>

          <div className="absolute bottom-[2rem] left-[2rem] icon">
            <Image
              src={foodWaste}
              width={40}
              height={40}
              alt=" rotate-[-100deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
