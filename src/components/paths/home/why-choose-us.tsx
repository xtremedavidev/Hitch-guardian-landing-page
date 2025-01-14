import { ScrollRevealLeft, ScrollRevealRight } from "@/components/animations";
import Image from "next/image";
import { FC } from "react";
import { GoCheckCircleFill } from "react-icons/go";

export const WhyChooseUs = () => {
  return (
    <div id="features" className="relative px-[5%]">
      <Image
        src="/images/radial-blur-right.svg"
        alt=""
        width={200}
        height={136}
        className="absolute right-0 top-[50%] z-[10] h-auto w-[30%] translate-y-[-50%]"
        draggable={false}
      />
      <Image
        src="/images/final-hero-bg.svg"
        alt=""
        fill
        className="absolute z-[-1] h-auto w-full object-cover object-center"
        draggable={false}
      />
      <hr className="my-[60px] h-[1.09px] w-full bg-[#959595]/[0.3] opacity-[0.3]" />

      <div className="flex flex-col items-center justify-between gap-10 overflow-x-hidden lg:flex-row lg:gap-0">
        <div className="w-full lg:max-w-[50%]">
          <ScrollRevealLeft>
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
          </ScrollRevealLeft>
        </div>
        <div className="w-full lg:max-w-[40%]">
          <ScrollRevealRight>
            <Image
              src="/images/why-choose-us-img.svg"
              alt="why-choose-us"
              width={100}
              height={100}
              className="h-auto w-full"
            />
          </ScrollRevealRight>
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
