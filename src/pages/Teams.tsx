import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const Team = () => {
  const [scrolled, setScrolled] = useState(false);

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
      name: "Nonso A ",
      position: "Chief of Staff",
      bio: "Andy A. is a seasoned technology leader with years of experience architecting scalable systems and leading engineering teams. As CTO, he drives the company's technical vision, infrastructure strategy, and innovation roadmap.",
      src: "/src/assets/teazm-collab.png"
    },
    {
      id: 2,
      name: "Augustina A",
      position: "HR", 
      bio: "Augustina A. brings years of HR leadership and strategic operations experience to her role as Chief of Staff. She oversees talent acquisition, employee engagement, and organizational development across the company.",
      src: "/src/assets/why-chzoose-team.png"
    },
    {
      id: 3,
      name: "Emmanuel C.",
      position: "Head of Product",
      bio: "Kosi Emmanuel Chukwujindu is a product management professional with years of experience building and scaling digital products. As Head of Product, he leads product strategy, user research, and roadmap execution.",
      src: "/src/assets/sirkozsi.png"
    },
    {
      id: 4,
      name: "Kelly U.",
      position: "Software Engineer",
      bio: "Kelechi Uroko is a full-stack software engineer with expertise in modern web technologies and cloud infrastructure. Based in the UK, he builds scalable, high-performance applications that solve complex business problems",
      src: "/src/assets/sirskosi.png"
    },
    {
      id: 5,
      name: "Neha Bansal",
      position: "Research Director",
      bio: "Neha Bansal leads research and development initiatives as Research Director, driving innovation in emerging technologies. With a strong background in data science and market analysis and identifying trends that shape product strategy",
       src: "/src/assets/sirskosi.png"
    },
    {
      id: 6,
      name: " Modesta U. ",
      position: " Client Happiness Manager",
      bio: "Modesta Uzo is dedicated to ensuring exceptional customer experiences as Client Happiness Manager. With years of client relations experience, she handles inquiries, resolves issues, and builds lasting relationships with customers.",
      src: "/src/assets/sisrkosi.png"
    },
    {
      id: 7,
      name: " Judith E.",
      position: " QA Manager",
      bio: "Chiamaka Eze ensures product excellence as QA Manager, leading testing strategies and quality assurance processes. she oversees manual and automated testing to deliver bug-free, high-performing software.",
      src: "/src/assets/sirkossi.png"
    }];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Sticky Navbar */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}>
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-gray-900 mb-4"
          >
            OUR TEAM
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-primary mx-auto rounded-full"
          />
        </div>
      </section>

      {/* Team Section - Meet Our Experts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Experts
            </h2>
            <p className="text-lg text-muted-foreground">
              With diverse expertise and a shared commitment to excellence, we work together to turn your ideas into impactful digital solutions.
            </p>
          </motion.div>

          {/* Team Members Grid - 4 per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
              >
                {/* Member Info with Bio */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-600 italic border-t border-gray-100 pt-3 mt-auto">
                    "{member.bio}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;