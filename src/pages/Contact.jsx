import PageHero from "../components/common/PageHero";

const Contact = () => {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            <div>
              <h2 className="text-4xl font-bold text-[#0B2C6B]">
                Get In Touch
              </h2>

              <div className="mt-8 space-y-6">
                <p><strong>Email:</strong> info@zaofoundation.org</p>
                <p><strong>Phone:</strong> +254 XXX XXX XXX</p>
                <p><strong>Location:</strong> Kenya</p>
              </div>
            </div>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full border rounded-xl px-5 py-4"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-xl px-5 py-4"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-xl px-5 py-4"
              />

              <textarea
                rows="6"
                placeholder="Message"
                className="w-full border rounded-xl px-5 py-4"
              />

              <button
                className="bg-[#C8102E] text-white px-8 py-4 rounded-xl"
              >
                Send Message
              </button>
            </form>

          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;