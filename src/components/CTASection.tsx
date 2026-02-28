import teamCollab from "@/assets/team-collab.png";
import usabilityImg from "@/assets/usability.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Zap, ArrowRight, CheckCircle, Star, Rocket } from "lucide-react";

const CTASection = () => {
  // Add this function to handle click
  const handleContactClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(99,102,241,0.03) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(236,72,153,0.03) 0%, transparent 40%)",
            "radial-gradient(circle at 80% 30%, rgba(236,72,153,0.03) 0%, transparent 40%), radial-gradient(circle at 20% 70%, rgba(99,102,241,0.03) 0%, transparent 40%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-secondary/5 to-pink-500/5 blur-2xl"
          style={{
            width: Math.random() * 200 + 100,
            height: Math.random() * 200 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Tech Solutions Button */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Button 
                className="bg-white hover:bg-gray-50 text-secondary border border-secondary/20 rounded-full px-6 py-5 text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 group"
                style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
              >
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="mr-2"
                >
                  <Sparkles size={16} className="text-secondary" />
                </motion.span>
                TECH SOLUTIONS
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  <Zap size={16} className="text-secondary" />
                </motion.span>
              </Button>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-primary leading-tight"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              The Complete Platform{' '}
              <span className="relative inline-block">
                <span className="text-secondary">To Power Your</span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondary to-pink-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>{' '}
              Operations
            </motion.h2>
            
            {/* Subtext */}
            <motion.p 
              className="text-muted-foreground text-lg leading-relaxed"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Cloudsync is your all-in-one ICT partner, offering integrated solutions that streamline workflows, enhance productivity, and support your entire digital infrastructure—empowering your business to operate smarter, faster, and more efficiently.
            </motion.p>

            {/* Feature bullets */}
            <motion.div 
              className="space-y-3 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {[
                "Streamlined Workflows & Automation",
                "24/7 Digital Infrastructure Support",
                "Scalable Solutions for Growing Businesses"
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
                    <CheckCircle size={14} className="text-secondary" />
                  </div>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link to="/contact" onClick={handleContactClick}>
                <Button 
                  className="bg-gradient-to-r from-secondary to-pink-500 hover:from-secondary/90 hover:to-pink-600 text-white rounded-full px-10 py-7 text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                  style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Today!
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
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
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              className="flex items-center gap-6 pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-secondary to-pink-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {i}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold text-gray-700 ml-2">5.0</span>
              </div>
              <span className="text-xs text-gray-500">2.3k+ reviews</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Main image with decorative elements */}
            <div className="relative group">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <motion.img 
                  src={teamCollab} 
                  alt="Team collaboration" 
                  className="w-full h-auto object-cover rounded-3xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Smaller image hanging at bottom left */}
              <motion.div
                className="absolute -bottom-8 -left-8 w-32 h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20"
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
              >
                <img 
                  src={usabilityImg} 
                  alt="Usability testing" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <motion.div
                  className="absolute top-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-xl flex items-center gap-2 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 2 }}
              >
                <Rocket size={20} className="text-secondary" />
                <span className="text-sm font-bold text-primary">98% Satisfaction</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center gap-2 z-10"
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Zap size={16} className="text-yellow-500" />
                <span className="text-xs font-medium">Lightning Fast</span>
              </motion.div>

              {/* Pulsing rings */}
              <motion.div
                className="absolute -inset-4 rounded-3xl border-4 border-secondary/20"
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

            {/* Decorative elements around image */}
            <motion.div
              className="absolute -z-10 inset-0 bg-gradient-to-r from-secondary/20 to-pink-500/20 rounded-3xl blur-3xl"
              animate={{
                scale: [0.9, 1.1, 0.9],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
            />

            {/* Stats cards floating */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-lg flex items-center gap-2 z-10"
              initial={{ scale: 0, y: 20 }}
              whileInView={{ scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4, type: "spring" }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                <span className="text-green-600 font-bold">24/7</span>
              </div>
              <div>
                <p className="text-xs text-gray-500">Support</p>
                <p className="text-sm font-bold text-primary">Always Online</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom decorative wave */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-pink-500 to-secondary opacity-20"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </section>
  );
};

export default CTASection;