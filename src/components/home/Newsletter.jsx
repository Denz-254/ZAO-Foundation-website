const Newsletter = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-[#0B2C6B]">
          Stay Connected
        </h2>

        <p className="mt-6 text-gray-600">
          Subscribe to receive updates, stories of impact,
          upcoming events, and opportunities to get involved.
        </p>

        <form className="mt-10 flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border rounded-xl px-6 py-4 outline-none"
          />

          <button
            className="bg-[#C8102E] text-white px-8 py-4 rounded-xl"
          >
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
};

export default Newsletter;