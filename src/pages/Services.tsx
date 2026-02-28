import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import netShape from "@/assets/net-shape.png";
import icon1 from "@/assets/seamless-icon1.png";
import icon2 from "@/assets/seamless-icon2.png";
import icon3 from "@/assets/seamless-icon3.png";
import icon4 from "@/assets/seamless-icon4.png";
import icon5 from "@/assets/seamless-icon5.png";
import icon6 from "@/assets/seamless-icon6.png";
import drivenImg from "@/assets/driven-img.png";
import data from "@/assets/data.jpg";
import automate from "@/assets/automate.jpg";
import management from "@/assets/management.jpg";
import research from "@/assets/research.jpg";
import corporateconsulting from "@/assets/corporateconsulting.jpg";
import projectmanagement from "@/assets/projectmanagement.jpeg";
import industriesImg from "@/assets/industries.jpg";
import duowork from "@/assets/duowork.png";
import work from "@/assets/work.png";
import servingImg from "@/assets/serving.jpg";
import TopBanner from "@/components/TopBanner";
import { BarChart3,Workflow, Code2, BookOpen, Building2,  Shield, GraduationCap,Wallet,Truck, HeartPulse,ShoppingCart,HardHat,Sparkles, ArrowRight, Zap,Globe, Cloud, Database, Lock,Cpu,Gauge,Layers,Rocket,Star,Bot, Brain, LineChart,Users,Target,Trophy,Crown,X,CheckCircle,Clock,TrendingUp,Award
} from "lucide-react";

// Import the 7 view images (all using the same view.png - you can replace with different images later)
import view1 from "@/assets/view.png";
import view2 from "@/assets/view.png";
import view3 from "@/assets/view.png";
import view4 from "@/assets/view.png";
import view5 from "@/assets/view.png";
import view6 from "@/assets/view.png";
import view7 from "@/assets/view.png";

