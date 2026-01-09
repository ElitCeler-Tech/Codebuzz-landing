import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PyramidSection from "@/components/PyramidSection";
import SupportSection from "@/components/SupportSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PyramidSection />
      <SupportSection />
    </main>
  );
}
