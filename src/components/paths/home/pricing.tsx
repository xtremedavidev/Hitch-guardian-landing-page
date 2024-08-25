import { PriceCard } from "@/components/ui";
import React from "react";

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
