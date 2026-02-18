const items = [
   "Excellence in tailored IT services", "Elevate your brand sasstech", "Achieve busness goals solution" , "Innovation in every presence","Perect solution for success"
];

const MarqueeTicker = () => {
  return (
    <div className="bg-white text-blue py-4 overflow-hidden border-y border-gray-200">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 text-sm font-medium flex items-center gap-2">
              <span className="text-gray-600 text-lg">📈</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;