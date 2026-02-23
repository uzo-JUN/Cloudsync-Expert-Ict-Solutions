import { ArrowUp, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Company links with their corresponding paths
  const companyLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Our Team", path: "/teams" },
    { name: "Services", path: "/services" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" }
  ];

  // Services links with their corresponding paths
  const serviceLinks = [
    { name: "Data Analysis", path: "/services#data-analysis" },
    { name: "Project Automations", path: "/services#project-automations" },
    { name: "Product Management", path: "/services#product-management" },
    { name: "Research & Documentation", path: "/services#research-documentation" },
    { name: "Corporate Consulting", path: "/services#corporate-consulting" }
  ];

  const handleServiceClick = (path) => {
    // Navigate to services page and scroll to top
    window.location.href = path;
    // The page will load at the top by default
  };

  return (
    <footer className="bg-navy-dark text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-sm">C</div>
              <span className="font-serif text-xl font-bold">CloudSync</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              At CloudSync, our strength lies in our people, a diverse team of innovators, engineers, and problem-solvers
              dedicated to building smarter, scalable tech solutions. Get to know the experts driving our vision forward.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 font-sans">The Company</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    onClick={scrollToTop}
                    className="hover:opacity-100 transition-opacity inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 font-sans">Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    onClick={scrollToTop}
                    className="hover:opacity-100 transition-opacity inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 font-sans">Contact</h4>
            <div className="space-y-4 text-sm opacity-70">
              {/* Nigeria Office */}
              <div>
                <p className="font-semibold text-secondary mb-1">Nigeria Office</p>
                <p>Suite 1G, East-wing, Groundfloor,</p>
                <p>Purity Business Mall, Abakaliki Road,</p>
                <p>Enugu, Nigeria. 400211</p>
              </div>

              {/* USA Office */}
              <div>
                <p className="font-semibold text-secondary mb-1">USA Office</p>
                <p>15500 Voss Rd, Ste 425,</p>
                <p>Sugar Land, TX 77498</p>
              </div>

              {/* Nigeria Phone */}
              <div>
                <p className="font-semibold text-secondary mb-1">Nigeria</p>
                <p>+234 814 168 1189</p>
              </div>

              {/* USA Phone */}
              <div>
                <p className="font-semibold text-secondary mb-1">USA</p>
                <p>+1 (214) 462-2824</p>
              </div>

              {/* Email */}
              <div>
                <p className="font-semibold text-secondary mb-1">Email</p>
                <p>info@cloudsyncc.com</p>
                <p>support@cloudsyncc.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-50">© 2026 CloudSync. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <button 
                key={i} 
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                onClick={() => window.open('https://' + ['facebook.com', 'twitter.com', 'instagram.com'][i], '_blank')}
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
          <button onClick={scrollToTop} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-secondary/90 transition-colors">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;