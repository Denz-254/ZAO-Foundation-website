import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B2C6B] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <h3 className="text-2xl font-bold">
              ZAO Foundation
            </h3>

            <p className="mt-4 text-gray-300">
              Empowering communities through education,
              healthcare, humanitarian support and sustainable development.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-300">
              <li>About</li>
              <li>Programs</li>
              <li>Impact</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Programs
            </h4>

            <ul className="space-y-3 text-gray-300">
              <li>Education</li>
              <li>Healthcare</li>
              <li>Empowerment</li>
              <li>Humanitarian Aid</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Follow Us
            </h4>

            <div className="flex gap-4">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} Zilpah Atieno Odak Foundation.
          All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;