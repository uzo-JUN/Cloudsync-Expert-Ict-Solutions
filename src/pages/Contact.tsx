import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* First Section - Medium Grey Background with Bold Text */}
      <section className="bg-gray-100 dark:bg-gray-800 py-32 md:py-40">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* "GET IN TOUCH" - Big Bold Text */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
              GET IN TOUCH
            </h1>
            
            {/* Optional subtitle */}
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 Horizontal Info Boxes Section - With Darker Backgrounds */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {/* Address Box - Dark Blue Theme */}
            <div className="bg-blue-900/10 dark:bg-blue-950/40 p-8 rounded-2xl text-center hover:shadow-xl transition-all border border-blue-200 dark:border-blue-800/50 backdrop-blur-sm">
              <div className="inline-flex p-4 bg-blue-500/20 dark:bg-blue-500/30 rounded-full mb-6">
                <MapPin className="w-8 h-8 text-black-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black-800">Visit Us</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                55 Main Street, 2nd block<br />
                Melbourne, Australia
              </p>
            </div>

            {/* Phone Box - Dark Green Theme */}
            <div className="bg-green-900/10 dark:bg-green-950/40 p-8 rounded-2xl text-center hover:shadow-xl transition-all border border-green-200 dark:border-green-800/50 backdrop-blur-sm">
              <div className="inline-flex p-4 bg-green-500/20 dark:bg-green-500/30 rounded-full mb-6">
                <Phone className="w-8 h-8 text-black-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black-800 ">Call Us</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                +880 (123) 456 88<br />
                Mon-Fri, 9am-6pm
              </p>
            </div>

            {/* Email Box - Dark Purple Theme */}
            <div className="bg-purple-900/10 dark:bg-purple-950/40 p-8 rounded-2xl text-center hover:shadow-xl transition-all border border-purple-200 dark:border-purple-800/50 backdrop-blur-sm">
              <div className="inline-flex p-4 bg-purple-500/20 dark:bg-purple-500/30 rounded-full mb-6">
                <Mail className="w-8 h-8 text-black-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black-800 dark:text-purple-300">Email Us</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                support@cloudsyncc.com<br />
                info@cloudsyncc.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-background border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              {/* Office Address */}
              <div className="flex items-start gap-4 p-6 glass-card rounded-xl">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Office Address</h3>
                  <p className="text-muted-foreground">
                    55 Main Street, 2nd block<br/>
                    Melbourne, Australia
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 glass-card rounded-xl">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-muted-foreground">
                    info@cloudsyncc.com<br />
                    support@cloudsyncc.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-6 glass-card rounded-xl">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">
                    +880 (123) 456 88<br />
                    +880 (123) 456 89
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Emma"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Gregory"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="cloudsync@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Talk to us..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;