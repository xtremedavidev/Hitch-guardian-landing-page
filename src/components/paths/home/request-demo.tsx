import { RoundedBtnWithRightIcon } from "@/components/buttons";

export const RequestDemo = () => {
  return (
    <div className="mb-10 mt-16 bg-[#297FB8]">
      <div
        style={{
          background: "url('/images/request-for-demo-bg.png')",
          backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex w-full flex-col items-center justify-between gap-10 px-[5%] py-[40px] lg:flex-row lg:gap-0"
      >
        <div className="w-full space-y-[15px] lg:max-w-[40%]">
          <p className="text-base font-medium lg:text-xl">
            Ready to Optimize Your Crew Management?
          </p>
          <h2 className="text-2xl font-bold leading-tight lg:text-3xl 2xl:text-[40px]">
            Request a Personalized Demo
          </h2>
          <p className="text-sm font-medium lg:text-base">
            Experience the difference with Hitch Guardian. No commitment, no
            credit card required
          </p>
        </div>
        <div className="flex w-full flex-col items-center gap-6 lg:max-w-[50%] lg:flex-row lg:gap-10">
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
    </div>
  );
};
