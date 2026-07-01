import { motion } from "framer-motion";
import {
  FaUsers,
  FaGraduationCap,
  FaHandsHelping,
  FaHeartbeat,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    value: "10,000+",
    label: "Lives Impacted",
  },
  {
    icon: <FaGraduationCap />,
    value: "500+",
    label: "Students Supported",
  },
  {
    icon: <FaHandsHelping />,
    value: "120+",
    label: "Community Projects",
  },
  {
    icon: <FaHeartbeat />,
    value: "50+",
    label: "Health Outreach Programs",
  },
];

const ImpactStats = () => {
  return (
    <section className="py-24 bg-[#0B2C6B] relative overflow-hidden">

      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#C8102E]/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[3px] text-[#ffb3c1] font-semibold">
            Our Impact
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Transforming Lives Through Action
          </h2>

          <p className="text-gray-300 mt-6 leading-relaxed">
            Every project, every partnership, and every contribution
            helps create meaningful and lasting change in communities.
          </p>

        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center"
            >

              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#C8102E] flex items-center justify-center text-white text-2xl">
                {stat.icon}
              </div>

              <h3 className="mt-6 text-4xl font-bold text-white">
                {stat.value}
              </h3>

              <p className="mt-2 text-gray-300">
                {stat.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ImpactStats;