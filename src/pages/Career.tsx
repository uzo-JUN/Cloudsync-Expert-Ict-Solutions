import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Briefcase, Users, Clock, Globe, Award, Heart, Coffee, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import workbgc from "@/assets/work.jpg"; // Import the work background image

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll get back to you soon.");
    // Clear form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${workbgc})`, // Using work.jpg as background
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* "WORK WITH US" - Big Bold White Letters */}
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tight"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              WORK WITH US
            </h1>
            
            {/* Description Text - White */}
            <p 
              className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              At CloudSync, our strength lies in our people, a diverse team of innovators, engineers, and problem-solvers
              dedicated to building smarter, scalable tech solutions. Get to know the experts driving our vision forward
            </p>
          </motion.div>
        </div>
      </section>

      {/* Discuss Career Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* "DISCUSS CAREER" - Big Bold Black Letters */}
              <h2 
                className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight"
                style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
              >
                DISCUSS <br />CAREER
              </h2>
              
              {/* Description Text */}
              <p 
                className="text-xl text-gray-700 mb-4"
                style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
              >
                We are hiring domain experts across the globe. Join our team!
              </p>
            </motion.div>

            {/* Right side - Simplified Application Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <h3 
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
              >
                Let's Connect
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your full name"
                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  >
                    E-mail *
                  </label>
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
                </div>

                {/* What can we do together? */}
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  >
                    What can we do together? *
                  </label>
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
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-primary text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                  style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                >
                  Submit Application
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>

              {/* Note about privacy */}
              <p className="text-xs text-gray-500 mt-4 text-center"></p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;