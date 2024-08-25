import { TeamProfileCard } from "@/components/ui";
import Image from "next/image";
import { FC } from "react";

export const MeetTheTeam = () => {
  return (
    <div className="relative mt-[100px] px-[5%]">
      <Image
        src="/images/third-page-bg.svg"
        alt=""
        fill
        className="absolute z-[-1] h-auto w-full object-cover object-center"
        draggable={false}
      />
      <h1 className="section-header">Meet the team</h1>

      <div className="mt-[60px] flex flex-col items-center justify-center gap-[40px] lg:flex-row">
        {teamArr.map((team) => (
          <TeamProfileCard
            key={team.name}
            name={team.name}
            role={team.role}
            desc={team.desc}
          />
        ))}
      </div>
    </div>
  );
};

const teamArr = [
  {
    name: "Ricardo Esteban",
    role: "CEO",
    desc: "18 years in the Canadian oil and gas industry, with 15 years in well and production testing, executing high-profile projects and creating an extensive network within the energy sector. Always looking to improve and optimize processes and systems in order to deliver costumers the highest performance and results rates.",
  },
  {
    name: "Segun Adebule",
    role: "CPO",
    desc: "Segun brings 10 years of global IT experience and over 7 years in product management, specialized in customer-centric product growth, with expertise in tech and energy sectors. He was also part of Apple’s innovation cohort. Segun has a Bachelor degree in finance with a Master's in Risk Management",
  },
  {
    name: "Oleksandr Shubin",
    role: "CIO",
    desc: "Over 12 years of experience in oil and gas operations across Europe, the Middle East, and Canada, Oleksandr brings a wealth of knowledge and network from all around the world. He holds a Masters degree in mechanical engineer. Dedicated to build a great reputation based on punctuality, extensive knowledge and flawless project execution.",
  },
];
