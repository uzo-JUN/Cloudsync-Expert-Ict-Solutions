import chartIcon from "@/assets/chart-icon.svg"; // Make sure to import your image

const items = [
  "Excellence in tailored IT services", 
  "Elevate your brand sasstech", 
  "Achieve business goals solution", 
  "Innovation in every presence",
  "Perfect solution for success"
];

const MarqueeTicker = () => {
  return (
    <div className="bg-white text-blue py-4 overflow-hidden border-y border-gray-200">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span 
            key={i} 
            className="mx-8 text-sm font-medium flex items-center gap-2"
            style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
          >
            <img 
              src={chartIcon} 
              alt="chart icon" 
              className="w-5 h-5 object-contain" 
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;