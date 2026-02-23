import teamMember from "@/assets/team-member.png";
import { Lightbulb, Settings, TrendingUp } from "lucide-react";

const CircularProgress = ({ value }: { value: number }) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (value / 100) * circumference;
  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" stroke="hsl(var(--border))" strokeWidth="8" fill="none" />
        <circle cx="50" cy="50" r="45" stroke="hsl(var(--secondary))" strokeWidth="8" fill="none"
          strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" className="transition-all duration-1000" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-primary">{value}%</span>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary text-secondary-foreground rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold">88%</p>
                <p className="text-sm mt-1 opacity-80">Revenue Growth</p>
              </div>
              <div className="bg-primary text-primary-foreground rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold">99.9%</p>
                <p className="text-sm mt-1 opacity-80">Client Satisfaction</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={teamMember} alt="Team member" className="w-full h-64 object-cover rounded-2xl" />
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              Comprehensive IT Solution Growth & Efficiency
            </h2>

            <div className="flex items-start gap-6">
              <CircularProgress value={78} />
              <div className="flex flex-wrap gap-2 pt-2">
                {["Cybersecurity", "Infrastructure Management", "Operational Excellence"].map((tag) => (
                  <span key={tag} className="bg-secondary/10 text-secondary text-xs font-medium px-3 py-1.5 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4">
              {[
                { icon: Lightbulb, title: "Innovation at Our Core", desc: "Leveraging emerging technologies to keep you ahead." },
                { icon: Settings, title: "Simplifying Complexity", desc: "Making IT management seamless and efficient." },
                { icon: TrendingUp, title: "Empowering Growth", desc: "Scaling your business with robust digital solutions." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm font-sans">{title}</h4>
                    <p className="text-muted-foreground text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
