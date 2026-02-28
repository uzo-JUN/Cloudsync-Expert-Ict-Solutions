import heroImg from "@/assets/hero-vr.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Sparkles, Zap, Rocket, ArrowRight, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom"; // Add this import

const HeroSection = () => {
  // Add this function to handle navigation to top
  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section id="home" className="py-16 md:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating icons */}
        {[
          { Icon: Zap, color: "text-yellow-400", delay: 0, top: "10%", left: "5%" },
          { Icon: Sparkles, color: "text-pink-400", delay: 1, top: "20%", right: "10%" },
          { Icon: Rocket, color: "text-secondary", delay: 2, bottom: "15%", left: "15%" },
          { Icon: Award, color: "text-yellow-500", delay: 3, top: "40%", right: "5%" },
          { Icon: TrendingUp, color: "text-green-400", delay: 4, bottom: "25%", right: "20%" },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: item.delay,
            }}
          >
            <item.Icon size={32} className={item.color} />
          </motion.div>
        ))}
      </div>

      <div className="container grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Sparkles size={16} className="text-secondary" />
            </motion.div>
            <span 
              className="text-xs font-semibold text-secondary"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              ✦ TRUSTED BY 500+ COMPANIES ✦
            </span>
          </motion.div>

          {/* Main heading with animated elements */}
          <div className="relative">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              Transform <motion.span 
                className="text-secondary inline-block"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Your Business
              </motion.span> Through{" "}
              <span className="text-secondary relative">
                Strategic
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondary to-pink-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1 }}
                />
              </span> IT Solutions
            </h1>
            
            {/* Floating emoji */}
            <motion.div
              className="absolute -top-8 -right-8 text-4xl"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              🚀
            </motion.div>
          </div>
          
          <motion.p 
            className="text-muted-foreground text-lg max-w-lg"
            style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            We provide cutting-edge technology solutions to help businesses grow, innovate, and stay ahead of the competition.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a 
              href="https://forms.office.com/r/r6LdLyPvCW" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started 
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight size={18} />
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
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/aboutus" onClick={handleNavigation}>
                <Button 
                  variant="outline" 
                  className="rounded-full px-8 py-6 text-base border-primary text-primary hover:bg-primary/5 transition-all duration-300 group"
                  style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                >
                  <span className="flex items-center gap-2">
                    Learn More
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Sparkles size={16} className="text-primary" />
                    </motion.span>
                  </span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-2 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Star 
                    size={18} 
                    className={`${i <= 4 ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"} transition-all duration-300`} 
                  />
                </motion.div>
              ))}
            </div>
            <motion.span 
              className="text-sm font-semibold text-primary"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              4.9
            </motion.span>
            <span 
              className="text-sm text-muted-foreground"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              ⭐ Trustpilot Rating
            </span>
          </motion.div>

          {/* Animated stats */}
          <motion.div 
            className="flex gap-6 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {[
              { value: "5000+", label: "Client Reviews", color: "text-secondary" },
              { value: "98%", label: "Satisfaction", color: "text-green-500" },
              { value: "24/7", label: "Support", color: "text-blue-500" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                whileHover={{ y: -5 }}
              >
                <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="rounded-3xl overflow-hidden relative group">
            <motion.img 
              src={heroImg} 
              alt="VR headset professional" 
              className="w-full h-auto object-cover rounded-3xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            

            {/* Pulsing rings */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-4 border-secondary/30"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </div>

          {/* Decorative elements around image */}
          <motion.div
            className="absolute -z-10 inset-0 bg-gradient-to-r from-secondary/20 to-pink-500/20 rounded-3xl blur-2xl"
            animate={{
              scale: [0.9, 1.1, 0.9],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;