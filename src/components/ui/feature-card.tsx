"use client";

import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";
import { fadeInAnimationVariantsVertical } from "@/lib";

interface FeaturesCardMobileProps {
  iconurl: string;
  label: string;
  desc: string;
  index: number;
}

export const FeaturesCardMobile: FC<FeaturesCardMobileProps> = ({
  iconurl,
  label,
  desc,
  index,
}) => {
  return (
    <motion.div
      variants={fadeInAnimationVariantsVertical}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className="rounded-[22px] bg-gradient-to-tr from-white to-white/0 p-[1.18px]"
    >
      <div className="relative h-full w-full space-y-7 overflow-hidden rounded-[22px] bg-[#010003] px-6 py-6">
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-tr from-[#FFFFFF]/[0.38] to-[#FFFFFF] opacity-[0.13]" />
        <Image src={iconurl} alt={label} width={50} height={50} />
        <h2 className="relative z-20 text-xl font-bold">{label}</h2>
        <p className="relative z-20 text-base font-normal text-white/[0.8]">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

interface FeaturesCardDesktopProps {
  feature: {
    iconurl: string;
    label: string;
    desc: string;
  }[];
  index: number;
}

export const FeaturesCardDesktop: FC<FeaturesCardDesktopProps> = ({
  feature,
  index,
}) => {
  return (
    <motion.div
      variants={fadeInAnimationVariantsVertical}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className="rounded-[22px] bg-gradient-to-tr from-white to-white/0 p-[1.18px]"
    >
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
    </motion.div>
  );
};
