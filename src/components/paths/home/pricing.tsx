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
    planType: "Gear up (Entry)",
    title: "Basic crew scheduling and management up to 50 workers",
    desc: "Get full control of your crew management for a price as low as $958 per month.",
  },
  {
    planType: "Smart ops (Pro)",
    title: "Growing businesses",
    desc: "Gear up functions + 4 KPI Metrics and up to 100 workers",
  },
  {
    planType: "Guardian Elite (Enterprise)",
    title: "Large enterprises",
    desc: "Full access + Journey management module, Unlimited workers.",
  },
];
