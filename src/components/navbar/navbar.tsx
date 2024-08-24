import Link from "next/link";
import { NavScrollWrapper } from "./navWrappers";
import Image from "next/image";
import { RoundedBtnWithRightIcon } from "../buttons";
// import { NavLinksElements } from "@/lib";

export const Navbar = () => {
  return (
    <NavScrollWrapper>
      <div className="flex h-full w-full items-center justify-between">
        <Image
          alt="hitch guardian logo"
          src="/images/logo.svg"
          width={38}
          height={38}
        />

        <div className="hidden items-center gap-[19px] lg:flex">
          <Link
            href="/"
            className="text-[13px] font-medium text-[#E3E5E8]/[0.52]"
          >
            Resources
          </Link>
          <RoundedBtnWithRightIcon
            btnText="Start Now"
            className="py-[6px] text-[13px]"
          />
        </div>
      </div>
    </NavScrollWrapper>
  );
};
