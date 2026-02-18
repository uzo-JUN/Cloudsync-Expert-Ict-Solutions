import { Monitor, Globe, MessageSquare, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "IT Management Service",
    desc: "Comprehensive IT infrastructure management, monitoring, and optimization for seamless business operations.",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    desc: "Custom, responsive websites built with modern technologies to elevate your digital presence.",
  },
  {
    icon: MessageSquare,
    title: "ICT Consultation",
    desc: "Expert guidance on leveraging information and communication technologies for maximum business impact.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Full-Cycle Custom IT Development Services
          </h2>
          <p className="text-muted-foreground">
            From initial consultation to ongoing support, we deliver end-to-end IT solutions tailored to your unique business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="bg-background rounded-2xl p-8 hover:shadow-xl transition-shadow group border border-border">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                <Icon size={28} className="text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 font-sans">{title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{desc}</p>
              <button className="flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
