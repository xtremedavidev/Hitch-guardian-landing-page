'use client'
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
import Email from "@/components/Email"
import { useState } from "react";





export default function Home() {

  const [emailopen, setEmailOpen] = useState(false)

  const onCloseEmail = () => {
    setEmailOpen(!emailopen)
    console.log("trial, " , emailopen)
  }
  const SendEmail = () => {

    setEmailOpen(true)
    console.log("done")

  }

  return (
    <main className="h-full">
<div className="z-50">
{emailopen && (<>
      <Email isOpen={emailopen} onClose={onCloseEmail}/>
      </>)}
</div>

<div className="z-30">
<LaunchDashboardPopup SendEmail={SendEmail} />
      <HeroHome SendEmail={SendEmail}/>
      <PainSolution />
      <FeaturesHome />
      <StreamlineSteps />
      <WhyChooseUs />
      <Pricing />
      <MeetTheTeam />
      <FAQ />
      <RequestDemo  SendEmail={SendEmail}/>

</div>

      </main>
  );
}
