import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import getintouchbgc from "@/assets/getintouch.jpg"; // Import the background image

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* First Section - With Background Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${getintouchbgc})`,
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
            {/* "GET IN TOUCH" - Big Bold Text */}
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-white mb-6"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              GET IN TOUCH
            </h1>
            
            {/* Optional subtitle */}
            <p 
              className="text-xl text-white/90 max-w-2xl mx-auto"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
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
                <MapPin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 
                className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200"
                style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
              >
                Visit Us
              </h3>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>                
                <div className="border-t text-xl border-blue-200 dark:border-blue-800/50 pt-3">
                  <p className="font-semibold text-sm text-xl text-blue-600 dark:text-blue-400 mb-1">USA</p>
                  <p>15500 Voss Rd, Ste 425,</p>
                  <p>Sugar Land, TX 77498</p>
                </div>
                <div className="text-xl">
                  <p className="font-semibold text-xl text-sm text-blue-600 dark:text-blue-400 mb-1">Africa and Middle East</p>
                  <p>Suite 1G, East-wing, Groundfloor,</p>
                  <p>Purity Business Mall, Abakaliki Road,</p>
                  <p>Enugu. 400211</p>
                </div>
              </div>
            </div>

            {/* Phone Box - Dark Green Theme */}
            <div className="bg-green-900/10 dark:bg-green-950/40 p-8 rounded-2xl text-center hover:shadow-xl transition-all border border-green-200 dark:border-green-800/50 backdrop-blur-sm">
              <div className="inline-flex p-4 bg-green-500/20 dark:bg-green-500/30 rounded-full mb-6">
                <Phone className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 
                className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200"
                style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
              >
                Call Us
              </h3>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
                <div className="border-t border-green-200 dark:border-green-800/50 pt-3">
                  <p className="font-semibold text-sm text-xl text-green-600 dark:text-green-400 mb-1">USA</p>
                  <p className="text-lg font-medium">+1 (214) 462-2824</p>
                </div>
               <div>
                  <p className="font-semibold text-sm text-xl text-green-600 dark:text-green-400 mb-1">Africa and Middle East</p>
                  <p className="text-lg font-medium">+234 814 168 1189</p>
                </div>
              </div>
            </div>

            {/* Email Box - Dark Purple Theme */}
            <div className="bg-purple-900/10 dark:bg-purple-950/40 p-8 rounded-2xl text-center hover:shadow-xl transition-all border border-purple-200 dark:border-purple-800/50 backdrop-blur-sm">
              <div className="inline-flex p-4 bg-purple-500/20 dark:bg-purple-500/30 rounded-full mb-6">
                <Mail className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 
                className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200"
                style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
              >
                Email Us
              </h3>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
                <div>
                  <p className="font-semibold text-xl text-sm text-purple-600 dark:text-purple-400 mb-1">GENERAL INQUIRIES</p>
                  <p className="text-base text-lg">support@cloudsyncc.com</p>
                </div>
                <div className="border-t border-purple-200 dark:border-purple-800/50 pt-3">
                  <p className="font-semibold text-xl text-sm text-purple-600 dark:text-purple-400 mb-1">SUPPORT</p>
                  <p className="text-base text-lg">info@cloudsyncc.com</p>
                </div>
              </div>
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
              <h2 
                className="text-3xl font-bold mb-8"
                style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
              >
                Contact Information
              </h2>
              
              {/* Office Address */}
              <div className="flex items-start gap-4 p-6 glass-card rounded-xl">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 
                    className="font-semibold text-lg mb-2"
                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  >
                    Office Address
                  </h3>
                  <div className="space-y-3 text-muted-foreground" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
                    <div>
                      <p className="font-medium text-primary">USA Office</p>
                      <p>15500 Voss Rd, Ste 425,</p>
                      <p>Sugar Land, TX 77498</p>
                      <p>+1 (214) 462-2824</p>
                    </div>
                    <div>
                      <p className="font-medium text-primary">Africa and Middle East Office</p>
                      <p>Suite 1G, East-wing, Groundfloor,</p>
                      <p>Purity Business Mall, Abakaliki Road,</p>
                      <p>Enugu. 400211</p>
                      <p>+234 814 168 1189</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 glass-card rounded-xl">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 
                    className="font-semibold text-lg mb-2"
                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  >
                    Email Us
                  </h3>
                  <div className="space-y-2 text-muted-foreground" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
                    <div>
                      <p className="font-medium text-primary">General Inquiries</p>
                      <p>info@cloudsyncc.com</p>
                    </div>
                    <div>
                      <p className="font-medium text-primary">Support</p>
                      <p>support@cloudsyncc.com</p>
                    </div>
                  </div>
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
              <h2 
                className="text-3xl font-bold mb-6"
                style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
              >
                Send us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                    >
                      First Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Emma"
                      style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                    />
                  </div>
                  <div>
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                    >
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Gregory"
                      style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  >
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="cloudsyncc@example.com"
                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  />
                </div>

                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  >
                    Subject
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="How can we help?"
                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  />
                </div>

                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  >
                    Message
                  </label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Talk to us..."
                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition"
                  style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
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