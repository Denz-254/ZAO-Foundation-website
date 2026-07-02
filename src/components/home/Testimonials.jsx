import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah A.",
    role: "Scholarship Beneficiary",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    text:
      "The foundation helped me continue my education when my family could not afford school fees. Today I am pursuing my dream career.",
  },
  {
    name: "James O.",
    role: "Community Member",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    text:
      "The medical outreach program brought healthcare services closer to our village and improved many lives.",
  },
  {
    name: "Mary N.",
    role: "Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
    text:
      "Through training and mentorship, I started a small business that now supports my family.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="uppercase text-[#C8102E] tracking-[3px] font-semibold">
            Success Stories
          </span>

          <h2 className="text-4xl font-bold text-[#0B2C6B] mt-4">
            Voices Of Impact
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-[#F8F9FB] rounded-3xl p-8"
            >
              <FaQuoteLeft className="text-[#C8102E] text-3xl mb-4" />

              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>

              <div className="flex items-center gap-4 mt-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold text-[#0B2C6B]">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;