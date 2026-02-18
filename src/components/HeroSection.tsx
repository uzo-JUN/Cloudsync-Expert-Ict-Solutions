import heroImg from "@/assets/hero-vr.png";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="py-16 md:py-24">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary">
            Transform <span className="text-secondary">Your Business</span> Through{" "}
            <span className="text-secondary">Strategic</span> IT Solutions
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg">
            We provide cutting-edge technology solutions to help businesses grow, innovate, and stay ahead of the competition.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 py-6 text-base">
              Get Started
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-6 text-base border-primary text-primary">
              Learn More
            </Button>
          </div>
          <div className="flex items-center gap-2 pt-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} className={`${i <= 4 ? "fill-yellow text-yellow" : "fill-yellow/50 text-yellow/50"}`} />
              ))}
            </div>
            <span className="text-sm font-semibold text-primary">4.9</span>
            <span className="text-sm text-muted-foreground">Trustpilot Rating</span>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl overflow-hidden">
            <img src={heroImg} alt="VR headset professional" className="w-full h-auto object-cover rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
