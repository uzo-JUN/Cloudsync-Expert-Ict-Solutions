import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import MarqueeTicker from "@/components/MarqueeTicker";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import AboutSection from "@/components/AboutSection";
import RoadmapSection from "@/components/RoadmapSection";
import GlobalStats from "@/components/GlobalStats";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Navbar />
      <MarqueeTicker />
      <HeroSection />
      <ClientLogos />
      <AboutSection />
      <RoadmapSection />
      <GlobalStats />
      <ServicesSection />
      <CTASection />
      <WhyChooseUs />
      <PortfolioSection />
      <Footer />
    </div>
  );
};

export default Index;
