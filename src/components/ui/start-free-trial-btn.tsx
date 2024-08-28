"use client";

import { useRouter } from "next/navigation";
import { RoundedBtnWithRightIcon } from "../buttons";

export const StartFreeTrailBtn = () => {
  // const router = useRouter();

  const SendEmail = () => {
    const subject = encodeURIComponent("Request for Hitch Guardian Demo");
    const body = encodeURIComponent(
      `Dear Hitch Guardian Team,\n\nI hope this message finds you well. I am writing to express my interest in scheduling a demo of Hitch Guardian. We are excited about the potential it offers and would like to understand how it can meet our specific needs.\n\n\n1. Contact Information:\n\nName:\nJob Title:\nCompany Name:\nEmail Address:\nPhone Number:\n\n\n2. Company Information:\n\nIndustry:\nSize of Fleet (if applicable):\nPrimary Use Case for Hitch Guardian:\n\n\n3. Demo Preferences:\n\nPreferred Date for the Demo:\nPreferred Time (including Time Zone):\nAny Specific Areas of Interest (e.g., Features, Integration, etc.):\n\n\nAny Other Information You Would Like to Share?\n\n\nThank you for your time and consideration. We look forward to demonstrating how Hitch Guardian can help achieve your goals.\n\nBest regards,\n\n[Your Name]\n[Your Job Title]\n[Your Company Name]\n[Your Contact Information]`,
    );
    const mailtoLink = `mailto:redsteban@hotmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    // router.push(mailtoLink);
  };

  return (
    <RoundedBtnWithRightIcon
      btnText="Start Your Free Trial"
      iconColor="#15181E"
      className="w-full bg-[#FFFFFF] text-sm text-[#15181E] lg:w-fit"
      style={{
        boxShadow: "2.5px 2.5px 11.26px 0 rgba(255, 255, 255, 0.8)",
      }}
      onClick={SendEmail}
    />
  );
};
