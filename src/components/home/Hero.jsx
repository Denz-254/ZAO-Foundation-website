import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaArrowRight,
  FaHandsHelping,
  FaSeedling,
  FaUsers,
  FaHeartbeat,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-white">

      {/* BACKGROUND IMAGE (SOFT + TRANSPARENT, NOT DARK) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80"
          alt="Children Background"
          className="w-full h-full object-cover opacity-25"
        />

        {/* Soft white + brand fade (no dark overlay) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-white/10" />
      </div>

      {/* Decorative soft shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8102E]/5 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0B2C6B]/5 rounded-full blur-3xl z-0" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-0 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tagline */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#C8102E]" />
              <span className="uppercase tracking-[3px] text-xs md:text-sm text-gray-500 font-semibold">
                Honoring a Legacy. Changing Lives.
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-[#0B2C6B]">
              Together, We Can
              <br />
              Create{" "}
              <span className="text-[#C8102E]">Lasting Change.</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
              The Zilpah Atieno Odak Foundation (ZAO Foundation) empowers
              vulnerable communities through sustainable programs in education,
              healthcare, economic empowerment, and humanitarian support.
            </p>

            {/* CTA BUTTONS (MOBILE FULL WIDTH) */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">

              <Link
                to="/donate"
                className="w-full sm:w-auto justify-center bg-[#C8102E] hover:bg-red-700 text-white px-8 py-3.5 rounded-xl font-semibold flex items-center gap-3 transition shadow-lg"
              >
                <FaHeart />
                Donate Now
              </Link>

              <Link
                to="/about"
                className="w-full sm:w-auto justify-center border-2 border-[#0B2C6B] text-[#0B2C6B] hover:bg-[#0B2C6B] hover:text-white px-8 py-3.5 rounded-xl font-semibold flex items-center gap-3 transition"
              >
                Learn More
                <FaArrowRight />
              </Link>

            </div>

          </motion.div>

          {/* RIGHT IMAGE (ZILPAH) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* soft glow */}
            <div className="absolute w-[320px] h-[320px] bg-[#C8102E]/10 blur-3xl rounded-full" />

            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80"
              alt="Zilpah Odak"
              className="relative w-[300px] md:w-[380px] h-[420px] object-cover rounded-[40px] shadow-xl border border-gray-100"
            />
          </motion.div>

        </div>

        {/* VALUES / STATS (CENTERED) */}
        <div className="mt-14 pt-8 border-t border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">

            <div className="flex flex-col items-center">
              <FaHandsHelping className="text-[#C8102E] text-xl mb-2" />
              <h4 className="font-bold text-[#0B2C6B] text-sm">Community</h4>
              <p className="text-xs text-gray-500">Driven</p>
            </div>

            <div className="flex flex-col items-center">
              <FaSeedling className="text-[#C8102E] text-xl mb-2" />
              <h4 className="font-bold text-[#0B2C6B] text-sm">Sustainable</h4>
              <p className="text-xs text-gray-500">Impact</p>
            </div>

            <div className="flex flex-col items-center">
              <FaUsers className="text-[#C8102E] text-xl mb-2" />
              <h4 className="font-bold text-[#0B2C6B] text-sm">Transparency</h4>
              <p className="text-xs text-gray-500">Accountable</p>
            </div>

            <div className="flex flex-col items-center">
              <FaHeartbeat className="text-[#C8102E] text-xl mb-2" />
              <h4 className="font-bold text-[#0B2C6B] text-sm">Legacy</h4>
              <p className="text-xs text-gray-500">of Love</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;