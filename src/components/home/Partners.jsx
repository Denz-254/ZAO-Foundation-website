const partners = [
  "UNICEF",
  "Red Cross",
  "World Vision",
  "Safaricom",
  "Equity Bank",
  "Community Partners",
];

const Partners = () => {
  return (
    <section className="py-20 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <span className="uppercase tracking-[3px] text-[#C8102E] font-semibold">
            Partnerships
          </span>

          <h2 className="text-4xl font-bold text-[#0B2C6B] mt-4">
            Working Together For Greater Impact
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl h-28 flex items-center justify-center shadow-sm font-bold text-[#0B2C6B]"
            >
              {partner}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partners;