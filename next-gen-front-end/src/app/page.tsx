import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CampusGallery from "@/components/CampusGallery";
import Navbar from "@/components/Navbar";
import Events from "@/components/Events";

export default function Home() {
  return (
    <main className="flex flex-col">
        <Navbar />
      <Hero />
      <Features />
       <CampusGallery />
       <Events />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
