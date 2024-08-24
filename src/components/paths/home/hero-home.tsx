import { RoundedBtnWithRightIcon } from "@/components/buttons";
import Image from "next/image";

export const HeroHome = () => {
  return (
    <div className="relative flex h-[100dvh] w-full flex-col items-center gap-8 pl-[5%] pt-[150px] lg:flex-row lg:justify-between lg:gap-0">
      <Image
        src="/images/hero-bg-effect.png"
        alt=""
        fill
        className="absolute z-[-1] h-auto w-full"
        draggable={false}
      />
      <Image
        src="/images/radial-blur-hero.svg"
        alt=""
        width={200}
        height={136}
        className="absolute left-0 top-[50%] z-[10] h-auto w-[30%] translate-y-[-50%]"
        draggable={false}
      />
      <div className="w-full space-y-10 pr-[5%] lg:max-w-[50%] lg:space-y-[70px] lg:pr-0">
        <h1 className="text-center text-2xl font-bold lg:text-left lg:text-[40px]">
          Empower Your Workforce <br /> with Seamless Crew <br /> Management
        </h1>

        <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-[90px]">
          <RoundedBtnWithRightIcon
            btnText="Start Your Free Trial"
            iconColor="#15181E"
            className="w-full bg-[#FFFFFF] text-sm text-[#15181E] lg:w-fit"
            style={{
              boxShadow: "2.5px 2.5px 11.26px 0 rgba(170, 63, 255, 0.8)",
            }}
          />
          <RoundedBtnWithRightIcon
            btnText="Request a personalized demo"
            className="w-full border border-solid border-white bg-transparent text-white/[0.98] lg:w-fit"
          />
        </div>
      </div>
      <div className="w-full lg:max-w-[45%]">
        <Image
          src="/images/hero-img.svg"
          alt="hero img"
          width={500}
          height={500}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
};
