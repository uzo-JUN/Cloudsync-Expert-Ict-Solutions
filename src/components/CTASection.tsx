import teamCollab from "@/assets/team-collab.png";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider">Tech Solutions</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
            The Complete Platform <span className="text-secondary">To Power Your</span> Operations
          </h2>
          <p className="text-muted-foreground">
            Streamline your workflows, automate repetitive tasks, and unlock new levels of productivity with our comprehensive IT platform. Built for businesses of all sizes.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-6 text-base">
            Contact Today!
          </Button>
        </div>
        <div className="rounded-3xl overflow-hidden">
          <img src={teamCollab} alt="Team collaboration" className="w-full h-auto object-cover rounded-3xl" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
