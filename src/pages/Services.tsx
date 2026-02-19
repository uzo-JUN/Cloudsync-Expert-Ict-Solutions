import { motion } from "framer-motion";
import { Server, Shield, Cloud, Code, Globe, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section - Grey Background with netshape.png */}
      <section 
        className="relative bg-gray-100 dark:bg-gray-800 py-32 md:py-40 overflow-hidden"
        style={{
          backgroundImage: "url('/netshape.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat", // Add this to prevent tiling
          backgroundBlendMode: "overlay"
        }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gray-100/90 dark:bg-gray-800/90" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* "Our Services" - Main Heading in Black */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
              OUR SERVICES
            </h1>
            
            {/* Subtitle - Grey Text */}
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Innovative ICT Solutions That Power Your Business
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;