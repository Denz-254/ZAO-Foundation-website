import {
  FaUsers,
  FaGraduationCap,
  FaHeartbeat,
  FaHandsHelping,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaUsers />,
    number: "10,000+",
    label: "Lives Impacted",
  },
  {
    icon: <FaGraduationCap />,
    number: "500+",
    label: "Students Supported",
  },
  {
    icon: <FaHeartbeat />,
    number: "50+",
    label: "Health Campaigns",
  },
  {
    icon: <FaHandsHelping />,
    number: "120+",
    label: "Community Projects",
  },
];

const Achievements = () => {
  return (
    <section className="py-24 bg-[#0B2C6B]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="text-center text-white"
            >
              <div className="text-4xl text-[#C8102E] flex justify-center">
                {item.icon}
              </div>

              <h3 className="mt-4 text-4xl font-bold">
                {item.number}
              </h3>

              <p className="mt-2 text-gray-300">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Achievements;