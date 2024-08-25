"use client";

import { FC, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

interface FAQItemProps {
  title: string;
  desc: string;
}

export const FAQItem: FC<FAQItemProps> = ({ title, desc }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="rounded-[10px] border border-solid border-[#F3F4FE] p-4 lg:p-6 2xl:p-8">
      <div
        onClick={() => setShow((prev) => !prev)}
        className="flex items-center gap-[25px]"
      >
        <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] bg-[#297FB8] 2xl:h-[42px] 2xl:w-[42px]">
          <FaChevronDown
            size={22}
            color="#ffffff"
            className={`${show ? "-rotate-180" : ""} hidden shrink-0 transition-all duration-200 2xl:flex`}
          />
          <FaChevronDown
            size={18}
            color="#ffffff"
            className={`${show ? "-rotate-180" : ""} flex shrink-0 transition-all duration-200 2xl:hidden`}
          />
        </div>
        <p className="text-base font-medium lg:text-lg 2xl:text-xl">{title}</p>
      </div>

      {show && (
        <div className="mt-6 space-y-6">
          <hr className="h-[1.09px] w-full bg-[#959595]/[0.3]" />

          <p className="text-xs font-normal lg:text-sm 2xl:text-base">{desc}</p>
        </div>
      )}
    </div>
  );
};
