import {
  FAQ,
  FeaturesHome,
  HeroHome,
  LaunchDashboardPopup,
  MeetTheTeam,
  PainSolution,
  Pricing,
  RequestDemo,
  StreamlineSteps,
  WhyChooseUs,
} from "@/components";

export default function Home() {
  return (
    <main className="h-full">
      <LaunchDashboardPopup />
      <HeroHome />
      <PainSolution />
      <FeaturesHome />
      <StreamlineSteps />
      <WhyChooseUs />
      <Pricing />
      <MeetTheTeam />
      <FAQ />
      <RequestDemo />
    </main>
  );
}
