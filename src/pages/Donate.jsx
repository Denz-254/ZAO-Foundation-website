import PageHero from "../components/common/PageHero";

const Donate = () => {
  return (
    <>
      <PageHero
        title="Support Our Mission"
        subtitle="Every contribution helps transform lives and communities."
        image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-white shadow-lg rounded-3xl p-10">

            <h2 className="text-3xl font-bold text-[#0B2C6B]">
              Make A Donation
            </h2>

            <form className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl px-5 py-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl px-5 py-4"
              />

              <input
                type="number"
                placeholder="Donation Amount"
                className="w-full border rounded-xl px-5 py-4"
              />

              <textarea
                rows="5"
                placeholder="Message"
                className="w-full border rounded-xl px-5 py-4"
              />

              <button
                className="w-full bg-[#C8102E] text-white py-4 rounded-xl font-semibold"
              >
                Donate Now
              </button>

            </form>

          </div>

        </div>
      </section>
    </>
  );
};

export default Donate;