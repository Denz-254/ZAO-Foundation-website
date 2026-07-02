import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa";

const items = [
  {
    icon: <FaBullseye />,
    title: "Our Mission",
    text: "Empowering vulnerable communities through education, healthcare, economic empowerment, and humanitarian support.",
  },
  {
    icon: <FaEye />,
    title: "Our Vision",
    text: "A society where every individual has equal opportunities, dignity, hope, and the resources needed to thrive.",
  },
  {
    icon: <FaHandshake />,
    title: "Our Values",
    text: "Compassion, integrity, accountability, inclusion, transparency, and sustainable impact.",
  },
];

const MissionVision = () => {
  return (
    <section className="py-24 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B2C6B]">
            What Guides Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm"
            >
              <div className="w-16 h-16 bg-[#C8102E] rounded-2xl flex items-center justify-center text-white text-2xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#0B2C6B]">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default MissionVision;