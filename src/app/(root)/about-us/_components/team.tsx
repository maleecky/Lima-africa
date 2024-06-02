import { aboutContents } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const TeamSection = () => {
  return (
    <section className="flex flex-col pb-[7.5em] gap-8 bg-[#EFF7FF] items-center justify-center py-10 md:px-8 px-4  ">
      <div className="max-w-[800px] text-center">
        <h1 className="lg:text-4xl xmd:text-3xl text-2xl xmd:mb-5 mb-1 font-semibold tracking-tight ">
          {aboutContents.Team.title}
        </h1>
        <p className=" text-slate-700 xmd:text-xl xmd:leading-[2rem] ">
          {aboutContents.Team.description}
        </p>
      </div>

      <div className="relative flex w-full lg:flex-row overflow-x-auto flex-col max-lg:space-y-5 items-center whitespace-nowrap">
        {aboutContents.Team.members.map((member, index) => (
          <Link
            key={index}
            href={member.linkedinLink}
            className="flex flex-[0_0_20%] relative  bg-transparent justify-center items-center flex-col "
          >
            <div className="relative h-20 w-20">
              <Image
                src={member.img}
                fill
                sizes="100vw"
                alt={member.name}
                className=" object-cover  object-center rounded-full"
              />
            </div>

            <div className="flex p-2 flex-col items-center w-full   ">
              <h4 className="text-sm font-medium leading-relaxed">
                {member.name.toUpperCase()}
              </h4>
              <p className="text-sm text-slate-500 px-2">{member.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
