"use client";

import { RoundedBtnWithRightIcon } from "../buttons";

export const ReqDemoBtn = ({ SendEmail }: { SendEmail: () => void }) => {
 
  return (
    <RoundedBtnWithRightIcon
      btnText="Request a personalized demo"
      className="relative z-30 w-full border border-solid border-white bg-transparent text-white/[0.98] lg:w-fit"
      sendEmail={true}
      onClick={SendEmail}
    />
  );
};
