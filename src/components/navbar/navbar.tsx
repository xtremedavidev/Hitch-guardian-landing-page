"use client"
import Link from "next/link";
import { NavScrollWrapper } from "./navWrappers";
import Image from "next/image";
import { RoundedBtnWithRightIcon } from "../buttons";
import Email from "@/components/Email"
import { useState } from "react";

// import { NavLinksElements } from "@/lib";

export const Navbar = () => {
  const [emailopen, setEmailOpen] = useState(false)

  const SendEmail = () => {

    setEmailOpen(true)
    console.log("done")
  
  }


  
  const onCloseEmail = () => {
    setEmailOpen(!emailopen)
    console.log("trial, " , emailopen)
  }


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
            href="#about"
            className="text-[13px] font-medium text-[#E3E5E8]/[0.52]"
          >
            Features
          </Link>
          {/* <RoundedBtnWithRightIcon
            btnText="Start Now"
            className="py-[6px] text-[13px]"
            sendEmail={true}
            SendEmail={SendEmail}
          /> */}
        </div>
      </div>
    </NavScrollWrapper>
  );
};
