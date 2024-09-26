"use client";

import { cn } from "@/utils";
import { FC } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface RoundedBtnWithIconProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  btnText: string;
  iconColor?: string;
  sendEmail?: boolean;
}

export const RoundedBtnWithRightIcon: FC<RoundedBtnWithIconProps> = ({
  btnText,
  className,
  iconColor = "#D2D4D7",
  sendEmail = false,
  ...props
}) => {
  const SendEmail = () => {
    // alert("Clicked");
    const subject = encodeURIComponent("Request for Hitch Guardian Demo");
    const body = encodeURIComponent(
      `Dear Hitch Guardian Team,\n\nI hope this message finds you well. I am writing to express my interest in scheduling a demo of Hitch Guardian. We are excited about the potential it offers and would like to understand how it can meet our specific needs.\n\n\n1. Contact Information:\n\nName:\nJob Title:\nCompany Name:\nEmail Address:\nPhone Number:\n\n\n2. Company Information:\n\nIndustry:\nSize of Fleet (if applicable):\nPrimary Use Case for Hitch Guardian:\n\n\n3. Demo Preferences:\n\nPreferred Date for the Demo:\nPreferred Time (including Time Zone):\nAny Specific Areas of Interest (e.g., Features, Integration, etc.):\n\n\nAny Other Information You Would Like to Share?\n\n\nThank you for your time and consideration. We look forward to demonstrating how Hitch Guardian can help achieve your goals.\n\nBest regards,\n\n[Your Name]\n[Your Job Title]\n[Your Company Name]\n[Your Contact Information]`,
    );
    const mailtoLink = `mailto:gethitched@hitchguardian.me?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <button
      {...props}
      onClick={sendEmail ? SendEmail : undefined}
      className={cn(
        `flex shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#22262F] px-[16.5px] py-[11.5px] font-medium text-[#D2D4D7]`,
        className,
      )}
    >
      <span>{btnText}</span>
      <MdKeyboardArrowRight size={17} color={iconColor} />
    </button>
  );
};
