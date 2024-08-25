import Image from "next/image";
import { FC } from "react";

export const FeaturesHome = () => {
  return (
    <div id="about" className="mt-[100px] px-[5%]">
      <h1 className="section-header">
        All-in-One Crew Management <br /> Built for Efficiency
      </h1>

      <div className="mt-[50px] hidden space-y-14 lg:block">
        {formatIntoPairs(featuresArr).map((pair, index) => (
          <FeaturesCardDesktop key={index} feature={pair} />
        ))}
      </div>

      <div className="mt-[50px] space-y-14 lg:hidden">
        {featuresArr.map((feature, index) => (
          <FeaturesCardMobile
            key={index}
            desc={feature.desc}
            iconurl={feature.iconurl}
            label={feature.label}
          />
        ))}
      </div>
    </div>
  );
};

interface FeaturesCardMobileProps {
  iconurl: string;
  label: string;
  desc: string;
}

const FeaturesCardMobile: FC<FeaturesCardMobileProps> = ({
  iconurl,
  label,
  desc,
}) => {
  return (
    <div className="rounded-[22px] bg-gradient-to-tr from-white to-white/0 p-[1.18px]">
      <div className="relative h-full w-full space-y-7 overflow-hidden rounded-[22px] bg-[#010003] px-6 py-6">
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-tr from-[#FFFFFF]/[0.38] to-[#FFFFFF] opacity-[0.13]" />
        <Image src={iconurl} alt={label} width={50} height={50} />
        <h2 className="relative z-20 text-xl font-bold">{label}</h2>
        <p className="relative z-20 text-base font-normal text-white/[0.8]">
          {desc}
        </p>
      </div>
    </div>
  );
};

interface FeaturesCardDesktopProps {
  feature: {
    iconurl: string;
    label: string;
    desc: string;
  }[];
}

const FeaturesCardDesktop: FC<FeaturesCardDesktopProps> = ({ feature }) => {
  return (
    <div className="rounded-[22px] bg-gradient-to-tr from-white to-white/0 p-[1.18px]">
      <div className="relative flex h-full w-full justify-between space-y-7 overflow-hidden rounded-[22px] bg-[#010003] px-8 py-7 2xl:px-[53px] 2xl:py-[44px]">
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-tr from-[#FFFFFF]/[0.38] to-[#FFFFFF] opacity-[0.13]" />
        {feature.map((feature) => (
          <div
            key={feature.desc}
            className="relative z-20 w-full max-w-[40%] space-y-7"
          >
            <Image
              src={feature.iconurl}
              alt={feature.label}
              width={50}
              height={50}
              className="h-[50px] w-[50px] 2xl:hidden"
            />
            <Image
              src={feature.iconurl}
              alt={feature.label}
              width={60}
              height={60}
              className="hidden 2xl:block"
            />
            <h2 className="text-xl font-bold 2xl:text-[28px]">
              {feature.label}
            </h2>
            <p className="text-base font-normal text-white/[0.8] 2xl:text-xl">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

function formatIntoPairs(
  arr: {
    iconurl: string;
    label: string;
    desc: string;
  }[],
) {
  const result = [];

  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr.slice(i, i + 2));
  }

  return result;
}

const featuresArr = [
  {
    iconurl: "/images/feature-1.svg",
    label: "Smart Worker Allocation",
    desc: "Automatically match workers to jobs based on skills, availability, and location, ensuring optimal productivity",
  },
  {
    iconurl: "/images/feature-2.svg",
    label: "Advanced Dispatch Routing",
    desc: "Minimize travel time and fuel costs with our intelligent routing system, designed to handle complex dispatch scenarios effortlessly.",
  },
  {
    iconurl: "/images/feature-3.svg",
    label: "Performance Analytics",
    desc: "Gain deep insights into work patterns, identify bottlenecks, and optimize processes with real-time analytics and reports",
  },
  {
    iconurl: "/images/feature-4.svg",
    label: "Worker Availability Interface",
    desc: "Empower your team to communicate their readiness with a single tap, enabling faster job assignments and reducing downtime",
  },
  {
    iconurl: "/images/feature-5.svg",
    label: "Seamless Communication",
    desc: "Keep your crew connected with instant notifications, updates, and a unified platform that bridges the communication gap",
  },
  {
    iconurl: "/images/feature-6.svg",
    label: "Cost Tracking & Savings",
    desc: "Monitor and reduce operational costs with detailed tracking of dispatch routes, fuel usage, and time spent on jobs",
  },
];
