import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, Rocket, Zap, ArrowRight, Star, Award } from "lucide-react";

const steps = [
  { label: "Brainstorming", color: "bg-pink", icon: "💡" },
  { label: "UX Research", color: "bg-secondary", icon: "🔍" },
  { label: "Product Designing", color: "bg-orange", icon: "🎨" },
  { label: "Front-End Development", color: "bg-secondary", icon: "⚛️" },
  { label: "Usability Testing", color: "bg-pink", icon: "🧪" },
  { label: "Back-End Development", color: "bg-yellow", icon: "⚙️" },
  { label: "SEO Optimization", color: "bg-secondary", icon: "🚀" },
  { label: "Digital Marketing", color: "bg-orange", icon: "📱" },
];

const RoadmapSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-navy via-navy to-purple-900 text-primary-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating sparkles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Star className="text-yellow-300" size={16 + i} />
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10">
        {/* Header with playful animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-pink-400" size={24} />
            </motion.div>
            <p 
              className="text-secondary font-semibold text-sm uppercase tracking-wider"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              Working Process
            </p>
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-pink-400" size={24} />
            </motion.div>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 relative inline-block"
            style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
          >
            Our Working Roadmap
            <motion.span
              className="absolute -top-6 -right-6"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Rocket className="text-secondary" size={40} />
            </motion.span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            At Cloudsync, we follow a structured, transparent roadmap that guides every project from concept to completion. 
          </p>
        </motion.div>

        {/* Steps with playful animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="flex flex-col items-center text-center gap-3 group"
            >
              <div className="relative">
                <motion.div
                  className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center text-2xl font-bold text-white shadow-xl relative z-10`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {step.icon}
                </motion.div>
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/30 blur-md"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center text-xs font-bold text-navy"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  {i + 1}
                </motion.div>
              </div>
              <p 
                className="text-sm font-medium text-white group-hover:text-secondary transition-colors"
                style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
              >
                {step.label}
              </p>
              
              {/* Connector line (except last) */}
              {i < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute translate-x-12 w-12 h-0.5 bg-gradient-to-r from-white/30 to-transparent"
                  style={{ left: `${(i + 1) * 25}%`, top: '40px' }}
                  animate={{
                    scaleX: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats and CTA with playful elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/20 bg-white/5 backdrop-blur-sm rounded-2xl p-8"
        >
          <div className="flex items-center gap-6">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Award className="text-yellow-300" size={48} />
            </motion.div>
            <div>
              <motion.p 
                className="text-5xl md:text-6xl font-bold flex items-center gap-2"
                style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                2.3M+
                <Zap className="text-yellow-300 inline" size={32} />
              </motion.p>
              <p 
                className="text-sm opacity-80 mt-1"
                style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
              >
                Projects Delivered Worldwide 🌍
              </p>
            </div>
          </div>
          
          <motion.a 
            href="https://forms.office.com/r/r6LdLyPvCW" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="mt-6 md:mt-0 bg-gradient-to-r from-secondary to-pink-500 hover:from-secondary/90 hover:to-pink-600 text-white rounded-full px-10 py-7 text-lg font-bold shadow-xl relative overflow-hidden group"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Now! 
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </Button>
          </motion.a>
        </motion.div>

        {/* Fun floating emoji */}
        <motion.div
          className="absolute bottom-10 right-10 text-4xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          🎯
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapSection;