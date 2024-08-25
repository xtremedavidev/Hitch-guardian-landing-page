import { RoundedBtnWithRightIcon } from "@/components/buttons";
import Image from "next/image";

export const HeroHome = () => {
  return (
    <div className="relative flex h-[100dvh] w-full flex-col items-center gap-8 pl-[5%] pt-[150px] lg:flex-row lg:justify-between lg:gap-0">
      <Image
        src="/images/final-hero-bg.svg"
        alt=""
        fill
        className="absolute z-[-1] h-auto w-full object-cover object-center"
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
        <div>
          <h2 className="text-center text-2xl font-bold text-[#297FB8] lg:text-left lg:text-[32px] lg:leading-tight">
            Hitch Guardian
          </h2>
          <h1 className="mt-5 text-center text-2xl font-bold lg:text-left lg:text-[40px] lg:leading-tight">
            Empower Your Workforce <br /> with Seamless Crew <br /> Management
          </h1>
        </div>

        <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-10">
          <RoundedBtnWithRightIcon
            btnText="Start Your Free Trial"
            iconColor="#15181E"
            className="w-full bg-[#FFFFFF] text-sm text-[#15181E] lg:w-fit"
            style={{
              boxShadow: "2.5px 2.5px 11.26px 0 rgba(255, 255, 255, 0.8)",
            }}
          />
          <RoundedBtnWithRightIcon
            btnText="Request a personalized demo"
            className="w-full border border-solid border-white bg-transparent text-white/[0.98] lg:w-fit"
          />
        </div>
      </div>
      <div className="w-full lg:max-w-[47%]">
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
