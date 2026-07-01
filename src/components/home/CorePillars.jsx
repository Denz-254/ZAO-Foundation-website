import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaHeartbeat,
  FaHandsHelping,
  FaBriefcase,
} from "react-icons/fa";

const pillars = [
  {
    icon: <FaGraduationCap />,
    title: "Education Support",
    description:
      "Providing scholarships, learning materials, mentorship, and educational opportunities to vulnerable children and youth.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Healthcare Access",
    description:
      "Supporting medical outreach programs, health awareness initiatives, and access to essential healthcare services.",
  },
  {
    icon: <FaBriefcase />,
    title: "Economic Empowerment",
    description:
      "Equipping families and youth with skills, entrepreneurship opportunities, and sustainable income-generating projects.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Humanitarian Aid",
    description:
      "Responding to community needs through food distribution, emergency relief, and social support programs.",
  },
];

const CorePillars = () => {
  return (
    <section className="py-20 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="text-[#C8102E] font-semibold uppercase tracking-[3px]">
            What We Do
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B2C6B]">
            Our Core Pillars
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Through strategic programs and community-driven initiatives,
            ZAO Foundation works to create sustainable change and improve
            the lives of vulnerable individuals and families.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#C8102E]/10 flex items-center justify-center text-[#C8102E] text-3xl">
                {pillar.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0B2C6B]">
                {pillar.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CorePillars;