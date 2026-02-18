import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import cloudLogo from "@/assets/cloudlogo.png"; // Import the Cloudsync logo

const Blog = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Sticky Navbar */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}>
        <Navbar />
      </div>
      
      {/* Hero Section - Blog Page */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gray-100 pt-20 pb-16">
        <div className="container mx-auto px-4 text-center">
          {/* Cloudsync Logo above BLOG PAGE - ADDED mt-16 for space above logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-2 mt-16" // CHANGED: Added mt-16
          >
            <img 
              src={cloudLogo} 
              alt="CloudSync Logo" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain mx-auto"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:text-6xl font-black tracking-tight text-gray-950 mb-8"
          >
            BLOG PAGE
          </motion.h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left side - No Updates Found */}
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 md:p-12 border border-gray-200"
              >
                <h2 className="md:text-3xl font-bold text-gray-950 mb-4">
                  No updates found!
                </h2>
              </motion.div>
            </div>

            {/* Right side - Recent News Section */}
            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-100 rounded-xl p-6 md:p-8"
              >
                {/* Recent News header with vertical line */}
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-1 h-8 bg-primary rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-950">Recent News</h3>
                </div>

                {/* No new found message */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <p className="text-gray-500 font-medium">No recent news</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;