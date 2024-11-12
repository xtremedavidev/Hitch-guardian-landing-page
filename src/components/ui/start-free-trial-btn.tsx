"use client";

import { RoundedBtnWithRightIcon } from "../buttons";

export const StartFreeTrailBtn = ({ SendEmail }: { SendEmail: () => void }) => {
  // const router = useRouter();

  return (
    <RoundedBtnWithRightIcon
      btnText="Start Your Free Trial"
      iconColor="#15181E"
      className="relative z-30 w-full bg-[#FFFFFF] text-sm text-[#15181E] lg:w-fit"
      style={{
        boxShadow: "2.5px 2.5px 11.26px 0 rgba(255, 255, 255, 0.8)",
      }}
      onClick={()=> SendEmail()} // Pass SendEmail directly as an onClick handler
      
    />
  );
};
