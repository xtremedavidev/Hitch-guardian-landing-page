import Link from "next/link";
import { FC } from "react";
import { MobileDrawerWapper } from "./mobileNavWrapper";
import { RoundedBtnWithRightIcon } from "../buttons";

export interface MobileDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // pathname: string;
}

export const MobileDrawer: FC<MobileDrawerProps> = ({
  open,
  setOpen,
  // pathname,
}) => {
  return (
    <MobileDrawerWapper open={open} setOpen={setOpen}>
      <div className="flex w-full flex-col justify-center gap-6 bg-black/90 px-[5%] pt-8 text-xl font-semibold backdrop-blur-md">
        <Link
          href="#about"
          className="text-center text-base font-medium text-[#E3E5E8]/[0.52]"
        >
          Features
        </Link>
        <RoundedBtnWithRightIcon
          btnText="Start Now"
          className="w-full py-[12px]"
          sendEmail={true}
        />
      </div>
    </MobileDrawerWapper>
  );
};
