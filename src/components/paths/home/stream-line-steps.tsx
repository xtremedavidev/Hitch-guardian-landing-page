import Image from "next/image";
import { FC } from "react";

export const StreamlineSteps = () => {
  return (
    <div className="mt-[70px] px-[5%] text-white">
      <h1 className="section-header">
        Streamline Your Crew Management <br /> in Three Simple Steps
      </h1>

      <div className="mt-10 flex flex-col items-center gap-6 lg:flex-row 2xl:mt-[60px]">
        {cardsArr.map((item) => (
          <StreamlineCard
            key={item.label}
            iconurl={item.iconurl}
            label={item.label}
            desc={item.description}
          />
        ))}
      </div>
    </div>
  );
};

interface StreamlineCardProps {
  iconurl: string;
  label: string;
  desc: string;
}

const StreamlineCard: FC<StreamlineCardProps> = ({ iconurl, label, desc }) => {
  return (
    <div className="min-h-[218px] space-y-4 rounded-xl bg-white/5 p-[30px]">
      <Image src={iconurl} alt="step1" width={24} height={24} />

      <h2 className="text-lg font-medium 2xl:text-xl">{label}</h2>
      <p className="text-base font-medium text-white/60 2xl:text-lg">{desc}</p>
    </div>
  );
};

const cardsArr = [
  {
    iconurl: "/images/streamline-1.svg",
    label: "Assign Jobs with Precision",
    description:
      "Input job requirements, and our system intelligently allocates the best-suited workers based on real-time data.",
  },
  {
    iconurl: "/images/streamline-2.svg",
    label: "Optimize Dispatch & Routing",
    description:
      "Leverage advanced algorithms to create efficient routes, reduce travel time, and keep your operations running smoothly.",
  },
  {
    iconurl: "/images/streamline-3.svg",
    label: "Monitor & Improve Continuously",
    description:
      "Track performance, analyze trends, and refine your operations using comprehensive analytics and insights.",
  },
];