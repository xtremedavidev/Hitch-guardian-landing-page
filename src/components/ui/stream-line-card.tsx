"use client";
import { fadeInAnimationVariantsHorizontal } from "@/lib";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface StreamlineCardProps {
  iconurl: string;
  label: string;
  desc: string;
  index: number;
}

export const StreamlineCard: FC<StreamlineCardProps> = ({
  iconurl,
  label,
  desc,
  index,
}) => {
  return (
    <motion.div
      variants={fadeInAnimationVariantsHorizontal}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className="min-h-[218px] space-y-4 rounded-xl bg-white/5 p-[30px]"
    >
      <Image src={iconurl} alt="step1" width={24} height={24} />

      <h2 className="text-lg font-medium 2xl:text-xl">{label}</h2>
      <p className="text-base font-medium text-white/60 2xl:text-lg">{desc}</p>
    </motion.div>
  );
};
