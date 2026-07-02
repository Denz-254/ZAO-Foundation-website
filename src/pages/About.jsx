import PageHero from "../components/common/PageHero";

const About = () => {
  return (
    <>
      <PageHero
        title="About ZAO Foundation"
        subtitle="Honoring a legacy of compassion, service, and community transformation."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"
              alt=""
              className="rounded-3xl h-[500px] object-cover w-full"
            />

            <div>
              <h2 className="text-4xl font-bold text-[#0B2C6B]">
                Our Story
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                The Zilpah Atieno Odak Foundation was established to
                continue a legacy of generosity, compassion, and
                empowerment for vulnerable communities.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Through education, healthcare, economic empowerment,
                and humanitarian support, we create opportunities
                for lasting change.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default About;