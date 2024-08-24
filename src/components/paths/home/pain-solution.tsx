export const PainSolution = () => {
  return (
    <div className="mt-[70px] px-[5%] text-white">
      <h1 className="section-header">
        Tired of Inefficiency and Rising Costs? <br /> We’ve Got You Covered.
      </h1>

      <div className="mt-[50px] 2xl:mt-[100px]">
        <div className="hidden lg:block">
          <div className="flex justify-between">
            <h2 className="w-full text-lg font-bold lg:max-w-[50%] 2xl:text-2xl">
              Pain Points
            </h2>
            <h2 className="w-full text-lg font-bold lg:max-w-[50%] 2xl:text-2xl">
              Solutions
            </h2>
          </div>

          <div className="mt-[30px] space-y-6 2xl:mt-[55px] 2xl:space-y-8">
            {painPointNSolutionArr.map((point) => (
              <div key={point.painPoint} className="flex justify-between">
                <p className="w-full text-lg font-medium lg:max-w-[50%] 2xl:text-2xl">
                  {point.painPoint}
                </p>
                <p className="w-full text-base font-normal text-[#99D6FF] lg:max-w-[50%] 2xl:text-xl">
                  {point.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden">
          <div>
            <h2 className="w-full text-xl font-bold lg:max-w-[50%] 2xl:text-2xl">
              Pain Points
            </h2>
            <div className="mt-[30px] space-y-6 2xl:mt-[55px] 2xl:space-y-8">
              {painPointNSolutionArr.map((point) => (
                <p
                  key={point.painPoint}
                  className="w-full text-lg font-medium lg:max-w-[50%] 2xl:text-2xl"
                >
                  {point.painPoint}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="w-full text-xl font-bold lg:max-w-[50%] 2xl:text-2xl">
              Solutions
            </h2>
            <div className="mt-[30px] space-y-6 2xl:mt-[55px] 2xl:space-y-8">
              {painPointNSolutionArr.map((point) => (
                <p
                  key={point.solution}
                  className="w-full text-base font-normal text-[#99D6FF] lg:max-w-[50%] 2xl:text-xl"
                >
                  {point.solution}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const painPointNSolutionArr = [
  {
    painPoint: "Struggling With Inefficient Crew Allocation?",
    solution:
      "Our Intelligent Allocation Engine Ensures The Right Workers Are On The Right Jobs, Reducing Idle Time And Increasing Productivity",
  },
  {
    painPoint: "Dispatching Is Chaotic And Costly?",
    solution:
      "Streamline Your Dispatch Process With Optimized Routing And Real-Time Updates, Saving Time And Fuel Costs.",
  },
  {
    painPoint: "Lack Of Insights Into Workforce Performance?",
    solution:
      "Track Work Trends, Monitor Performance, And Make Data-Driven Decisions That Propel Your Business Forward.",
  },
  {
    painPoint: "Communication Gaps Causing Delays?",
    solution:
      "Enable Workers To Instantly Notify Their Availability Through Our Intuitive Interface, Keeping Everyone In Sync.",
  },
];
