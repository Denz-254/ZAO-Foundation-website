import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHeart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Impact", path: "/impact" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
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
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#C8102E] font-semibold"
                    : "text-[#0B2C6B] hover:text-[#C8102E] transition"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Donate Button */}
            <Link
              to="/donate"
              className="hidden sm:flex items-center gap-2 bg-[#C8102E] hover:bg-[#a70d26] text-white px-6 py-3 rounded-lg font-medium transition"
            >
              <FaHeart />
              Donate
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-2xl text-[#0B2C6B]"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] border-t" : "max-h-0"
        }`}
      >
        <div className="bg-white px-6 py-5 flex flex-col gap-5">

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#C8102E] font-semibold"
                  : "text-[#0B2C6B]"
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/donate"
            onClick={() => setOpen(false)}
            className="mt-2 bg-[#C8102E] text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2"
          >
            <FaHeart />
            Donate
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Navbar;