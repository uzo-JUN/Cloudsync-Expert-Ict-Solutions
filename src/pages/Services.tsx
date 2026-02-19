import { motion } from "framer-motion";
import { Server, Shield, Cloud, Code, Globe, Zap, Smartphone, Monitor, ShoppingCart, Megaphone, Users, Lock, PenTool, Database 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom"; // Add this import

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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section - Grey Background */}
      <section className="relative bg-gray-100 dark:bg-gray-800 py-32 md:py-40 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* "Our Services" - Main Heading in Black */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
              OUR SERVICES
            </h1>
            
            {/* Subtitle - Grey Text */}
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Innovative ICT Solutions That Power Your Business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Let's Build Something Great Together Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Build Something Great Together
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No matter your industry or business size, Cloudsync is here to bring your vision to life. 
              Let's talk about how we can support your goals with cutting-edge ICT solutions.
            </p>
          </motion.div>

          {/* 8 Service Boxes - Centered with 4 per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 flex flex-col h-full w-full max-w-sm"
              >
                {/* Icon - Centered with mx-auto */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow text-center">
                  {service.description}
                </p>

                {/* Get Started Button - Now Links to Contact Page */}
                <Link to="/contact" className="mt-auto">
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