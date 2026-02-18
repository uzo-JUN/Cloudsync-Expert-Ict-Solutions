import { Button } from "@/components/ui/button";

const steps = [
  { label: "Brainstorming", color: "bg-pink" },
  { label: "UX Research", color: "bg-secondary" },
  { label: "Product Designing", color: "bg-orange" },
  { label: "Front-End Development", color: "bg-secondary" },
  { label: "Usability Testing", color: "bg-pink" },
  { label: "Back-End Development", color: "bg-yellow" },
  { label: "SEO Optimization", color: "bg-secondary" },
  { label: "Digital Marketing", color: "bg-orange" },
];

const RoadmapSection = () => {
  return (
    <section className="py-20 bg-navy text-primary-foreground">
      <div className="container">
        <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">Working Process</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Working Roadmap</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-xl font-bold text-white shadow-lg`}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-sm font-medium opacity-90">{step.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <div>
            <p className="text-4xl md:text-5xl font-bold">2.3M+</p>
            <p className="text-sm opacity-70 mt-1">Projects Delivered Worldwide</p>
          </div>
          <Button className="mt-6 md:mt-0 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 py-6 text-base">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
