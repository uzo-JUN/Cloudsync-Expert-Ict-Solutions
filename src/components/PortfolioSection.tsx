import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

// Import your images
import realestate from "@/assets/realestate.png";
import onlinestore from "@/assets/onlinestore.png";
import blockchainApp from "@/assets/blockchain-app.png";
import mobileApp from "@/assets/mobile-app.png";
import food from "@/assets/food.png";
import health from "@/assets/health.png";

const projects = [
  { img: realestate, title: "Real Estate Platform", category: "Property Management" },
  { img: onlinestore, title: "Online Store", category: "E-Commerce Solution" },
  { img: blockchainApp, title: "Blockchain Application", category: "Web3 & DeFi" },
  { img: mobileApp, title: "Mobile Application", category: "iOS & Android" },
  { img: food, title: "Food Delivery App", category: "Mobile Application" },
  { img: health, title: "Healthcare Portal", category: "Telemedicine" },
];

// Duplicate projects for seamless scrolling
const scrollingProjects = [...projects, ...projects, ...projects];

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Watercolor background effect - Blue theme */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300 rounded-full blur-3xl" />
      </div>

      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={20} className="text-blue-600" />
            </motion.div>
            <p 
              className="text-blue-600 font-semibold text-sm uppercase tracking-wider"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              Our Portfolio
            </p>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={20} className="text-blue-600" />
            </motion.div>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
          >
            Projects That Speak for Us
          </h2>
          
          <p 
            className="text-gray-600"
            style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
          >
            Explore our latest work across various industries and technologies
          </p>
        </motion.div>

        {/* Vertical Scrolling Carousel - 3 items visible */}
        <div className="relative h-[500px] overflow-hidden mask-edges">
          {/* Top fade */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-blue-50 to-transparent z-10" />
          
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 to-transparent z-10" />

          {/* Scrolling container */}
          <motion.div 
            className="space-y-4"
            animate={{
              y: [0, -1200],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {scrollingProjects.map((project, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100/50"
                whileHover={{ 
                  scale: 1.02,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-center gap-6 p-5">
                  {/* Image container */}
                  <div className="w-28 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                    <img 
                      src={project.img} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 
                      className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300"
                      style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                    >
                      {project.title}
                    </h4>
                    <p 
                      className="text-sm text-gray-500 mt-1"
                      style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                    >
                      {project.category}
                    </p>

                    {/* Tags */}
                    <div className="flex gap-2 mt-3">
                      <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
                        Featured
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
                        2024
                      </span>
                    </div>
                  </div>

                  {/* Decorative element */}
                  <motion.div
                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    <Sparkles size={18} className="text-blue-600" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://forms.office.com/r/r6LdLyPvCW", "_blank")}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>

      {/* Custom CSS for mask edges */}
      <style>{`
        .mask-edges {
          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;