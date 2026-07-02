import { motion } from "framer-motion";
import {
  FaUsers,
  FaGraduationCap,
  FaHandsHelping,
  FaHeartbeat,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const stats = [
  {
    icon: <FaUsers />,
    value: 10000,
    suffix: "+",
    label: "Lives Impacted",
  },
  {
    icon: <FaGraduationCap />,
    value: 500,
    suffix: "+",
    label: "Students Supported",
  },
  {
    icon: <FaHandsHelping />,
    value: 120,
    suffix: "+",
    label: "Community Projects",
  },
  {
    icon: <FaHeartbeat />,
    value: 50,
    suffix: "+",
    label: "Health Outreach Programs",
  },
];

const ImpactStats = () => {
  const [start, setStart] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setStart(true);
    }
  }, [inView]);

  // Animated counter hook
  const Counter = ({ value, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return;

      let startValue = 0;
      const duration = 1500;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        startValue += increment;

        if (startValue >= value) {
          startValue = value;
          clearInterval(timer);
        }

        setCount(Math.floor(startValue));
      }, 16);

      return () => clearInterval(timer);
    }, [start]);

    return (
      <span>
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <section
      ref={ref}
      className="py-24 bg-[#0B2C6B] relative overflow-hidden"
    >
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

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="text-[#C8102E] text-4xl">
                {stat.icon}
              </div>

              <h3 className="mt-6 text-5xl font-bold text-white">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>

              <p className="mt-3 text-gray-300 text-lg">
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