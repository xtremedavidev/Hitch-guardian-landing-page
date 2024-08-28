import { ScrollRevealLeft, ScrollRevealRight } from "@/components/animations";
import { RoundedBtnWithRightIcon } from "@/components/buttons";
import { ReqDemoBtn, StartFreeTrailBtn } from "@/components/ui";
import Image from "next/image";

export const HeroHome = () => {
  return (
    <div className="relative flex min-h-[100dvh] w-full flex-col items-center gap-8 overflow-hidden pl-[5%] pt-[150px] lg:max-h-[100dvh] lg:flex-row lg:justify-between lg:gap-0">
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
      <div className="relative z-40 w-full pr-[5%] lg:max-w-[50%] lg:pr-0">
        <ScrollRevealLeft className="space-y-10 lg:space-y-[70px]">
          <div>
            <h2 className="text-center text-2xl font-bold text-[#297FB8] lg:text-left lg:text-[32px] lg:leading-tight">
              Hitch Guardian
            </h2>
            <h1 className="mt-5 text-center text-2xl font-bold lg:text-left lg:text-[40px] lg:leading-tight">
              Empower Your Workforce <br /> with Seamless Crew <br /> Management
            </h1>
          </div>
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-10">
            <StartFreeTrailBtn />
            <ReqDemoBtn />
          </div>
        </ScrollRevealLeft>
      </div>
      <div className="w-full lg:max-w-[47%]">
        <ScrollRevealRight>
          <Image
            src="/images/hero-img.svg"
            alt="hero img"
            width={500}
            height={500}
            className="h-auto w-full"
          />
        </ScrollRevealRight>
      </div>
    </div>
  );
};
