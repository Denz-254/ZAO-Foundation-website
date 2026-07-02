import PageHero from "../components/common/PageHero";
import MissionVision from "../components/about/MissionVision";
import FounderMessage from "../components/about/FounderMessage";
import LeadershipTeam from "../components/about/LeadershipTeam";
import Achievements from "../components/about/Achievements";
import GetInvolved from "../components/home/GetInvolved";

const About = () => {
  return (
    <>
      <PageHero
        title="About ZAO Foundation"
        subtitle="Honoring a legacy of compassion, service, and community transformation."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80"
      />

      {/* OUR STORY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="relative">

              <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#C8102E]/10 rounded-full blur-3xl" />

              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"
                alt="ZAO Foundation Community Impact"
                className="rounded-3xl h-[550px] object-cover w-full shadow-2xl"
              />

              <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl px-6 py-4">
                <h3 className="text-3xl font-bold text-[#C8102E]">
                  10,000+
                </h3>

                <p className="text-gray-600">
                  Lives Positively Impacted
                </p>
              </div>

            </div>

            <div>

              <span className="uppercase tracking-[3px] text-[#C8102E] font-semibold">
                Our Story
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B2C6B] leading-tight">
                Building Hope Through Compassion And Action
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                The Zilpah Atieno Odak Foundation was established to
                honor and continue a legacy rooted in kindness,
                generosity, and unwavering support for vulnerable
                members of society.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Inspired by the values and life of Zilpah Atieno Odak,
                the foundation focuses on empowering individuals,
                strengthening families, and creating sustainable
                opportunities that uplift entire communities.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Through education initiatives, healthcare access,
                economic empowerment programs, and humanitarian
                assistance, we work alongside communities to create
                meaningful and lasting transformation.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-10">

                <div>
                  <h3 className="text-3xl font-bold text-[#0B2C6B]">
                    500+
                  </h3>
                  <p className="text-gray-600">
                    Students Supported
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-[#0B2C6B]">
                    120+
                  </h3>
                  <p className="text-gray-600">
                    Community Projects
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* MISSION VISION VALUES */}
      <MissionVision />

      {/* FOUNDER MESSAGE */}
      <FounderMessage />

      {/* WHY WE EXIST */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="uppercase tracking-[3px] text-[#C8102E] font-semibold">
              Why We Exist
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B2C6B]">
              Creating Opportunities For A Better Future
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              We believe every individual deserves access to education,
              healthcare, dignity, and opportunities that allow them to
              thrive. Our work focuses on addressing immediate needs
              while creating sustainable pathways toward long-term
              development and self-reliance.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            <div className="bg-[#F8F9FB] p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-[#0B2C6B]">
                Compassion
              </h3>

              <p className="mt-4 text-gray-600">
                Serving communities with empathy and respect.
              </p>
            </div>

            <div className="bg-[#F8F9FB] p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-[#0B2C6B]">
                Integrity
              </h3>

              <p className="mt-4 text-gray-600">
                Upholding transparency and accountability.
              </p>
            </div>

            <div className="bg-[#F8F9FB] p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-[#0B2C6B]">
                Empowerment
              </h3>

              <p className="mt-4 text-gray-600">
                Creating sustainable opportunities for growth.
              </p>
            </div>

            <div className="bg-[#F8F9FB] p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-[#0B2C6B]">
                Sustainability
              </h3>

              <p className="mt-4 text-gray-600">
                Building long-term solutions that endure.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <LeadershipTeam />

      {/* ACHIEVEMENTS */}
      <Achievements />

      {/* CTA */}
      <GetInvolved />
    </>
  );
};

export default About;