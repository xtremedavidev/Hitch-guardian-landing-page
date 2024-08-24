import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Footer = () => {
  return (
    <footer className="px-[5%] py-5">
      <div className="flex flex-col justify-between lg:flex-row lg:items-center">
        <div className="space-y-[22px] text-base font-normal">
          <h1 className="text-xl font-bold">Contact Us</h1>
          <p>tel: +1 587.343.6183</p>
          <Link
            href="mailto:redsteban@hotmail.com"
            className="text-base font-normal underline underline-offset-2"
          >
            redsteban@hotmail.com
          </Link>
        </div>

        <div className="mt-8 flex flex-col gap-8 lg:mt-0 lg:flex-row lg:gap-[60px]">
          <div className="flex flex-col gap-4">
            {leftLinks.map((link) => (
              <QuickLinkItem
                key={link.label}
                to={link.link}
                label={link.label}
              />
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {rightLinks.map((link) => (
              <QuickLinkItem
                key={link.label}
                to={link.link}
                label={link.label}
              />
            ))}
          </div>
        </div>
      </div>

      <hr className="my-8 h-[1.09px] w-full bg-[#959595]/[0.3]" />

      <div className="flex items-center justify-center gap-5">
        <span className="text-xl font-normal">All rights reserved</span>
        <Image
          alt="hitch guardian logo"
          src="/images/logo.svg"
          width={48}
          height={48}
        />
      </div>
    </footer>
  );
};

interface QuickLinkItemProps {
  to: string;
  label: string;
}

const QuickLinkItem: FC<QuickLinkItemProps> = ({ to, label }) => {
  return (
    <Link href={to || ""} className="text-base font-normal">
      {label}
    </Link>
  );
};

const leftLinks = [
  { label: "About", link: "/" },
  { label: "Features", link: "/" },
  { label: "Blog", link: "/" },
  { label: "Pricing", link: "/" },
];

const rightLinks = [
  { label: "Privacy policy", link: "/" },
  { label: "Terms and conditions", link: "/" },
];
