import { motion } from "framer-motion";
import { ChevronDown, Search, HelpCircle, Mail, Phone, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom"; // Add this import
import faqbgc from "@/assets/faqbgc.jpg"; // Make sure this image exists in your assets folder

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Updated FAQ Categories and Questions as requested
  const faqCategories = [
    {
      category: "Frequently Asked Questions",
      questions: [
        {
          q: "What services does Cloudsync offer?",
          a: "Cloudsync offers a comprehensive range of ICT solutions including:",
          list: [
            "IT Consulting & Training - Expert guidance and professional development programs to optimize your technology strategy",
            "Infrastructure & Security - Robust infrastructure setup and comprehensive security solutions to protect your digital assets",
            "Tech-Enabled Marketing & Support - Data-driven marketing strategies and ongoing technical support to grow your business"
          ]
        },
        {
          q: "How long does it take to complete a project?",
          a: "Project timelines vary depending on the scope and complexity. After an initial consultation, we'll provide you with a clear timeline and milestones."
        },
        {
          q: "Can I get a custom solution for my business?",
          a: "Absolutely! We specialize in tailored solutions designed to meet your unique business needs and goals."
        },
        {
          q: "Do you offer ongoing support after project delivery?",
          a: "Yes, we provide full post-deployment support, including maintenance, updates, troubleshooting, and performance optimization."
        },
        {
          q: "What industries do you work with?",
          a: "We serve businesses across multiple industries, including finance, healthcare, education, logistics, retail, and more."
        },
        {
          q: "How do I get started with Cloudsync?",
          a: "Simply reach out through our contact page or request a free consultation. We'll guide you through the next steps to kick off your project."
        }
      ]
    }
  ];

  // Flatten all questions for search
  const allQuestions = faqCategories.flatMap(category => 
    category.questions.map(q => ({ ...q, category: category.category }))
  );

  // Filter questions based on search term
  const filteredQuestions = searchTerm.trim() === "" 
    ? [] 
    : allQuestions.filter(item => 
        item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.a.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${faqbgc})`,
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
            {/* Main Heading */}
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              Hello, what can we<br />help you find?
            </h1>
            
            {/* Description Text */}
            <p 
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              At Cloudsync, we understand that clarity is key. Our FAQ section answers common questions 
              about our services, processes, timelines, support, and more—helping you make informed 
              decisions with confidence.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="max-w-2xl mx-auto mt-12"
            >
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search Results (if searching) */}
      {searchTerm.trim() !== "" && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              Search Results {filteredQuestions.length > 0 ? `(${filteredQuestions.length})` : ""}
            </h2>
            
            {filteredQuestions.length > 0 ? (
              <div className="space-y-4">
                {filteredQuestions.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="p-6">
                      <p 
                        className="text-sm text-primary font-semibold mb-2"
                        style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                      >
                        {item.category}
                      </p>
                      <h3 
                        className="text-lg font-bold mb-3"
                        style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                      >
                        {item.q}
                      </h3>
                      {item.list ? (
                        <div className="text-gray-600" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
                          <p>{item.a}</p>
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                            {item.list.map((listItem, i) => (
                              <li key={i} style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>{listItem}</li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <p className="text-gray-600" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>{item.a}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p 
                  className="text-xl text-gray-600"
                  style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                >
                  No results found for "{searchTerm}"
                </p>
                <p 
                  className="text-gray-500 mt-2"
                  style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                >
                  Try different keywords or browse the questions below
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAQ Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              Frequently Asked Questions
            </h2>
            <p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              Find answers to common questions about our services, process, and partnership.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="space-y-4">
                  {category.questions.map((item, qIndex) => {
                    const globalIndex = `${catIndex}-${qIndex}`;
                    return (
                      <div key={qIndex} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                        >
                          <span 
                            className="font-semibold text-gray-900 text-lg pr-4"
                            style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                          >
                            {item.q}
                          </span>
                          <ChevronDown 
                            className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                              openItems[globalIndex] ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        
                        {openItems[globalIndex] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="px-6 pb-5 text-gray-600 border-t border-gray-100"
                          >
                            <p 
                              className="mt-3"
                              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                            >
                              {item.a}
                            </p>
                            {item.list && (
                              <ul className="list-disc pl-5 mt-3 space-y-2">
                                {item.list.map((listItem, i) => (
                                  <li 
                                    key={i} 
                                    className="text-gray-600"
                                    style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                                  >
                                    {listItem}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section with Contact Button */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              Still Have Questions?
            </h2>
            <p 
              className="text-xl text-gray-600 mb-8"
              style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
            >
              Have questions? We've got answers. Our team is here to help you with any additional questions you may have about our services, process, or how we can work together.
            </p>
            
            {/* Contact Us Button */}
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white font-semibold py-4 px-10 rounded-full text-lg hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;   