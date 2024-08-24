import Image from "next/image";
import { FC } from "react";
import { GoCheckCircleFill } from "react-icons/go";

export const WhyChooseUs = () => {
  return (
    <div id="features" className="px-[5%]">
      <hr className="my-[60px] h-[1.09px] w-full bg-[#959595]/[0.3] opacity-[0.3]" />

      <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-0">
        <div className="w-full lg:max-w-[50%]">
          <h1 className="text-4xl font-bold">Why Choose Hitch Guardian?</h1>

          <div className="mt-10 space-y-5">
            {whyChooseArr.map((item) => (
              <WhyChooseItem
                key={item.label}
                label={item.label}
                desc={item.description}
              />
            ))}
          </div>
        </div>
        <div className="w-full lg:max-w-[40%]">
          <Image
            src="/images/why-choose-us-img.svg"
            alt="why-choose-us"
            width={100}
            height={100}
            className="h-auto w-full"
          />
        </div>
      </div>

      <hr className="my-[60px] h-[1.09px] w-full bg-[#959595]/[0.3] opacity-[0.3]" />
    </div>
  );
};

interface WhyChooseItemProps {
  label: string;
  desc: string;
}

const WhyChooseItem: FC<WhyChooseItemProps> = ({ label, desc }) => {
  return (
    <div className="flex gap-3">
      <GoCheckCircleFill size={22} color="#FFFFFF" className="flex shrink-0" />
      <p className="gap-1 text-base font-normal 2xl:text-xl">
        <span className="font-semibold">{label}</span>: <span>{desc}</span>
      </p>
    </div>
  );
};

const whyChooseArr = [
  {
    label: "Drive Operational Excellence",
    description:
      "Maximize productivity with smart job allocation and real-time dispatching.",
  },
  {
    label: "Reduce Costs, Increase Profitability",
    description:
      "Save on fuel, reduce idle time, and get more done with fewer resources.",
  },
  {
    label: "Enhance Worker Satisfaction",
    description:
      "Improve communication and keep your crew engaged with a simple, intuitive platform.",
  },
  {
    label: "Actionable Insights",
    description:
      "Leverage detailed analytics to make data-driven decisions that improve efficiency and drive growth.",
  },
  {
    label: "Seamless Integration",
    description:
      "Easily integrate with your existing systems and scale as your business grows.",
  },
  {
    label: "Oil and gas industry oriented",
    description: "Specifically designed to manage complex scheduling.",
  },
];
