import { Link } from "react-router-dom";
import { FaHeart, FaUsers, FaHandHoldingHeart } from "react-icons/fa";

const actions = [
  {
    icon: <FaHeart />,
    title: "Donate",
    desc: "Support programs that transform lives.",
  },
  {
    icon: <FaUsers />,
    title: "Volunteer",
    desc: "Join our mission and make a difference.",
  },
  {
    icon: <FaHandHoldingHeart />,
    title: "Partner With Us",
    desc: "Collaborate for greater community impact.",
  },
];

const GetInvolved = () => {
  return (
    <section className="py-24 bg-[#0B2C6B]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get Involved
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-300">
            Together we can create opportunities, restore hope,
            and build stronger communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {actions.map((action, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-center"
            >
              <div className="text-4xl text-[#C8102E] flex justify-center">
                {action.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#0B2C6B]">
                {action.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {action.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/donate"
            className="bg-[#C8102E] text-white px-8 py-4 rounded-xl font-semibold"
          >
            Support Our Mission
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;