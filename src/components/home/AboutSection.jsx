import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            {/* Decorative Shape */}
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-[#C8102E]/10 rounded-full blur-2xl" />

            <img
  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80"
  alt="ZAO Foundation"
  className="rounded-[30px] w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover shadow-2xl"
/>

            {/* Floating Card */}
<div className="hidden md:block absolute bottom-6 right-6 bg-white rounded-2xl shadow-xl p-6 max-w-[220px]">
              <h3 className="text-3xl font-bold text-[#C8102E]">
                15+
              </h3>

              <p className="text-gray-600 text-sm">
                Years of empowering communities and transforming lives.
              </p>

            </div>

          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span className="text-[#C8102E] uppercase tracking-[3px] font-semibold">
              About Us
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B2C6B] leading-tight">
              Continuing a Legacy of Compassion and Service
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              The Zilpah Atieno Odak Foundation was established to honor
              a legacy of kindness, generosity, and unwavering support
              for vulnerable communities.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Through education, healthcare, humanitarian assistance,
              and economic empowerment programs, we strive to create
              opportunities that uplift individuals and families for
              generations to come.
            </p>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">

              <div className="bg-[#F8F9FB] p-6 rounded-2xl">
                <h3 className="font-bold text-[#0B2C6B] text-xl">
                  Our Mission
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  To empower communities through sustainable programs
                  that improve lives and create lasting impact.
                </p>
              </div>

              <div className="bg-[#F8F9FB] p-6 rounded-2xl">
                <h3 className="font-bold text-[#0B2C6B] text-xl">
                  Our Vision
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  A future where every individual has access to
                  opportunities, dignity, and hope.
                </p>
              </div>

            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 mt-10 bg-[#0B2C6B] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#081f4d] transition"
            >
              Learn More About Us
              <FaArrowRight />
            </Link>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;