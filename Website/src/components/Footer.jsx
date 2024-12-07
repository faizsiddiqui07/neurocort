import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineLocationOn, MdOutlineMailOutline } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import SubscribeCard from "./SubscribeCard";
import scrollTop from "../helpers/scrollTop";
import { data } from "autoprefixer";

const Footer = () => {
  return (
    <footer className="bg-black text-white overflow-hidden">
      <div className="px-4 lg:px-14 py-10 flex flex-wrap gap-y-12 justify-between">
        {/* Information Section */}
        <div
          data-aos="fade-right"
          className="w-full sm:w-1/2 md:w-1/3 flex flex-col gap-y-3"
        >
          <h3 className="text-xl font-semibold">Informations</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/about-us"
                onClick={()=>scrollTop()}
                className="hover:text-gray-300 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={()=>scrollTop()}
                className="hover:text-gray-300 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                onClick={()=>scrollTop()}
                className="hover:text-gray-300 transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-300 transition-colors">
                Career
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div
          data-aos="fade-up"
          className="w-full sm:w-1/2 md:w-1/3 flex flex-col gap-y-3"
        >
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-x-2">
              <MdOutlineLocationOn className="text-lg" />
              <p>Vikas Khand, Gomtinagar, Lucknow, Uttar Pradesh</p>
            </li>
            <li className="flex items-center gap-x-2">
              <LuPhoneCall className="text-lg" />
              <p>+91 - 8840318212 (Mon - Sat: 10am - 6pm)</p>
            </li>
            <li className="flex items-center gap-x-2">
              <MdOutlineMailOutline className="text-lg" />
              <p>mohdfaiz.1842@gmail.com</p>
            </li>
          </ul>

          <div className="mt-4">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            <div className="flex space-x-4 mt-2">
              <Link to="#" aria-label="Facebook">
                <FaFacebookF className="hover:text-gray-300 transition-colors" />
              </Link>
              <Link to="#" aria-label="Instagram">
                <FaInstagram className="hover:text-gray-300 transition-colors" />
              </Link>
              <Link to="#" aria-label="Pinterest">
                <FaWhatsapp className="hover:text-gray-300 transition-colors" />
              </Link>
              <Link to="#" aria-label="Twitter">
                <FaXTwitter className="hover:text-gray-300 transition-colors" />
              </Link>
              <Link to="#" aria-label="LinkedIn">
                <FaLinkedinIn className="hover:text-gray-300 transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        {/* Subscription Section */}
        <div data-aos="fade-left" className="w-full sm:w-1/2 md:w-1/3">
          <SubscribeCard />
        </div>
      </div>

      <div className="border-t border-gray-600 text-center py-4">
        <span>© {new Date().getFullYear()} The NeuroCort. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
