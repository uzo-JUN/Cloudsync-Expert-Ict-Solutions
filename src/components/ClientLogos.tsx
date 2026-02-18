const logos = ["Netflix", "Framer", "Reddit", "Tesla", "Uber", "Spotify", "Slack"];

const ClientLogos = () => {
  return (
    <section className="py-10 border-y border-border overflow-hidden">
      <div className="animate-marquee-reverse flex whitespace-nowrap">
        {[...logos, ...logos].map((logo, i) => (
          <span key={i} className="mx-12 text-2xl font-bold text-muted-foreground/40 tracking-wider select-none">
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;
