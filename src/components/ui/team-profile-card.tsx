import { FC } from "react";
import { cn } from "@/utils";
import Image from "next/image";

interface TeamProfileCardProps {
  name: string;
  role: string;
  desc: string;
  imageUrl: string;
}

export const TeamProfileCard: FC<TeamProfileCardProps> = ({
  name,
  role,
  desc,
  imageUrl,
}) => {
  return (
    <div className="group/teamcard relative flex flex-col gap-14">
      <div className="flex h-[250px] w-[250px] shrink-0 rounded-full bg-white 2xl:h-[300px] 2xl:w-[300px]">
        <Image
          src={imageUrl}
          width={300}
          height={300}
          alt="team member"
          className="h-full w-full rounded-full object-cover object-top"
        />
      </div>
      <div className="space-y-4 text-center">
        <p className="text-2xl font-medium">{name}</p>
        <p className="text-xl font-medium">{role}</p>
      </div>
      <DescCard
        title={`About ${name}`}
        desc={desc}
        className="hidden group-hover/teamcard:block"
      />
    </div>
  );
};

export const DescCard: FC<{
  title: string;
  desc: string;
  className?: string;
}> = ({ title, desc, className }) => {
  return (
    <div
      className={cn(
        `absolute left-[50%] top-[50%] z-[80] flex w-[300px] translate-x-[-50%] translate-y-[-50%] flex-col gap-4 rounded-[20px] bg-[#040C11] p-6 text-[#B8B8B8] lg:w-[500px]`,
        className,
      )}
    >
      <h2 className="text-base font-bold">{title}</h2>
      <p className="text-sm font-medium">{desc}</p>
    </div>
  );
};
