import React from "react";
import Hero from "./home/Hero";
import Ecosystem from "./home/Ecosystem";
import MembershipPlans from "./home/MembershipPlans";
import HotelsPreview from "./home/HotelsPreview";
import CarsPreview from "./home/CarsPreview";
import FaqSection from "./home/FaqSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header Section */}
      <Hero />

      {/* Membership Plans Packages */}
      <MembershipPlans />

      {/* Ecosystem Workflow Details */}
      <Ecosystem />

      {/* Hotels Preview Showcase */}
      <HotelsPreview />

      {/* Luxury Fleet Preview */}
      <CarsPreview />

      {/* Support and Accordion FAQs */}
      <FaqSection />
    </div>
  );
}
