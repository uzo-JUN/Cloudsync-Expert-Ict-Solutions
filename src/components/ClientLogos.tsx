import { useEffect, useState } from "react";

const logos = [
  { name: "Netflix", color: "#E50914" },      // Netflix Red
  { name: "Framer", color: "#0055FF" },       // Framer Blue
  { name: "Reddit", color: "#FF4500" },       // Reddit Orange
  { name: "Tesla", color: "#E82127" },        // Tesla Red
  { name: "Uber", color: "#000000" },         // Uber Black
  { name: "Spotify", color: "#1DB954" },      // Spotify Green
  { name: "Slack", color: "#4A154B" }         // Slack Purple
];

const ClientLogos = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="py-10 border-y border-border overflow-hidden">
      <div className="animate-marquee-reverse flex whitespace-nowrap">
        {[...logos, ...logos].map((logo, i) => (
          <span 
            key={i} 
            className="mx-12 text-2xl font-bold tracking-wider select-none"
            style={{ 
              fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
              color: logo.color,
              opacity: isMobile ? 0.9 : 0.6,
              filter: isMobile ? 'brightness(1.2)' : 'none',
              transition: 'opacity 0.2s ease, filter 0.3s ease'
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.opacity = '1';
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.opacity = '0.6';
              }
            }}
          >
            {logo.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;