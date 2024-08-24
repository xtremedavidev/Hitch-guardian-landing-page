import React, { FC } from "react";

export const Pricing = () => {
  return (
    <div id="pricing" className="px-[5%]">
      <h1 className="section-header">Flexible Pricing to Fit Your Needs</h1>
      <div className="mt-[60px] flex flex-col items-center justify-center gap-[30px] lg:flex-row">
        {pricingPlans.map((plan) => (
          <PriceCard
            key={plan.planType}
            planType={plan.planType}
            title={plan.title}
            desc={plan.desc}
          />
        ))}
      </div>
    </div>
  );
};

interface PriceCardProps {
  planType: string;
  title: string;
  desc: string;
  onClick?: () => void;
}

const PriceCard: FC<PriceCardProps> = ({ planType, title, desc, onClick }) => {
  return (
    <div className="flex h-[380px] w-full flex-col justify-between rounded-[10px] border-2 border-solid border-[#DFE4EA] p-[30px] lg:max-w-[calc(100%/3)] 2xl:p-[50px]">
      <div className="space-y-5">
        <h3 className="text-base font-semibold text-[#7CD0FF] 2xl:text-lg">
          {planType}Plan
        </h3>
        <h2 className="text-lg font-semibold 2xl:text-xl">{title}</h2>
        <p className="text-base font-medium 2xl:text-lg">{desc}</p>
      </div>

      <hr className="h-[1.09px] w-full bg-[#959595]/[0.3]" />

      <button className="flex h-[50px] w-full items-center justify-center rounded-md bg-[#FFFFFF] text-base font-medium text-[#297FB8] hover:bg-[#297FB8] hover:text-white">
        Choose {planType}
      </button>
    </div>
  );
};

const pricingPlans = [
  {
    planType: "Basic Plan",
    title: "Small businesses or startups",
    desc: "Perfect for using in a personal website or a client project.",
  },
  {
    planType: "Professional Plan",
    title: "Growing businesses",
    desc: "Advanced features, including in-depth analytics, expanded routing, and increased user access.",
  },
  {
    planType: "Enterprise Plan",
    title: "Large enterprises",
    desc: "Full feature access, custom integrations, premium support, and dedicated account management.",
  },
];
