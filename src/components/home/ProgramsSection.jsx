import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const programs = [
  {
    title: "Education Support",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    description:
      "Providing scholarships, learning resources, mentorship, and educational opportunities.",
    path: "/programs/education",
  },
  {
    title: "Healthcare Access",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    description:
      "Expanding access to medical care, awareness campaigns, and community outreach services.",
    path: "/programs/healthcare",
  },
  {
    title: "Economic Empowerment",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    description:
      "Creating sustainable opportunities through skills development and entrepreneurship.",
    path: "/programs/economic-empowerment",
  },
  {
    title: "Humanitarian Aid",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    description:
      "Supporting vulnerable families through relief programs and emergency assistance.",
    path: "/programs/humanitarian-aid",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ProgramsSection = () => {
  return (
    <section className="py-24 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[3px] text-[#C8102E] font-semibold">
            Our Programs
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B2C6B]">
            Driving Change Through Action
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Our programs are designed to address critical community needs
            while creating sustainable solutions for long-term development
            and empowerment.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mt-16"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group"
            >
              <Link
                to={program.path}
                className="block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 h-full"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl">                  <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#0B2C6B]">
                    {program.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="mt-6 flex items-center gap-3 text-[#C8102E] font-semibold group-hover:gap-4 transition-all">
                    Explore Program
                    <FaArrowRight />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/programs"
            className="inline-flex items-center gap-3 bg-[#0B2C6B] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#081f4d] transition"
          >
            View All Programs
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;