const Services = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const buttonRefs = useRef<(HTMLDivElement | null)[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);
  const siteName = "CloudSync"; 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    checkMobile();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Handle button interactions
  const handleButtonMouseEnter = (index: number) => {
    setHoveredService(index);
  };

  const handleButtonMouseLeave = () => {
    // Don't hide immediately - will be handled by modal mouse leave
  };

  const handleModalMouseLeave = () => {
    setHoveredService(null);
  };

  // Handle mobile click
  const handleButtonClick = (index: number) => {
    setHoveredService(index);
  };

  // Function to handle navigation to top
  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  // Floating icons for hero section
  const floatingIcons = [
    { Icon: Zap, color: "text-yellow-500", delay: 0, size: 24 },
    { Icon: Globe, color: "text-blue-500", delay: 0.5, size: 32 },
    { Icon: Cloud, color: "text-sky-400", delay: 1, size: 28 },
    { Icon: Database, color: "text-green-500", delay: 1.5, size: 36 },
    { Icon: Lock, color: "text-purple-500", delay: 2, size: 30 },
    { Icon: Cpu, color: "text-red-500", delay: 2.5, size: 26 },
    { Icon: Gauge, color: "text-orange-500", delay: 3, size: 34 },
    { Icon: Layers, color: "text-indigo-500", delay: 3.5, size: 28 },
    { Icon: Bot, color: "text-emerald-500", delay: 4, size: 32 },
    { Icon: Brain, color: "text-pink-500", delay: 4.5, size: 30 },
    { Icon: LineChart, color: "text-cyan-500", delay: 5, size: 26 },
    { Icon: Rocket, color: "text-amber-500", delay: 5.5, size: 38 },
  ];

  // Services data with short detailed explanation
  const services = [
    {
      icon: icon1,
      lucideIcon: BarChart3,
      title: "Data Analysis",
      description: "Transform raw data into actionable insights. Our data analysis services help you make informed decisions, identify trends, and uncover opportunities for growth.",
      shortDetail: "We use advanced analytics tools including Python, R, and Tableau to process complex datasets. Our team of data scientists uncovers hidden patterns, predicts future trends, and delivers data-driven decisions that give you a competitive edge in your market.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      features: ["Predictive Modeling", "Data Visualization", "Business Intelligence"],
      image: data,
    },
    {
      icon: icon2,
      lucideIcon: Workflow,
      title: "Project Automations",
      description: "Streamline your workflows with custom automation solutions. We integrate with popular tools like Zapier, Make, and custom API connections.",
      shortDetail: "Our automation experts analyze your current workflows and design custom solutions that integrate seamlessly with your existing tools. We create efficient, error-free processes that save time, reduce operational costs, and let your team focus on high-value tasks.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      features: ["Workflow Optimization", "API Integration", "Process Automation"],
      image: automate,
    },
    {
      icon: icon3,
      lucideIcon: Code2,
      title: "Software Product Management",
      description: "From concept to launch, we guide your software products to market success. Our product managers ensure your vision becomes reality.",
      shortDetail: "Our product managers guide your software from ideation to market success. We handle roadmap planning, sprint management, stakeholder communication, and ensure your product meets user needs and business goals with precision and efficiency.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      features: ["Product Strategy", "Agile Development", "Market Launch"],   
      image: management,
    },
    {
      icon: icon4,
      lucideIcon: BookOpen,
      title: "Research and Documentation",
      description: "Comprehensive technical writing and research services to support your development process and ensure clear communication.",
      shortDetail: "We create detailed system documentation, user manuals, API references, and conduct thorough market research to support your development process. Our clear, comprehensive documentation ensures smooth onboarding and reduced support tickets.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      features: ["Technical Writing", "Market Research", "API Documentation"],
      image: research,
    },
    {
      icon: icon5,
      lucideIcon: Building2,
      title: "Corporate Consulting",
      description: "Strategic IT consulting for businesses of all sizes. We help you align technology with business goals and optimize infrastructure.",
      shortDetail: "We provide strategic IT consulting for businesses of all sizes, helping you align technology with business goals, optimize IT infrastructure, and navigate digital transformation with confidence. Our experts deliver practical solutions that drive real business value.",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      features: ["IT Strategy", "Digital Transformation", "Infrastructure Optimization"],
      image: corporateconsulting,
    },
    {
      icon: icon6,
      lucideIcon: Shield,
      title: "IT Project Management",
      description: "Certified project managers delivering your IT projects on time and within budget using Agile and Waterfall methodologies.",
      shortDetail: "Our certified project managers use Agile and Waterfall methodologies to deliver your IT projects on time and within budget. We handle resource allocation, risk management, and stakeholder communication to ensure successful project outcomes every time.",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      features: ["Agile/Waterfall", "Risk Management", "Resource Planning"],
      image: projectmanagement,
    },
  ];

  // Array of 7 view images
  const viewImages = [view1, view2, view3, view4, view5, view6, view7];

  // Industries data
  const industries = [
    {
      icon: GraduationCap,
      title: "EDUCATION",
      subtext: "We provide tailored technology solutions across multiple sectors, helping businesses thrive in the digital age",
      content: "E-learning platforms, virtual classrooms, student management systems, and interactive learning tools for educational institutions.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Wallet,
      title: "FINANCE",
      subtext: "",
      content: "Delivering secure, scalable fintech systems, digital wallets, and transaction monitoring tools.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Truck,
      title: "LOGISTICS AND TRANSPORTATION",
      subtext: "",
      content: "Powering logistics with fleet tracking, route optimization, and delivery management platforms.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: HeartPulse,
      title: "HEALTHCARE",
      subtext: "",
      content: "Enabling clinics and hospitals with telehealth, health records systems, and patient engagement tools.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: ShoppingCart,
      title: "E-COMMERCE AND RETAIL",
      subtext: "",
      content: "Building robust online stores, inventory systems, and seamless payment integrations.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: HardHat,
      title: "CONSTRUCTION AND REAL ESTATE",
      subtext: "",
      content: "Providing visualization tools, project management software, and digital property marketplaces.",
      color: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-foreground overflow-x-hidden" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
      <TopBanner />
      
      {/* Sticky Navbar with glass effect */}
      <motion.div 
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-xl shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
      </motion.div>

      {/* Let's Build Something Great Together Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold">
                ✦ What We Offer ✦
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
              Let's Build Something 
              <span className="relative inline-block mx-2">
                Great
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
              Together
            </h2>
            <p className="text-lg text-muted-foreground" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
              Beyond technology, we offer strategic services to help your business thrive in every aspect.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const LucideIcon = service.lucideIcon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  {/* Card with gradient border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />
                  
                  <div className={`relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-2xl h-full flex flex-col ${service.bgColor}`}>
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-xl blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300`} />
                        <img 
                          src={service.icon} 
                          alt={service.title} 
                          className="w-16 h-16 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300" 
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 flex-1 group-hover:text-primary transition-colors" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-6 flex-1" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
                      {service.description}
                    </p>

                    {/* Get Started Button */}
                    <div 
                      className="mt-auto"
                      ref={el => buttonRefs.current[index] = el}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          to="/contact"
                          onClick={handleNavigation}
                          className={`inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r ${service.color} text-white px-4 py-3 rounded-xl font-semibold shadow-lg cursor-pointer relative overflow-hidden group/btn`}
                          onMouseEnter={() => handleButtonMouseEnter(index)}
                          style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                        >
                          <span className="relative z-10">Get Started</span>
                          <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                          
                          {/* Shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              scale: [0, 1, 0.8, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + item.delay,
              repeat: Infinity,
              ease: "linear",
              delay: item.delay,
            }}
          >
            <item.Icon 
              className={`${item.color} opacity-10`} 
              size={item.size}
              strokeWidth={1.5}
            />
          </motion.div>
        ))}

        {/* Net Shape */}
        <motion.div 
          className="absolute inset-0 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 2 }}
        >
          <motion.img 
            src={netShape} 
            alt="Net Shape"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'contrast(1.2) brightness(1.1)' }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 mb-6 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              <span className="relative inline-block">
                Our Services
                <motion.span
                  className="absolute -top-6 -right-6 text-4xl"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Crown className="text-yellow-500" size={48} />
                </motion.span>
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              Innovative ICT Solutions That Power Your Business
            </motion.p>

            {/* Decorative line */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto mt-8 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
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
      </section>

      {/* Modal for Get Started Button Hover - Different for Software Product Management */}
      <AnimatePresence>
        {hoveredService !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setHoveredService(null)}
            />
            
            {hoveredService === 2 ? (
              /* Special modal for Software Product Management with 7 stacked images */
              <motion.div
                ref={modalRef}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                onClick={(e) => e.stopPropagation()}
                onMouseLeave={handleModalMouseLeave}
              >
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[80vh]">
                  {/* Header with gradient */}
                  <div className={`h-3 bg-gradient-to-r ${services[hoveredService].color}`} />
                  
                  <div className="p-8 relative overflow-y-auto max-h-[calc(80vh-3rem)]">
                    {/* Close button */}
                    <button
                      onClick={() => setHoveredService(null)}
                      className="absolute top-6 right-6 p-3 hover:bg-gray-100 rounded-full transition-colors z-10"
                    >
                      <X className="w-6 h-6 text-gray-500" />
                    </button>

                    <div className="mb-8 text-center">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
                        {services[hoveredService].title} Portfolio
                      </h3>
                      <p className="text-gray-600">Browse through our collection of 7 featured projects</p>
                    </div>

                    {/* Stacked images vertically - one under each other */}
                    <div className="space-y-6 mb-8">
                      {viewImages.map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                          }}
                          className="flex items-center gap-6 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:border-primary/30 transition-all duration-300"
                        >
                          {/* Image on the left */}
                          <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 shadow-md">
                            <img 
                              src={image} 
                              alt={`Project ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
        
                          </div>
                          
                          {/* Text on the right */}
                          <div className="flex-1">
                            
                            <p className="text-sm text-gray-700 leading-relaxed break-words" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
                              eduuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuggggggggggggg
                            </p>
                            
                            {/* Decorative dots */}
                            <div className="flex gap-1 mt-2">
                              {[1, 2, 3].map((i) => (
                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action buttons - exactly as in original */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        to="/contact"
                        onClick={handleNavigation}
                        className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r ${services[hoveredService].color} text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 group`}
                        style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                      >
                        Get Started Now
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <button
                        onClick={() => setHoveredService(null)}
                        className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300"
                        style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                      >
                        Close
                      </button>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
                </div>
              </motion.div>
            ) : (
              /* Original modal for all other services */
              <motion.div
                ref={modalRef}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed inset-x-0 top-1 z-50 w-[90vw] max-w-4xl mx-auto"
                onClick={(e) => e.stopPropagation()}
                onMouseLeave={handleModalMouseLeave}
              >
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  {/* Header with gradient - taller */}
                  <div className={`h-3 bg-gradient-to-r ${services[hoveredService].color}`} />
                  
                  <div className="p-8 md:p-10 relative">
                    {/* Close button */}
                    <button
                      onClick={() => setHoveredService(null)}
                      className="absolute top-6 right-6 p-3 hover:bg-gray-100 rounded-full transition-colors z-10"
                    >
                      <X className="w-6 h-6 text-gray-500" />
                    </button>

                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                      {/* Left side - Larger Image */}
                      <motion.div 
                        className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
                        animate={{
                          scale: [1, 1.02, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${services[hoveredService].color} rounded-full blur-3xl opacity-30`} />
                        <img 
                          src={services[hoveredService].image} 
                          alt={services[hoveredService].title}
                          className="relative z-10 w-full h-full object-contain"
                        />
                        
                        {/* Floating sparkles */}
                        <motion.div
                          className="absolute -top-4 -right-4"
                          animate={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                        >
                          <Sparkles className={`w-8 h-8 text-${services[hoveredService].color.split(' ')[0].replace('from-', '')}-500`} />
                        </motion.div>
                      </motion.div>

                      {/* Right side - Content */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          >
                            <Star className={`w-8 h-8 text-${services[hoveredService].color.split(' ')[0].replace('from-', '')}-600`} fill="currentColor" />
                          </motion.div>
                          <h3 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
                            {services[hoveredService].title}
                          </h3>
                        </div>

                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
                          {services[hoveredService].shortDetail}
                        </p>

                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                          <Link
                            to="/contact"
                            onClick={handleNavigation}
                            className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r ${services[hoveredService].color} text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 group`}
                            style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                          >
                            Get Started Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                          <button
                            onClick={() => setHoveredService(null)}
                            className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300"
                            style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
                </div>
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, gray 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }} />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold">
                ✦ Where We Excel ✦
              </span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
              INDUSTRIES WE SERVE
            </h2>
            <p className="text-xl text-muted-foreground" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
              We provide tailored technology solutions across multiple sectors, helping
              businesses thrive in the digital age
            </p>
          </motion.div>

          {/* Industries Grid */}
          <div className="space-y-16">
            {/* Row 1: Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className={`bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-1`}>
                  <div className="bg-white rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 bg-blue-100 rounded-xl">
                        <GraduationCap className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>{industries[0].title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>{industries[0].content}</p>
                  </div>
                </div>
              </div>
              
              <motion.div
                className="order-1 lg:order-2 relative h-[400px] rounded-2xl overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={industriesImg} 
                  alt="Education Industry"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </motion.div>
            </motion.div>

            {/* Row 2: Finance & Logistics */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <motion.div
                className="relative h-[400px] rounded-2xl overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={servingImg} 
                  alt="Finance and Logistics"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </motion.div>

              <div className="space-y-6">
                {/* Finance */}
                <div className={`bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-1`}>
                  <div className="bg-white rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 bg-green-100 rounded-xl">
                        <Wallet className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>{industries[1].title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>{industries[1].content}</p>
                  </div>
                </div>

                {/* Logistics */}
                <div className={`bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-1`}>
                  <div className="bg-white rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 bg-orange-100 rounded-xl">
                        <Truck className="w-8 h-8 text-orange-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>{industries[2].title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>{industries[2].content}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Row 3: Healthcare & E-commerce */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <div className="space-y-6 order-2 lg:order-1">
                {/* Healthcare */}
                <div className={`bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-1`}>
                  <div className="bg-white rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 bg-pink-100 rounded-xl">
                        <HeartPulse className="w-8 h-8 text-pink-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>{industries[3].title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>{industries[3].content}</p>
                  </div>
                </div>

                {/* E-commerce */}
                <div className={`bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl p-1`}>
                  <div className="bg-white rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 bg-purple-100 rounded-xl">
                        <ShoppingCart className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>{industries[4].title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>{industries[4].content}</p>
                  </div>
                </div>
              </div>

              <motion.div
                className="relative h-[500px] rounded-2xl overflow-hidden group order-1 lg:order-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={duowork} 
                  alt="Healthcare and E-commerce"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </motion.div>
            </motion.div>

            {/* Row 4: Construction */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <motion.div
                className="relative h-[400px] rounded-2xl overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={work} 
                  alt="Construction Industry"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </motion.div>

              <div className={`bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl p-1`}>
                <div className="bg-white rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-amber-100 rounded-xl">
                      <HardHat className="w-8 h-8 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>{industries[5].title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>{industries[5].content}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Drive Image Section */}
      <section className="w-full bg-white">
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <motion.img 
            src={drivenImg} 
            alt="Drive your business" 
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1 }}
            whileInView={{ scale: 1.1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
              Let's discuss how our services can help you achieve your goals
            </p>
            <Link
              to="/contact"
              onClick={handleNavigation}
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg group"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              Contact Us 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
        
      <Footer />
    </div>
  );
};

export default Services;