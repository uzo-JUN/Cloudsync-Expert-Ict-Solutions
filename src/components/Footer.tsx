import { ArrowUp, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

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
              Empowering businesses worldwide with innovative IT solutions, cloud services, and digital transformation strategies.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 font-sans">The Company</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {["Home","About Us", "Our Team", "Partners", "Career", "Blog"].map((l) => (
                <li key={l}><button className="hover:opacity-100 transition-opacity">{l}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 font-sans">Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {["IT Management", "Web Development", "ICT Consultation", "Cloud Solutions", "Cybersecurity"].map((l) => (
                <li key={l}><button className="hover:opacity-100 transition-opacity">{l}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 font-sans">Contact</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>55 Main Street, 2nd block Malborne, Australia</li>
              <li>info@cloudsync.com</li>
              <li>+880 (123) 456 88</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-50">© 2026 CloudSync. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <button key={i} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
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
