import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHeart, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8102E]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0B2C6B]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 min-h-[calc(100vh-80px)] flex items-center">

        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-[#C8102E]" />
              <span className="uppercase tracking-[3px] text-xs md:text-sm text-gray-500 font-semibold">
                Honoring a Legacy. Changing Lives.
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-[#0B2C6B]">
              Together We Can
              <br />
              Build Stronger
              <br />
              <span className="text-[#C8102E]">
                Communities
              </span>
            </h1>

            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
              The Zilpah Atieno Odak Foundation is dedicated to
              transforming lives through education, healthcare,
              economic empowerment, humanitarian support, and
              sustainable community development.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/donate"
                className="bg-[#C8102E] hover:bg-red-700 text-white px-7 py-3 rounded-xl font-semibold flex items-center gap-3 transition"
              >
                <FaHeart />
                Donate Now
              </Link>

              <Link
                to="/about"
                className="border-2 border-[#0B2C6B] text-[#0B2C6B] hover:bg-[#0B2C6B] hover:text-white px-7 py-3 rounded-xl font-semibold flex items-center gap-3 transition"
              >
                Learn More
                <FaArrowRight />
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10">
              <div>
                <h3 className="text-2xl font-bold text-[#0B2C6B]">
                  10K+
                </h3>
                <p className="text-sm text-gray-500">
                  Lives Impacted
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0B2C6B]">
                  50+
                </h3>
                <p className="text-sm text-gray-500">
                  Community Projects
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0B2C6B]">
                  15+
                </h3>
                <p className="text-sm text-gray-500">
                  Years of Service
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"
                alt="ZAO Foundation Community Impact"
                className="w-full h-[350px] md:h-[500px] object-cover rounded-[30px] shadow-2xl"
              />

              <div className="absolute bottom-5 left-5 bg-white rounded-2xl shadow-xl px-5 py-4">
                <h3 className="font-bold text-2xl text-[#0B2C6B]">
                  10,000+
                </h3>
                <p className="text-sm text-gray-500">
                  Beneficiaries Reached
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;