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
          <TeamProfileCard key={team.name} name={team.name} role={team.role} />
        ))}
      </div>
    </div>
  );
};

interface TeamProfileCardProps {
  name: string;
  role: string;
}

const TeamProfileCard: FC<TeamProfileCardProps> = ({ name, role }) => {
  return (
    <div className="flex flex-col gap-14">
      <div className="flex h-[250px] w-[250px] shrink-0 rounded-full bg-white 2xl:h-[300px] 2xl:w-[300px]" />
      <div className="space-y-4 text-center">
        <p className="text-2xl font-medium">{name}</p>
        <p className="text-xl font-medium">{role}</p>
      </div>
    </div>
  );
};

const teamArr = [
  {
    name: "Ricardo Esteban",
    role: "CEO",
  },
  {
    name: "Adebule Segun",
    role: "CPO",
  },
  {
    name: "Oleksandr Shubin",
    role: "CIO",
  },
];
