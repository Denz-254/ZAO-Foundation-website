import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  return (
<header className="bg-white shadow-sm sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex items-center justify-between h-20">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="https://placehold.co/80x80"
          alt="ZAO Foundation"
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>
          <h2 className="font-bold text-2xl text-[#0B2C6B]">
            ZAO
          </h2>
          <p className="text-xs text-gray-500">
            FOUNDATION
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
        <a href="#" className="text-[#0B2C6B] font-semibold">
          Home
        </a>

        <a href="#" className="hover:text-[#C8102E] transition">
          About Us
        </a>

        <a href="#" className="hover:text-[#C8102E] transition">
          Programs
        </a>

        <a href="#" className="hover:text-[#C8102E] transition">
          Impact
        </a>

        <a href="#" className="hover:text-[#C8102E] transition">
          Get Involved
        </a>

        <a href="#" className="hover:text-[#C8102E] transition">
          Contact
        </a>
      </nav>

      {/* CTA */}
      <button className="bg-[#C8102E] hover:bg-[#a70d26] text-white px-6 py-3 rounded-lg font-medium transition">
        Donate
      </button>

    </div>
  </div>
</header>
  );
};

export default Navbar;