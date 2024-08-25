"use client";

import { FeaturesCardDesktop, FeaturesCardMobile } from "@/components/ui";

export const FeaturesHome = () => {
  return (
    <div id="about" className="mt-[100px] px-[5%]">
      <h1 className="section-header">
        All-in-One Crew Management <br /> Built for Efficiency
      </h1>

      <div className="mt-[50px] hidden space-y-14 lg:block">
        {formatIntoPairs(featuresArr).map((pair, index) => (
          <FeaturesCardDesktop key={index} feature={pair} index={index} />
        ))}
      </div>

      <div className="mt-[50px] space-y-14 lg:hidden">
        {featuresArr.map((feature, index) => (
          <FeaturesCardMobile
            key={index}
            desc={feature.desc}
            iconurl={feature.iconurl}
            label={feature.label}
            index={index}
          />
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
