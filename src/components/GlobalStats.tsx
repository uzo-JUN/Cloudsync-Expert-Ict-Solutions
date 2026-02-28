const stats = [
  { value: "$29K", label: "Average Revenue Increase" },
  { value: "88%", label: "Client Retention Rate" },
  { value: "3x", label: "Faster Deployment" },
  { value: "150+", label: "Projects Completed" },
  { value: "99%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Support Available" },
];

const GlobalStats = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <p 
            className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2"
            style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
          >
            Global Impact
          </p>
          <h2 
            className="text-3xl md:text-4xl font-bold text-primary"
            style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
          >
            We Make Globally <span className="text-secondary">Growth & Increase</span> Revenue
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-secondary/10 rounded-2xl p-6 text-center hover:bg-secondary/20 transition-colors">
              <p 
                className="text-3xl md:text-4xl font-bold text-secondary"
                style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
              >
                {stat.value}
              </p>
              <p 
                className="text-sm text-muted-foreground mt-2"
                style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalStats;