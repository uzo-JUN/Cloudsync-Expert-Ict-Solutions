import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const Team = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Team members data with names, positions, bios, and image paths
  const teamMembers = [
    {
      id: 1,
      name: "Nonso A",
      position: "Chief of Staff",
      bio: "Andy A. is a seasoned technology leader with years of experience architecting scalable systems and leading engineering teams. As CTO, he drives the company's technical vision, infrastructure strategy, and innovation roadmap.",
      src: "/src/assets/teazm-collab.png",
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      name: "Augustina A",
      position: "HR",
      bio: "Augustina A. brings years of HR leadership and strategic operations experience to her role as Chief of Staff. She oversees talent acquisition, employee engagement, and organizational development across the company.",
      src: "/src/assets/why-chzoose-team.png",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Emmanuel C.",
      position: "Head of Product",
      bio: "Kosi Emmanuel Chukwujindu is a product management professional with years of experience building and scaling digital products. As Head of Product, he leads product strategy, user research, and roadmap execution.",
      src: "/src/assets/sirkozsi.png",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      name: "Kelly U.",
      position: "Software Engineer",
      bio: "Kelechi Uroko is a full-stack software engineer with expertise in modern web technologies and cloud infrastructure. Based in the UK, he builds scalable, high-performance applications that solve complex business problems",
      src: "/src/assets/sirskosi.png",
      color: "from-orange-500 to-red-400",
    },
    {
      id: 5,
      name: "Neha Bansal",
      position: "Research Director",
      bio: "Neha Bansal leads research and development initiatives as Research Director, driving innovation in emerging technologies. With a strong background in data science and market analysis and identifying trends that shape product strategy",
      src: "/src/assets/sirskosi.png",
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 6,
      name: "Modesta U.",
      position: "Client Happiness Manager",
      bio: "Modesta Uzo is dedicated to ensuring exceptional customer experiences as Client Happiness Manager. With years of client relations experience, she handles inquiries, resolves issues, and builds lasting relationships with customers.",
      src: "/src/assets/sisrkosi.png",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 7,
      name: "Judith E.",
      position: "QA Manager",
      bio: "Chiamaka Eze ensures product excellence as QA Manager, leading testing strategies and quality assurance processes. she oversees manual and automated testing to deliver bug-free, high-performing software.",
      src: "/src/assets/sirkossi.png",
      color: "from-amber-500 to-yellow-500",
    },
  ];

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

      {/* Hero Section with Background */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
          {/* Animated shapes */}
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, #4B6BFB 1px, transparent 0)",
              backgroundSize: "40px 40px"
            }}
          />
        </div>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black text-gray-900 mb-6 relative"
            style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
          >
            <span className="relative inline-block">
              OUR
              <motion.span
                className="absolute -top-8 -right-8 text-4xl"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✦
              </motion.span>
            </span>{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TEAM
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
          >
            A passionate group of innovators, engineers, and problem-solvers 
            dedicated to building smarter, scalable tech solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>
      </section>

      {/* Team Section - Meet Our Experts */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={24} className="text-primary" />
              </motion.div>
              <span 
                className="text-primary font-semibold text-sm uppercase tracking-wider"
                style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
              >
                Our Experts
              </span>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={24} className="text-primary" />
              </motion.div>
            </div>

            <h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              Meet Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experts</span>
            </h2>
            
            <p 
              className="text-lg text-muted-foreground"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              With diverse expertise and a shared commitment to excellence, we work together 
              to turn your ideas into impactful digital solutions.
            </p>

            {/* Animated underline */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"
              animate={{
                width: ["4rem", "8rem", "4rem"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Team Members Grid - 4 per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -15,
                  transition: { type: "spring", stiffness: 400 }
                }}
                onHoverStart={() => setHoveredMember(member.id)}
                onHoverEnd={() => setHoveredMember(null)}
                className="group relative h-full"
              >
                {/* Gradient border on hover */}
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${member.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500`}
                  animate={{
                    background: [
                      `linear-gradient(45deg, ${member.color.split(' ')[1]}, ${member.color.split(' ')[3]})`,
                      `linear-gradient(135deg, ${member.color.split(' ')[1]}, ${member.color.split(' ')[3]})`,
                      `linear-gradient(225deg, ${member.color.split(' ')[1]}, ${member.color.split(' ')[3]})`,
                      `linear-gradient(315deg, ${member.color.split(' ')[1]}, ${member.color.split(' ')[3]})`,
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Main card */}
                <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-2xl h-full flex flex-col">
                  {/* Header with gradient */}
                  <div className={`h-2 bg-gradient-to-r ${member.color}`} />

                  {/* Member Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Name and position */}
                    <div className="mb-4">
                      <h3 
                        className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-1"
                        style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                      >
                        {member.name}
                      </h3>
                      <p 
                        className="text-sm font-medium text-primary"
                        style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                      >
                        {member.position}
                      </p>
                    </div>

                    {/* Bio */}
                    <div className="relative flex-1">
                      <span className="absolute -top-2 -left-1 text-4xl text-primary/20">"</span>
                      <p 
                        className="text-sm text-gray-600 leading-relaxed pl-4 relative z-10"
                        style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                      >
                        {member.bio}
                      </p>
                      <span className="absolute -bottom-4 -right-1 text-4xl text-primary/20 rotate-180">"</span>
                    </div>
                  </div>

                  {/* Bottom decorative element */}
                  <motion.div
                    className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${member.color} opacity-20`} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join the team CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              className="bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 group"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = "/career"}
            >
              <span>Join Our Team</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;