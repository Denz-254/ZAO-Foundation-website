const FounderMessage = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
            alt="Founder"
            className="rounded-3xl h-[550px] w-full object-cover"
          />

          <div>

            <span className="uppercase tracking-[3px] text-[#C8102E] font-semibold">
              Founder Message
            </span>

            <h2 className="mt-4 text-4xl font-bold text-[#0B2C6B]">
              Continuing A Legacy Of Service
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              ZAO Foundation was created to honor a legacy built on
              compassion, generosity, and community service.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our commitment is to create sustainable opportunities
              that empower individuals and families to achieve a
              better future.
            </p>

            <div className="mt-8">
              <h4 className="font-bold text-[#0B2C6B] text-xl">
                Zilpah Atieno Odak
              </h4>

              <p className="text-gray-500">
                Inspiration Behind The Foundation
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FounderMessage;