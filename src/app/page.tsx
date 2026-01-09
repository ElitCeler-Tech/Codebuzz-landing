import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PyramidSection from "@/components/PyramidSection";
import SupportSection from "@/components/SupportSection";
import InstructorsSection from "@/components/InstructorsSection";
import DashboardSection from "@/components/DashboardSection";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PyramidSection />
      <SupportSection />
      <InstructorsSection />
      <DashboardSection />
      <TeamSection />
    </main>
  );
}
