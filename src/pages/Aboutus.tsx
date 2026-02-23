import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Globe, Code, Cloud, Shield, Cpu, Star, Lightbulb, Users2, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import officeImage from "@/assets/office.jpg";
import hillshapeImage from "@/assets/hillshape.png"; // Import the hillshape image

const About = () => {
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
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}>
        <Navbar />
      </div>

      {/* Hero Section - Cloudsync Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(185_85%_50%/0.15),transparent_70%)]" />

        {/* Center Content - Mobile responsive */}
        <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Heading - Responsive text sizes */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6"
            >
              <span className="block text-2xl sm:text-4xl md:text-5xl text-primary mb-2 sm:mb-4">
                CLOUDSYNC
              </span>
              <span className="gradient-text block text-4xl sm:text-6xl md:text-8xl leading-tight">
                DRIVING INNOVATION
              </span>
              <span className="gradient-text block text-4xl sm:text-6xl md:text-8xl leading-tight">
                DELIVERING RESULTS
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-2"
            >
              We are here to Empower Your Digital Future
            </motion.p>

            {/* Centered Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-6 sm:px-10 py-3 sm:py-5 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full font-semibold text-sm sm:text-lg shadow-2xl hover:shadow-primary/25 transition-all duration-300 overflow-hidden"
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
            </motion.div>
          </motion.div>
        </div>

        {/* Floating particles effect - reduced for mobile */}
        <div className="hidden sm:block">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: 0
              }}
              animate={{
                y: ["0%", "-30%", "30%", "0%"],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>

      {/* Section: About, Who We Are, Our Mission stacked with image on side */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left side - Stacked content in boxes */}
            <div className="lg:w-1/2 space-y-6">
              {/* About Cloudsync - Box 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-gray-300 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium text-sm mb-4"
                >
                  About Cloudsync
                </motion.button>

                <p className="text-muted-foreground text-base sm:text-lg">
                  Cloudsync is a premier ICT solutions provider specializing in software development,
                  web services, and comprehensive IT support. We combine technical expertise with
                  innovative thinking to deliver solutions that drive business growth and digital
                  transformation. Our team of dedicated professionals works tirelessly to ensure
                  your technology infrastructure is robust, secure, and scalable for future challenges.
                </p>
              </motion.div>

              {/* Who We Are - Box 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="border border-gray-300 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                  Who We Are
                </h2>

                <p className="text-muted-foreground text-base sm:text-lg">
                  CloudSync is a global tech solutions provider, uniting IT
                  experts to deliver smart, scalable, and secure cloud-based
                  systems. We develop and manage digital infrastructure for
                  businesses of all sizes helping them solve real-world
                  challenges through innovative technology. At CloudSync, we
                  build future-ready IT frameworks that drive growth and
                  simplify complexity
                </p>
              </motion.div>

              {/* Our Mission - Box 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="border border-gray-300 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                  Our Mission
                </h2>

                <p className="text-muted-foreground text-base sm:text-lg">
                  To empower businesses and
                  communities through innovative,
                  scalable, and secure technology
                  solutions that simplify everyday
                  challenges and drive digital
                  transformation.
                </p>
              </motion.div>
            </div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl sticky top-24 border border-gray-300">
                <img
                  src={officeImage}
                  alt="Cloudsync Office"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Stats Section - White Background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-2xl md:text-3xl text-gray-800 max-w-3xl mx-auto">
              We've listed some fascinating insights from our <span className="font-bold text-primary">data analytics</span>
            </p>
          </motion.div>

          {/* Stats Grid - Horizontal layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat 1 - 40K+ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <p className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">40K+</p>
              <p className="text-sm uppercase tracking-wider text-gray-600">Worldwide Clients</p>
            </motion.div>

            {/* Stat 2 - 97% */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <p className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">97%</p>
              <p className="text-sm uppercase tracking-wider text-gray-600">Delivery Rate</p>
            </motion.div>

            {/* Stat 3 - 50K+ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <p className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">50K+</p>
              <p className="text-sm uppercase tracking-wider text-gray-600">Clients Projects</p>
            </motion.div>

            {/* Stat 4 - Monthly Revenue Range - Fixed to match others */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">$1.5M-<br className="hidden sm:block" />$2M</p>
              <p className="text-sm uppercase tracking-wider text-gray-600">Monthly Revenue</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section - With Grey Background */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          {/* Top row with heading and description */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
            {/* Left side - What Sets Us Apart heading */}
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-black font-['Arial']"
            >
              What Sets Us Apart
            </motion.h2>

            {/* Right side - Description text with vertical line */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 max-w-2xl"
            >
              <div className="w-1 h-auto bg-primary/30 self-stretch rounded-full"></div>
              <p className="text-muted-foreground text-lg md:text-xl">
                Whether you're looking to build a product, streamline your operations, or grow your digital presence, Cloudsync is here to help. Let us turn your vision into a powerful reality.
              </p>
            </motion.div>
          </div>

          {/* Bottom row - Features in a straight line (white boxes) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 - Client-First Approach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30 bg-white"
            >
              <div className="flex flex-col">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Client-First Approach</h3>
                <p className="text-muted-foreground">
                  We listen, understand, and build with your business goals in mind.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 - Innovation at Our Core */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30 bg-white"
            >
              <div className="flex flex-col">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation at Our Core</h3>
                <p className="text-muted-foreground">
                  We stay ahead of trends to deliver forward-thinking solutions.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 - Experienced Team */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30 bg-white"
            >
              <div className="flex flex-col">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Users2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Experienced Team</h3>
                <p className="text-muted-foreground">
                  Skilled developers, designers, and consultants with deep industry knowledge.
                </p>
              </div>
            </motion.div>

            {/* Feature 4 - End-to-End Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30 bg-white"
            >
              <div className="flex flex-col">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">End-to-End Services</h3>
                <p className="text-muted-foreground">
                  From discovery and strategy to deployment and support.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Hillshape Background with Promotional Content */}
      <section className="relative py-32 overflow-hidden">
        {/* Hillshape Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${hillshapeImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          {/* Top aligned content with space above */}
          <div className="pt-8">
            {/* Up to 10% off button - non-clickable div instead of button */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center mb-16"
            >
              <div className="bg-green-800 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg">Up to
                <span className="text-yellow-300"> 10% </span>off
              </div>
            </motion.div>

            {/* Main heading - Trusted ICT Experts */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white text-center mb-8 leading-tight"
            >
              Trusted ICT Experts for
              <br />
              Digital Solutions
            </motion.h2>

            {/* Get Started button with white thick borders */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex justify-center mb-16"
            >
              <button className="bg-transparent border-4 border-white text-white font-bold py-4 px-12 rounded-full text-xl hover:bg-white hover:text-black transition-all duration-300">
                Get Started
              </button>
            </motion.div>

            {/* First row of floating divs - non-clickable, multiple colors, white text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 mb-6"
            >
              <div className="bg-blue-600 text-white font-medium py-3 px-6 rounded-full shadow-md">Cloud Computing</div>
              <div className="bg-green-600 text-white font-medium py-3 px-6 rounded-full shadow-md">Cybersecurity</div>
              <div className="bg-yellow-600 text-white font-medium py-3 px-6 rounded-full shadow-md">Data Analytics</div>
              <div className="bg-purple-600 text-white font-medium py-3 px-6 rounded-full shadow-md">AI & ML</div>
              <div className="bg-pink-600 text-white font-medium py-3 px-6 rounded-full shadow-md">DevOps</div>
              <div className="bg-indigo-600 text-white font-medium py-3 px-6 rounded-full shadow-md">Software Dev</div>
            </motion.div>

            {/* Second row of floating divs - non-clickable, multiple colors, white text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <div className="bg-orange-600 text-white font-medium py-3 px-6 rounded-full shadow-md">IT Consulting</div>
              <div className="bg-teal-600 text-white font-medium py-3 px-6 rounded-full shadow-md">Cloud Migration</div>
              <div className="bg-red-600 text-white font-medium py-3 px-6 rounded-full shadow-md">Tech Support</div>
              <div className="bg-cyan-600 text-white font-medium py-3 px-6 rounded-full shadow-md">Digital Transformation</div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;