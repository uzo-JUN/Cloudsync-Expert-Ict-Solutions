import whyTeam from "@/assets/why-choose-team.png";
import { Users, Heart } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-3xl overflow-hidden">
          <img src={whyTeam} alt="Our team at work" className="w-full h-auto object-cover rounded-3xl" />
        </div>

        <div className="space-y-6">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
            Expertise, Innovation & Client-First Approach
          </h2>
          <p className="text-muted-foreground">
            We combine deep technical expertise with a commitment to understanding your business goals, delivering solutions that truly make an impact.
          </p>

          <div className="grid gap-4 pt-4">
            {[
              { icon: Users, title: "Experienced Professionals", desc: "Our team brings decades of combined experience in IT services and digital transformation." },
              { icon: Heart, title: "Client-Centric Approach", desc: "Every solution is tailored to your unique needs, with ongoing support and collaboration." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-4 bg-background rounded-xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary font-sans">{title}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
