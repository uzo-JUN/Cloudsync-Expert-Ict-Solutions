import whyTeam from "@/assets/why-choose-team.png";
import { Users, Heart, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Add this import

const WhyChooseUs = () => {
  // Function to handle navigation to top
  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-muted/20 to-muted/30 relative overflow-hidden">
      {/* Subtle animated background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(99,102,241,0.03) 0%, transparent 40%)",
            "radial-gradient(circle at 80% 70%, rgba(236,72,153,0.03) 0%, transparent 40%)",
            "radial-gradient(circle at 40% 50%, rgba(99,102,241,0.03) 0%, transparent 40%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column - Image with animated elements */}
        <motion.div 
          className="relative rounded-3xl overflow-hidden group"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <img 
              src={whyTeam} 
              alt="Our team at work" 
              className="w-full h-auto object-cover rounded-3xl group-hover:scale-105 transition-transform duration-700"
            />

            {/* Pulsing ring */}
            <motion.div
              className="absolute -inset-2 rounded-3xl border-4 border-secondary/20"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Section label with bouncing sparkle */}
          <div className="flex items-center gap-2">
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles size={18} className="text-secondary" />
            </motion.div>
            <p 
              className="text-secondary font-semibold text-sm uppercase tracking-wider"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              Why Choose Us
            </p>
          </div>
          
          {/* Heading with animated underline */}
          <div className="relative">
            <h2 
              className="text-3xl md:text-4xl font-bold text-primary leading-tight"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              Expertise, Innovation & Client-First Approach
            </h2>
            <motion.div
              className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-secondary to-pink-500 rounded-full"
              animate={{
                width: ["0%", "20%", "15%", "20%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          
          <p 
            className="text-muted-foreground"
            style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
          >
            We combine deep technical expertise with a commitment to understanding your business goals, delivering solutions that truly make an impact.
          </p>

          {/* Feature cards with bouncing buttons */}
          <div className="grid gap-4 pt-4">
            {[
              { 
                icon: Users, 
                title: "Experienced Professionals", 
                desc: "Our team brings decades of combined experience in IT services and digital transformation.", 
                buttonText: "Meet the Team", 
                buttonColor: "from-blue-500 to-cyan-400",
                linkTo: "/teams" // Add link path
              },
              { 
                icon: Heart, 
                title: "Client-Centric Approach", 
                desc: "Every solution is tailored to your unique needs, with ongoing support and collaboration.", 
                buttonText: "Our Process", 
                buttonColor: "from-pink-500 to-rose-400",
                linkTo: "/aboutus" // Add link path (you can change this)
              },
            ].map(({ icon: Icon, title, desc, buttonText, buttonColor, linkTo }, idx) => (
              <motion.div 
                key={title} 
                className="flex gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-border hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} className="text-secondary" />
                </div>
                <div className="flex-1">
                  <h4 
                    className="font-bold text-primary mb-1"
                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  >
                    {title}
                  </h4>
                  <p 
                    className="text-muted-foreground text-sm mb-3"
                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  >
                    {desc}
                  </p>
                  
                  {/* Bouncing button - Now using Link component for internal navigation */}
                  <Link to={linkTo} onClick={handleNavigation}>
                    <motion.button
                      className={`inline-flex items-center gap-2 text-xs font-semibold bg-gradient-to-r ${buttonColor} text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer`}
                      animate={{
                        y: [0, -4, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.3,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {buttonText}
                      <ArrowRight size={14} />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative bouncing elements */}
      <motion.div
        className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-secondary/5 blur-xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-20 right-20 w-24 h-24 rounded-full bg-pink-500/5 blur-xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
};

export default WhyChooseUs;