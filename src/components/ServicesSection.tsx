import { Monitor, Globe, MessageSquare, Smartphone, ArrowRight, Sparkles, Zap, Code, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Monitor,
    title: "IT Management Service",
    desc: "Comprehensive IT infrastructure management, monitoring, and optimization for seamless business operations. We keep your systems running 24/7.",
    color: "from-blue-500 to-cyan-400",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
    gradient: "from-blue-400 to-cyan-300",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    desc: "Custom, responsive websites built with modern technologies to elevate your digital presence and convert visitors into loyal customers.",
    color: "from-purple-500 to-pink-500",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50",
    gradient: "from-purple-400 to-pink-400",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications that deliver exceptional user experiences and help you connect with customers on the go.",
    color: "from-green-500 to-emerald-500",
    iconColor: "text-green-500",
    bgColor: "bg-green-50",
    gradient: "from-green-400 to-emerald-400",
  },
  {
    icon: MessageSquare,
    title: "ICT Consultation",
    desc: "Expert guidance on leveraging information and communication technologies for maximum business impact and digital transformation.",
    color: "from-orange-500 to-red-400",
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50",
    gradient: "from-orange-400 to-red-400",
  },
];

const ServicesSection = () => {
  // Function to handle navigation to Microsoft Form
  const handleGetStarted = () => {
    window.open("https://forms.office.com/r/r6LdLyPvCW", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Enhanced animated background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(99,102,241,0.05) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(236,72,153,0.05) 0%, transparent 40%)",
            "radial-gradient(circle at 80% 30%, rgba(236,72,153,0.05) 0%, transparent 40%), radial-gradient(circle at 20% 70%, rgba(99,102,241,0.05) 0%, transparent 40%)",
            "radial-gradient(circle at 40% 50%, rgba(34,197,94,0.05) 0%, transparent 40%), radial-gradient(circle at 70% 30%, rgba(249,115,22,0.05) 0%, transparent 40%)",
            "radial-gradient(circle at 20% 30%, rgba(99,102,241,0.05) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(236,72,153,0.05) 0%, transparent 40%)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-secondary/10 to-pink-500/10 blur-xl"
          style={{
            width: Math.random() * 200 + 100,
            height: Math.random() * 200 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container relative z-10">
        {/* Header with enhanced animation */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={20} className="text-secondary" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Rocket size={20} className="text-pink-500" />
            </motion.div>
            <p 
              className="text-secondary font-semibold text-sm uppercase tracking-[0.2em]"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              What We Offer
            </p>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={20} className="text-secondary" />
            </motion.div>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl font-bold text-primary mb-6 relative"
            style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
          >
            <span className="relative inline-block">
              Full-Cycle Custom
            </span>
            <br />
            <span className="bg-gradient-to-r from-secondary to-pink-500 bg-clip-text text-transparent">
              IT Development Services
            </span>
          </h2>
          
          <motion.p 
            className="text-muted-foreground text-lg"
            style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            From initial consultation to ongoing support, we deliver end-to-end IT solutions 
            tailored to your unique business needs with cutting-edge technology.
          </motion.p>
        </motion.div>

        {/* Services Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map(({ icon: Icon, title, desc, color, iconColor, bgColor, gradient }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
              className="group relative h-full"
            >
              {/* Animated gradient border */}
              <motion.div 
                className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500`}
                animate={{
                  background: [
                    `linear-gradient(45deg, ${color.split(' ')[1]}, ${color.split(' ')[3]})`,
                    `linear-gradient(135deg, ${color.split(' ')[1]}, ${color.split(' ')[3]})`,
                    `linear-gradient(225deg, ${color.split(' ')[1]}, ${color.split(' ')[3]})`,
                    `linear-gradient(315deg, ${color.split(' ')[1]}, ${color.split(' ')[3]})`,
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Main card */}
              <div className={`relative bg-white rounded-3xl p-8 h-full flex flex-col border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 20px 20px, ${iconColor} 2px, transparent 2px)`,
                    backgroundSize: '40px 40px'
                  }} />
                </div>

                {/* Icon section with enhanced animation */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                    <div className={`relative w-16 h-16 rounded-2xl ${bgColor} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500`}>
                      <Icon size={32} className={`${iconColor} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    
                    {/* Floating badge */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-secondary to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                    >
                      {i + 1}
                    </motion.div>
                  </motion.div>

                  {/* Decorative icon */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                  >
                    <Code size={24} className="text-gray-200 group-hover:text-gray-300 transition-colors duration-500" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 
                    className="text-2xl font-bold text-gray-800 mb-3 group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500"
                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  >
                    {title}
                  </h3>

                  <p 
                    className="text-gray-600 text-base leading-relaxed mb-6"
                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  >
                    {desc}
                  </p>
                </div>

                {/* Interactive features list (minimal) */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Innovative", "Reliable", "Scalable"].map((tag, idx) => (
                    <motion.span
                      key={idx}
                      className={`text-xs px-3 py-1.5 rounded-full bg-gradient-to-r ${gradient} bg-opacity-10 text-gray-700 font-medium`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Get Started button with Microsoft Form link */}
                <motion.button
                  onClick={handleGetStarted}
                  className="inline-flex items-center gap-3 text-secondary font-semibold text-base group/btn relative cursor-pointer"
                  style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  whileHover={{ x: 5 }}
                >
                  <span className="relative">
                    Get Started
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-pink-500 group-hover/btn:w-full transition-all duration-300"
                    />
                  </span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </motion.div>
                </motion.button>

                {/* Corner decorations */}
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    rotate: [0, 90, 180, 270, 360],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                >
                  <Zap size={20} className="text-secondary/30" />
                </motion.div>

                <motion.div
                  className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    rotate: [0, -90, -180, -270, -360],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                >
                  <Sparkles size={20} className="text-pink-500/30" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced decorative elements */}
        <motion.div
          className="flex justify-center mt-16 gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[1, 2, 3, 4, 5].map((_, i) => (
            <motion.div
              key={i}
              className="relative"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${
                i % 3 === 0 ? 'from-secondary to-pink-500' : 
                i % 3 === 1 ? 'from-blue-500 to-cyan-400' : 
                'from-orange-500 to-red-400'
              }`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating service tags */}
        <motion.div
          className="absolute -left-4 top-1/3 opacity-0 lg:opacity-100"
          animate={{
            x: [0, 10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100">
            <span className="text-sm font-medium text-secondary">✨ 24/7 Support</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute -right-4 bottom-1/3 opacity-0 lg:opacity-100"
          animate={{
            x: [0, -10, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100">
            <span className="text-sm font-medium text-pink-500">🚀 Fast Delivery</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;