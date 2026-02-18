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

  // Team members data with names, positions, and image paths from src/assets/
  const teamMembers = [
    {
      id: 1,
      name: "Lorem Ipsum",
      position: "CEO & Founder",
      src: "/src/assets/sirkosi.png"
    },
    {
      id: 2,
      name: "Augustina A ",
      position: "Chief of staff",
      src: "/src/assets/sirkosi.png"
    },
    {
      id: 3,
      name: " Andy A",
      position: "HR",
      src: "/src/assets/sirkosi.png"
    },
    {
      id: 4,
      name: "Lorem Ipsum",
      position: "UX Designer",
      src: "/src/assets/sirkosi.png"
    },
    {
      id: 5,
      name: "Lorem Ipsum",
      position: "Project Manager",
      src: "/src/assets/sirkosi.png"
    },
    {
      id: 6,
      name: "Lorem Ipsum",
      position: "Frontend Developer",
      src: "/src/assets/sirkosi.png"
    },
    {
      id: 7,
      name: "Lorem Ipsum",
      position: "Backend Developer",
      src: "/src/assets/sirkosi.png"
    },
    {
      id: 8,
      name: "Lorem Ipsum",
      position: "DevOps Engineer",
      src: "/src/assets/sirkosi.png"
    },
    {
      id: 9,
      name: "Lorem Ipsum",
      position: "Marketing Lead",
      src: "/src/assets/sirkosi.png"
    },
    {
      id: 10,
      name: "Lorem Ipsum",
      position: "Sales Director",
      src: "/src/assets/sirkosi.png"
    },
    {
      id: 11,
      name: "Lorem Ipsum",
      position: "Customer Success",
      src: "/src/assets/sirkosi.png"
    },
    {
      id: 12,
      name: "Lorem Ipsum",
      position: "HR Manager",
      src: "/src/assets/sirkosi.png"
    },
    {
      id: 13,
      name: "Lorem Ipsum",
      position: "QA Specialist",
      src: "/src/assets/sirkosi.png"
    },
    {
      id: 14,
      name: "Lorem Ipsum",
      position: "Content Writer",
      src: "/src/assets/sirkosi.png"
    },
    {
      id: 15,
      name: "Lorem Ipsum",
      position: "UI Designer",
      src: "/src/assets/sirkosi.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Sticky Navbar */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}>
        <Navbar />
      </div>

      {/* Hero Section - Increased top padding for more space */}
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

          {/* Team Members Grid - 4 per row, 15 members total */}
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
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-primary/30 transition-all duration-300"
              >
                {/* Member Image */}
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
                  <img 
                    src={member.src} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center">
                            <div class="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                              <span class="text-gray-600 text-2xl font-light">${String.fromCharCode(65 + (index % 26))}</span>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                
                {/* Member Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {member.position}
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