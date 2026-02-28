import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Briefcase, Users, Clock, Globe, Award, Heart, Coffee, Home, Sparkles, Rocket, Zap, Target, TrendingUp, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import workbgc from "@/assets/work.jpg"; // Import the work background image

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeField, setActiveField] = useState<string | null>(null);
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  // Floating elements for hero section
  const floatingElements = [
    { Icon: Briefcase, delay: 0, top: "15%", left: "10%", color: "text-blue-400" },
    { Icon: Users, delay: 1, top: "70%", right: "15%", color: "text-green-400" },
    { Icon: Clock, delay: 2, bottom: "20%", left: "20%", color: "text-purple-400" },
    { Icon: Globe, delay: 3, top: "30%", right: "10%", color: "text-cyan-400" },
    { Icon: Award, delay: 4, bottom: "40%", right: "25%", color: "text-yellow-400" },
    { Icon: Heart, delay: 5, top: "60%", left: "15%", color: "text-pink-400" },
    { Icon: Coffee, delay: 6, bottom: "15%", right: "30%", color: "text-amber-400" },
    { Icon: Home, delay: 7, top: "45%", left: "25%", color: "text-indigo-400" },
  ];

  // Benefits data
  const benefits = [
    { icon: Rocket, title: "Fast Growth", desc: "Accelerate your career with rapid advancement opportunities", color: "from-blue-500 to-cyan-500" },
    { icon: Users, title: "Great Culture", desc: "Collaborative, inclusive environment with amazing teammates", color: "from-purple-500 to-pink-500" },
    { icon: Globe, title: "Remote First", desc: "Work from anywhere with our global remote-friendly policy", color: "from-green-500 to-emerald-500" },
    { icon: TrendingUp, title: "Learning Budget", desc: "Annual budget for courses, conferences, and certifications", color: "from-orange-500 to-red-500" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Custom cursor effect - optional, can remove if not wanted */}
      <motion.div
        className="fixed w-8 h-8 rounded-full border-2 border-primary/30 pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: cursorVariant === "hover" ? 1.5 : 1,
          borderColor: cursorVariant === "hover" ? "#4B6BFB" : "rgba(75, 107, 251, 0.3)",
        }}
        transition={{ type: "spring", mass: 0.1, stiffness: 100 }}
      />
      
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            backgroundImage: `url(${workbgc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </motion.div>

        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full z-10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Floating Icons */}
        {floatingElements.map((item, i) => (
          <motion.div
            key={i}
            className="absolute z-10 hidden lg:block"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: item.delay,
            }}
          >
            <item.Icon size={28} className={item.color} />
          </motion.div>
        ))}

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20"
            >
              <Sparkles size={18} className="text-yellow-300" />
              <span className="text-white/90 text-sm font-medium">Join the future of tech</span>
              <Sparkles size={18} className="text-yellow-300" />
            </motion.div>

            {/* Main Heading with split text effect */}
            <div className="overflow-hidden">
              <motion.h1 
                className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tight"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
              >
                WORK <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">WITH</span> US
              </motion.h1>
            </div>
            
            {/* Description with typing effect style */}
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              At CloudSync, our strength lies in our people, a diverse team of innovators, engineers, and problem-solvers
              dedicated to building smarter, scalable tech solutions.
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <motion.div
                  className="w-1 h-3 bg-white rounded-full mt-2"
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Discuss Career Section */}
      <section className="py-20 bg-gray-100 relative overflow-hidden">
        {/* Decorative elements */}
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Text Content with new animations */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Animated icon row */}
              <motion.div 
                className="flex gap-3 mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {[Briefcase, Users, Target].map((Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                  >
                    <Icon size={20} className="text-primary" />
                  </motion.div>
                ))}
              </motion.div>

              <h2 
                className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight relative"
                style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
              >
                DISCUSS <br />CAREER
                {/* Animated underline */}
                <motion.span
                  className="absolute -bottom-2 left-0 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "120px" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
              </h2>
              
              <motion.p 
                className="text-xl text-gray-700 mb-4"
                style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                We are hiring domain experts across the globe. Join our team!
              </motion.p>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {[
                  { value: "10+", label: "Countries" },
                  { value: "+", label: "Open Roles" },
                  { value: "∞", label: "Possibilities" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="text-center"
                  >
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right side - Form with new animations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
            >
              {/* Gradient border animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0"
                animate={{
                  opacity: [0, 0.1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              
              <div className="relative z-10">
                <h3 
                  className="text-2xl font-bold mb-6 flex items-center gap-2"
                  style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                >
                  Let's Connect
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Sparkles size={20} className="text-primary" />
                  </motion.div>
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onHoverStart={() => setActiveField("name")}
                    onHoverEnd={() => setActiveField(null)}
                  >
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                    >
                      Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                        placeholder="Your full name"
                        style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                      />
                      {activeField === "name" && (
                        <motion.div
                          layoutId="field-indicator"
                          className="absolute -right-2 -top-2 w-3 h-3 bg-green-500 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring" }}
                        />
                      )}
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onHoverStart={() => setActiveField("email")}
                    onHoverEnd={() => setActiveField(null)}
                  >
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                    >
                      E-mail *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                        style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                      />
                      {activeField === "email" && (
                        <motion.div
                          layoutId="field-indicator"
                          className="absolute -right-2 -top-2 w-3 h-3 bg-green-500 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        />
                      )}
                    </div>
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onHoverStart={() => setActiveField("message")}
                    onHoverEnd={() => setActiveField(null)}
                  >
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                    >
                      What can we do together? *
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your ideas, how you'd like to contribute ? "
                        style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                      />
                      {activeField === "message" && (
                        <motion.div
                          layoutId="field-indicator"
                          className="absolute -right-2 -top-2 w-3 h-3 bg-green-500 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        />
                      )}
                    </div>
                  </motion.div>

                  {/* Submit Button with ripple effect */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all relative overflow-hidden group"
                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  >
                    <span className="relative z-10">Submit Application</span>
                    <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    
                    {/* Ripple effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;