"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

export const LaunchDashboardPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 10000);
  }, []);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[1000] flex h-[100dvh] w-full items-center justify-center bg-black/80 px-[5%] backdrop-blur-md">
      <div className="w-full max-w-[500px] rounded-[26px] bg-[#151515] px-8 py-[22px] lg:px-12">
        <div className="flex justify-center">
          <Image
            alt="img"
            src="/images/celebration-img.svg"
            width={220}
            height={180}
            className="h-[100px] w-auto lg:h-[180px]"
          />
        </div>

        <div className="mb-14 mt-2">
          <h1 className="text-center text-2xl font-black italic text-[#8C8C8C] lg:text-5xl">
            Yay!!!
          </h1>
          <p className="mt-[6px] text-center text-sm font-normal text-white lg:text-base">
            We just launched our dashboard for beta!
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-4 lg:flex-row lg:gap-10">
          <button
            className="flex w-full shrink-0 items-center justify-center gap-[10px] rounded-full border border-solid border-white bg-transparent px-4 py-[11px] text-white/[0.98] lg:w-fit"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-sm font-medium">Try Later</span>{" "}
            <MdKeyboardArrowRight size={17} color="white" />
          </button>
          <Link
            href={`https://admin-for-hitch.vercel.app/sign-in`}
            target="_blank"
            className="flex w-full items-center justify-center gap-[10px] rounded-full bg-[#297FB8] px-4 py-[11px] text-white"
          >
            <span className="text-sm font-medium">Login Now</span>{" "}
            <MdKeyboardArrowRight size={17} color="white" />
          </Link>
        </div>
      </div>
    </div>,
    document.body,
  );
};
