import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PyramidSection from "@/components/PyramidSection";
import SupportSection from "@/components/SupportSection";
import InstructorsSection from "@/components/InstructorsSection";
import DashboardSection from "@/components/DashboardSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

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
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <StatsSection />
      <Footer />
    </main>
  );
}
