import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import officeImage from "@/assets/office.jpg";
import hillshapeImage from "@/assets/hillshape.png";
import workBgc from "@/assets/work.png";

const About = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);

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
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <Navbar />
      </motion.div>

      {/* Hero Section - With Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${workBgc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] md:min-h-[calc(100vh-300px)]"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              <span className="block text-6xl sm:text-4xl md:text-8xl text-white mb-2 sm:mb-4">
                CLOUDSYNC
              </span>
              <span className="gradient-text block text-4xl sm:text-6xl md:text-5xl leading-tight text-white">
                DRIVING INNOVATION
              </span>
              <span className="gradient-text block text-4xl sm:text-6xl md:text-5xl leading-tight text-white">
                DELIVERING RESULTS
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-2"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              We are here to Empower Your Digital Future
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-16 md:mb-24 lg:mb-32"
            >
              <a 
                href="https://forms.office.com/r/r6LdLyPvCW" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-6 sm:px-10 py-3 sm:py-5 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full font-semibold text-sm sm:text-lg shadow-2xl hover:shadow-primary/25 transition-all duration-300 overflow-hidden"
                  style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started Today
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section: About, Who We Are, Our Mission stacked with image on side */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left side - Stacked content in boxes */}
            <div className="lg:w-1/2 space-y-6">
              {/* About Cloudsync - Box 1 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 30px 40px -15px rgba(75, 107, 251, 0.3)"
                }}
                onHoverStart={() => setHoveredBox(1)}
                onHoverEnd={() => setHoveredBox(null)}
                className="group relative bg-white rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 border border-gray-200 shadow-lg overflow-hidden"
              >
                {/* Animated gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: hoveredBox === 1 ? [1, 1.02, 1] : 1,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Decorative corner lines */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium text-sm relative overflow-hidden group/btn"
                      style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                    >
                      <span className="relative z-10">About Cloudsync</span>
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.button>
                    
                    {/* Animated dot */}
                    <motion.div
                      className="w-2 h-2 bg-primary rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  <p 
                    className="text-muted-foreground text-base sm:text-lg leading-relaxed"
                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  >
                    Cloudsync is a premier ICT solutions provider specializing in software development,
                    web services, and comprehensive IT support. We combine technical expertise with
                    innovative thinking to deliver solutions that drive business growth and digital
                    transformation. Our team of dedicated professionals works tirelessly to ensure
                    your technology infrastructure is robust, secure, and scalable for future challenges.
                  </p>

                  {/* Progress bar animation */}
                  <motion.div
                    className="w-full h-1 bg-gray-100 rounded-full mt-6 overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Who We Are - Box 2 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 30px 40px -15px rgba(75, 107, 251, 0.3)"
                }}
                onHoverStart={() => setHoveredBox(2)}
                onHoverEnd={() => setHoveredBox(null)}
                className="group relative bg-white rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 border border-gray-200 shadow-lg overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: hoveredBox === 2 ? [1, 1.02, 1] : 1,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h2 
                      className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                      style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                    >
                      Who We Are
                    </h2>
                    
                    {/* Pulsing ring */}
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <div className="w-3 h-3 bg-primary rounded-full" />
                      </div>
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary/30"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </div>

                  <p 
                    className="text-muted-foreground text-base sm:text-lg leading-relaxed"
                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  >
                    CloudSync is a global tech solutions provider, uniting IT
                    experts to deliver smart, scalable, and secure cloud-based
                    systems. We develop and manage digital infrastructure for
                    businesses of all sizes helping them solve real-world
                    challenges through innovative technology. At CloudSync, we
                    build future-ready IT frameworks that drive growth and
                    simplify complexity
                  </p>
                </div>
              </motion.div>

              {/* Our Mission - Box 3 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 30px 40px -15px rgba(75, 107, 251, 0.3)"
                }}
                onHoverStart={() => setHoveredBox(3)}
                onHoverEnd={() => setHoveredBox(null)}
                className="group relative bg-white rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 border border-gray-200 shadow-lg overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: hoveredBox === 3 ? [1, 1.02, 1] : 1,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h2 
                      className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                      style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                    >
                      Our Mission
                    </h2>
                    
                    {/* Floating dots */}
                    <div className="flex gap-1">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-primary/50 rounded-full"
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <p 
                    className="text-muted-foreground text-base sm:text-lg leading-relaxed"
                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  >
                    To empower businesses and
                    communities through innovative,
                    scalable, and secure technology
                    solutions that simplify everyday
                    challenges and drive digital
                    transformation.
                  </p>

                  {/* Decorative line */}
                  <motion.div
                    className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-6"
                    animate={{
                      x: [-10, 10, -10],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="relative group">
                <div className="rounded-2xl overflow-hidden shadow-2xl sticky top-24 border border-gray-300">
                  <img
                    src={officeImage}
                    alt="Cloudsync Office"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Decorative rings */}
                <motion.div
                  className="absolute -inset-4 rounded-3xl border-2 border-primary/30"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - White Background */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #4B6BFB 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p 
              className="text-2xl md:text-3xl text-gray-800 max-w-3xl mx-auto"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              We've listed some fascinating insights from our <span className="font-bold text-primary">data analytics</span>
            </p>
          </motion.div>

          {/* Stats Grid - Horizontal layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "40K+", label: "Worldwide Clients", delay: 0 },
              { value: "97%", label: "Delivery Rate", delay: 0.1 },
              { value: "50K+", label: "Clients Projects", delay: 0.2 },
              { value: "$1.5M-$2M", label: "Monthly Revenue", delay: 0.3, isMultiLine: true },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay, duration: 0.5 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 30px 40px -15px rgba(75, 107, 251, 0.3)"
                }}
                className="group relative bg-white border-2 border-gray-100 rounded-2xl p-8 text-center hover:border-primary/30 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <p className={`${stat.isMultiLine ? 'text-4xl md:text-5xl' : 'text-5xl md:text-6xl'} font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2 leading-tight`}
                     style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
                    {stat.value}
                  </p>
                  <p 
                    className="text-sm uppercase tracking-wider text-gray-600"
                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  >
                    {stat.label}
                  </p>

                  {/* Animated bar */}
                  <motion.div
                    className="w-0 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 group-hover:w-12 transition-all duration-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "3rem" }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section - With Grey Background */}
      <section className="py-16 bg-gray-100 relative overflow-hidden">
        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-60 h-60 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Top row with heading and description */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              What Sets Us Apart
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 max-w-2xl"
            >
              <motion.div 
                className="w-1 h-24 bg-gradient-to-b from-primary to-secondary rounded-full"
                animate={{
                  height: ["6rem", "8rem", "6rem"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <p 
                className="text-muted-foreground text-lg md:text-xl"
                style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
              >
                Whether you're looking to build a product, streamline your operations, or grow your digital presence, Cloudsync is here to help. Let us turn your vision into a powerful reality.
              </p>
            </motion.div>
          </div>

          {/* Bottom row - Features in a straight line (white boxes) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Client-First Approach", desc: "We listen, understand, and build with your business goals in mind.", delay: 0 },
              { title: "Innovation at Our Core", desc: "We stay ahead of trends to deliver forward-thinking solutions.", delay: 0.1 },
              { title: "Experienced Team", desc: "Skilled developers, designers, and consultants with deep industry knowledge.", delay: 0.2 },
              { title: "End-to-End Services", desc: "From discovery and strategy to deployment and support.", delay: 0.3 },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: feature.delay, duration: 0.5 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 30px 40px -15px rgba(75, 107, 251, 0.3)"
                }}
                className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary/30 transition-all duration-500 overflow-hidden"
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Top accent line */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                />

                <div className="relative z-10">
                  <h3 
                    className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300"
                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="text-muted-foreground"
                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  >
                    {feature.desc}
                  </p>

                  {/* Bottom decorative dots */}
                  <div className="flex gap-1 mt-4">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 bg-primary/30 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hillshape Background with Promotional Content */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${hillshapeImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-secondary/60 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="pt-8">
            {/* Up to 10% off button */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-white/30 rounded-full blur-lg" />
                <div className="relative bg-gradient-to-r from-green-700 to-green-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-2xl border border-white/30"
                     style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
                  Up to <span className="text-yellow-300">10%</span> off
                </div>
              </motion.div>
            </motion.div>

            {/* Main heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white text-center mb-8 leading-tight"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              Trusted ICT Experts for
              <br />
              Digital Solutions
            </motion.h2>

            {/* Get Started button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex justify-center mb-16"
            >
              <a 
                href="https://forms.office.com/r/r6LdLyPvCW" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-12 py-4 bg-transparent border-4 border-white text-white font-bold rounded-full text-xl overflow-hidden"
                  style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                >
                  <span className="relative z-10">Get Started</span>
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                </motion.button>
              </a>
            </motion.div>

            {/* Service tags rows */}
            {[
              ["Cloud Computing", "Cybersecurity", "Data Analytics", "AI & ML", "DevOps", "Software Dev"],
              ["IT Consulting", "Cloud Migration", "Tech Support", "Digital Transformation"]
            ].map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + rowIndex * 0.1 }}
                className="flex flex-wrap justify-center gap-4 mb-6"
              >
                {row.map((tag, index) => {
                  const colors = [
                    "from-blue-600 to-blue-500",
                    "from-green-600 to-green-500",
                    "from-yellow-600 to-yellow-500",
                    "from-purple-600 to-purple-500",
                    "from-pink-600 to-pink-500",
                    "from-indigo-600 to-indigo-500",
                    "from-orange-600 to-orange-500",
                    "from-teal-600 to-teal-500",
                    "from-red-600 to-red-500",
                    "from-cyan-600 to-cyan-500",
                  ];
                  
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ 
                        scale: 1.1,
                        y: -5,
                      }}
                      className={`bg-gradient-to-r ${colors[index % colors.length]} text-white font-medium py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-default`}
                      style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                    >
                      {tag}
                    </motion.div>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;