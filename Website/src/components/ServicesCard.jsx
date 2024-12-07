import React from "react";
import { Link } from "react-router-dom";
import { convert } from "html-to-text";
import scrollTop from "../helpers/scrollTop";

const ServicesCard = ({ icon, title, description, link }) => {
  return (
    <Link
      to={`/service/${link}`}
      className="w-full flex items-center gap-x-6 bg-slate-100 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      data-aos="zoom-in"
      onClick={scrollTop}
    >
      <img
        src={icon[0]}
        className="w-16 h-16 object-cover"
        alt={`${title} icon`}
      />
      <div className="flex flex-col justify-center gap-2">
        <h2 className="text-xl xs:text-2xl font-bold text-gray-800 hover:text-[#a0810e] transition-colors duration-300">
          {title}
        </h2>
        <p className="text-sm xs:text-base text-gray-600 leading-relaxed">
          {convert(description).slice(0, 180)}...
        </p>
        <Link
          to={`/service/${link}`}
          className="text-sm text-[#a0810e] font-medium hover:text-[#8b6d0c] transition-colors duration-300"
        >
          Learn More
        </Link>
      </div>
    </Link>
  );
};

export default ServicesCard;
