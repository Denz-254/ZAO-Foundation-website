import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B2C6B] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Foundation Info */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src="/logo.png"
                alt="ZAO Foundation Logo"
                className="w-28 md:w-32 h-auto mb-5 rounded-full"
              />
            </Link>

            <p className="text-gray-300 leading-relaxed">
              The Zilpah Atieno Odak (ZAO) Foundation is committed to
              transforming lives through education, healthcare, humanitarian
              assistance, economic empowerment, and sustainable community
              development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-5">Quick Links</h4>

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/programs"
                  className="hover:text-white transition"
                >
                  Programs
                </Link>
              </li>

              <li>
                <Link
                  to="/impact"
                  className="hover:text-white transition"
                >
                  Our Impact
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="hover:text-white transition"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/donate"
                  className="hover:text-white transition"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-5">Our Programs</h4>

            <ul className="space-y-3 text-gray-300">
              <li>Education Support</li>
              <li>Healthcare Outreach</li>
              <li>Women's & Youth Empowerment</li>
              <li>Humanitarian Assistance</li>
              <li>Community Development</li>
              <li>Mentorship & Capacity Building</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-5">Get in Touch</h4>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#C8102E]" />
                <span>Kenya</span>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-[#C8102E]" />
                <span>info@zaofoundation.org</span>
              </div>

              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-[#C8102E]" />
                <span>+254 XXX XXX XXX</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#C8102E] flex items-center justify-center transition duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#C8102E] flex items-center justify-center transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#C8102E] flex items-center justify-center transition duration-300"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#C8102E] flex items-center justify-center transition duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Zilpah Atieno Odak Foundation. All
            Rights Reserved.
          </p>

          <p>
            <span className="text-white font-medium">
              Honoring a Legacy.
            </span>{" "}
            <span className="text-[#C8102E] font-medium">
              Changing Lives.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;