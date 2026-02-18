import foodImg from "@/assets/portfolio-food.png";
import mobileImg from "@/assets/portfolio-mobile.png";
import blockchainImg from "@/assets/portfolio-blockchain.png";
import storeImg from "@/assets/portfolio-store.png";

const projects = [
  { img: foodImg, title: "Food Recipes App", category: "Mobile App" },
  { img: mobileImg, title: "Mobile Application", category: "Dashboard" },
  { img: blockchainImg, title: "Blockchain Application", category: "Web App" },
  { img: storeImg, title: "Online Store", category: "E-Commerce" },
];

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-navy text-primary-foreground">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">Our Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold">Projects That Speak for Us</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-4 aspect-[4/5]">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h4 className="font-bold font-sans">{project.title}</h4>
              <p className="text-sm opacity-70">{project.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
