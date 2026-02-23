import { motion } from "framer-motion";
import { Server, Shield, Cloud, Code, Globe, Zap, Smartphone, Monitor, ShoppingCart, Megaphone, Users, Lock, PenTool, Database, BarChart, Workflow, Briefcase, FileText, TrendingUp, UsersRound, Award, Sparkles, GitBranch, TestTube, LineChart, Cpu, ChevronRight 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import cloudbgc from "@/assets/cloudbgc.jpeg"; // Import the background image

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Software Development",
      description: "We design and build powerful, custom software solutions tailored to your business processes. Whether it's a desktop application, SaaS platform, or enterprise system, we deliver scalable and secure software that works."
    },
    {
      icon: <Monitor className="w-8 h-8 text-primary" />,
      title: "Website Design & Development",
      description: "Your website is your digital storefront. We create clean, responsive, and conversion-driven websites that reflect your brand and engage your audience—built for performance, usability, and growth."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Mobile App Development",
      description: "From concept to launch, we build user-friendly mobile applications for Android and iOS platforms. Our apps are fast, intuitive, and built to give users a seamless experience."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "IT Consultation",
      description: "Our team of experts works closely with you to evaluate your tech needs and craft strategic IT solutions that boost efficiency, reduce risk, and support long-term goals."
    },
    {
      icon: <Cloud className="w-8 h-8 text-primary" />,
      title: "Cloud Hosting & Management",
      description: "Secure, scalable, and fast cloud hosting solutions tailored to your business. We offer full deployment, management, and maintenance of cloud infrastructure to ensure your services run smoothly 24/7."
    },
    {
      icon: <Lock className="w-8 h-8 text-primary" />,
      title: "Cybersecurity Solutions",
      description: "Protect your digital assets with our proactive cybersecurity services. From risk assessments to real-time monitoring, we help you stay secure against threats and breaches."
    },
    {
      icon: <Megaphone className="w-8 h-8 text-primary" />,
      title: "Digital Marketing",
      description: "We help you grow your online presence with targeted digital marketing strategies including SEO, content creation, social media management, email marketing, and paid ads."
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-primary" />,
      title: "E-commerce Solutions",
      description: "Whether you're launching a new store or upgrading your current platform, we build e-commerce websites and systems that drive sales and enhance user experience."
    }
  ];

  // Individual Strategic Services (each in their own box)
  const strategicServices = [
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: "Data Analysis",
      description: "Transform raw data into actionable insights. Our data analysis services help you make informed decisions, identify trends, and uncover opportunities for growth."
    },
    {
      icon: <Workflow className="w-8 h-8 text-primary" />,
      title: "Project Automations",
      description: "Streamline your workflows with intelligent automation solutions. We help you reduce manual tasks, minimize errors, and boost productivity through custom automation."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "Product Management",
      description: "End-to-end product management services from ideation to launch. We help you define, build, and scale products that meet market needs and exceed user expectations."
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Research & Documentation",
      description: "Comprehensive research and technical documentation services. We ensure your projects are well-documented, compliant, and backed by thorough market and technical research."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Corporate Consulting",
      description: "Strategic business consulting to optimize operations, improve efficiency, and drive growth. We provide expert guidance on business processes, strategy, and digital transformation.",
      subServices: [
        "HR Support - Comprehensive HR solutions including recruitment, employee engagement, and performance management",
        "P.O.S.H. Training - Professional development and soft skills training in communication, leadership, and etiquette",
        "Data Optimization - Maximize data value through quality improvement, storage efficiency, and retrieval speed",
        "QA/Testing (Software) - Rigorous quality assurance and testing for bug-free, secure, optimal performance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section - With Background Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${cloudbgc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* "Our Services" - Main Heading */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-white mb-6">
              OUR SERVICES
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Innovative ICT Solutions That Power Your Business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategic & Consulting Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Build Something Great Together
            </h2>
            <p className="text-lg text-gray-600">
              Beyond technology, we offer strategic services to help your business thrive in every aspect.
            </p>
          </motion.div>

          {/* Strategic Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
            {strategicServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col h-full w-full ${
                  service.subServices ? "lg:col-span-1" : "max-w-sm"
                }`}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                  {service.description}
                </p>

                {/* Sub-services (only for Corporate Consulting) */}
                {service.subServices && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-primary mb-3 text-center">Specialized Services:</h4>
                    <ul className="space-y-2">
                      {service.subServices.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Get Started Button */}
                <Link to="/contact" className="mt-auto pt-4">
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-primary font-semibold gap-2 group/btn w-full justify-center"
                  >
                    Get Started
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;