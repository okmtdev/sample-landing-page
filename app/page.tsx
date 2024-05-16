"use client";

import { NavBar } from "@/headers/NavBar";
import { Footer } from "@/footers/Footer";
import { Company } from "@/body/companies/Company";
import { Howto } from "@/body/howto/Howto";
import { Pricing } from "@/body/pricing/Pricing";
import { Solution } from "@/body/solutions/Solution";
import { Top } from "@/body/top/Top";

export default function Home() {
  return (
    <main>
      <div className="space-y-44">
        <NavBar />
        <div id="top">
          <Top />
        </div>
        <div id="solution">
          <Solution />
        </div>
        <div id="howto">
          <Howto />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <div id="company">
          <Company />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </main>
  );
}
