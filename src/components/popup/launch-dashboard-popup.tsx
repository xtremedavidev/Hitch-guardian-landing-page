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

  const SendEmail = () => {
    // alert("Clicked");
    const subject = encodeURIComponent("Request for Hitch Guardian Demo");
    const body = encodeURIComponent(
      // `Dear Hitch Guardian Team,\n\nI hope this message finds you well. I am writing to express my interest in scheduling a demo of Hitch Guardian. We are excited about the potential it offers and would like to understand how it can meet our specific needs.\n\n\n1. Contact Information:\n\nName:\nJob Title:\nCompany Name:\nEmail Address:\nPhone Number:\n\n\n2. Company Information:\n\nIndustry:\nSize of Fleet (if applicable):\nPrimary Use Case for Hitch Guardian:\n\n\n3. Demo Preferences:\n\nPreferred Date for the Demo:\nPreferred Time (including Time Zone):\nAny Specific Areas of Interest (e.g., Features, Integration, etc.):\n\n\nAny Other Information You Would Like to Share?\n\n\nThank you for your time and consideration. We look forward to demonstrating how Hitch Guardian can help achieve your goals.\n\nBest regards,\n\n[Your Name]\n[Your Job Title]\n[Your Company Name]\n[Your Contact Information]`,
      `Dear Hitch Guardian Team,\n\nI hope this message finds you well. I am writing to express my interest in scheduling a demo of Hitch Guardian. We are excited about the potential it offers and would like to understand how it can meet our specific needs.\n\n\n1. Contact Information:\n\nName:\nJob Title:\nCompany Name:\nEmail Address:\nPhone Number:\n\n\n2. Company Information:\n\nIndustry:\nSize of Fleet (if applicable):\nPrimary Use Case for Hitch Guardian:\n\n\n3. Demo Preferences:\n\nPreferred Date for the Demo:\nPreferred Time (including Time Zone):\nAny Specific Areas of Interest (e.g., Features, Integration, etc.):\n\n\nAny Other Information You Would Like to Share?\n\n\nThank you for your time and consideration. We look forward to demonstrating how Hitch Guardian can help achieve your goals.\n\nBest regards,\n\nRicardo Esteban\nCEO & Founder\nHitch Guardian\ngethitched@hitchguardian.me\n+1 587 343 6183`,
    );
    const mailtoLink = `mailto:gethitched@hitchguardian.me?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };
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
          {"We’ve Launch our Beta and it’s ready for a test drive!"}
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
          <div
            // href={`https://admin-for-hitch.vercel.app/sign-in`}
            onClick={()=> SendEmail}
           // target="_blank"
            className="flex w-full items-center justify-center gap-[10px] rounded-full bg-[#297FB8] px-4 py-[11px] text-white"
          >
            <span className="text-sm font-medium">For more info</span>{" "}
            <MdKeyboardArrowRight size={17} color="white" />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};
