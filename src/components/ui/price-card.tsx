"use client";

import { FC } from "react";
import { Tilt } from "react-tilt";

interface PriceCardProps {
  planType: string;
  title: string;
  desc: string;
  onClick?: () => void;
}

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

export const PriceCard: FC<PriceCardProps> = ({
  planType,
  title,
  desc,
  onClick,
}) => {
  return (
    <div className="h-[380px] w-full lg:max-w-[calc(100%/3)]">
      <Tilt options={defaultOptions} style={{ height: "100%", width: "100%" }}>
        <div className="flex h-full w-full flex-col justify-between rounded-[10px] border-2 border-solid border-[#DFE4EA] p-[30px] 2xl:p-[50px]">
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
      </Tilt>
    </div>
  );
};
