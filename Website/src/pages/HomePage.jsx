import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
import aboutImage from "../assets/images/workers-it-company-working-computer (1).jpg";
import ServicesCard from "../components/ServicesCard";
import scrollTop from "../helpers/scrollTop";
import axios from "axios";
import { base_url } from "../config/config";

const HomePage = () => {
  const [services, setServices] = useState([]);

  const get_services = async () => {
    try {
      const response = await axios.get(`${base_url}/api/allServiceForWebsite`);
      setServices(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_services();
  }, []);

  return (
    <>
      <Banner />

      {/* About Us Section */}
      <section className="px-4 lg:px-14 py-10 md:py-14">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-y-8 lg:gap-x-10">
          <div
            className="w-full lg:w-[55%] flex flex-col gap-y-4 lg:pr-12 text-center md:text-start"
            data-aos="fade-right"
          >
            <h2 className="uppercase text-[#a0810e] font-medium">About NeuroCort</h2>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold">
              Enroute to Catalysing Digital Revolution
            </h1>
            <p className="text-gray-600 leading-relaxed">
              NeuroCort was conceived in 2024 by founders Khaan Aamir and Kalpana Saini. As a leading IT solutions provider, we work across verticals to accelerate digital transformation and deliver best-in-class services. Our mission is to empower businesses by offering cutting-edge technology solutions tailored to meet diverse industry needs.
              <br /><br />
              With a team of highly skilled professionals, NeuroCort prides itself on innovation, efficiency, and customer satisfaction. We have partnered with businesses from various sectors, including eCommerce, SaaS, cloud hosting, and mobile app development, to streamline operations and enhance productivity.
            </p>
          </div>
          <div
            className="w-full lg:w-[45%] flex flex-col gap-y-2"
            data-aos="fade-left"
          >
            <img
              src={aboutImage}
              className="rounded shadow-xl"
              alt="NeuroCort Team at Work"
            />
            <div className="flex items-center gap-x-3 mt-3">
              <MdArrowRightAlt className="text-[#a0810e]" size={30} />
              <Link
                to="/about-us"
                onClick={scrollTop}
                className="uppercase text-sm text-[#a0810e]"
              >
                Learn more about us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 lg:px-14 pt-8 pb-14">
        <div className="w-full flex flex-col gap-y-8 xs:gap-y-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-y-5">
            <div className="text-center md:text-start">
              <h2 className="uppercase text-[#a0810e] font-medium" data-aos="fade-down">
                Our Services
              </h2>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold" data-aos="fade-right">
                We Offer a Wide Variety of IT Services
              </h1>
            </div>
            <Link
              to="/services"
              onClick={scrollTop}
              className="px-4 py-2 bg-[#a0810e] text-white rounded hover:bg-[#917200] transition-all"
              data-aos="fade-left"
            >
              All Services
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-8">
            {services.slice(0, 6).map((service, index) => (
              <ServicesCard
                key={index}
                icon={service.serviceIcon}
                title={service.serviceName}
                description={service.description}
                link={service.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-8">
        <div className="w-full h-[300px] md:h-[400px] relative">
          <img
            src={aboutImage}
            className="w-full h-full object-cover object-top brightness-50"
            alt="Contact Background"
          />
          <div className="px-4 lg:px-14 pt-8 pb-14 absolute top-0 bottom-0 text-white flex justify-around items-center w-full flex-col md:flex-row">
            <div className="text-center md:text-start">
              <h2 className="text-lg lg:text-xl mb-4 font-medium" data-aos="fade-right">
                We are all up to hearing from you
              </h2>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold" data-aos="fade-left">
                How can we help?
              </h1>
            </div>
            <Link
              to="/contact-us"
              onClick={scrollTop}
              className="px-4 sm:px-5 py-2 sm:py-4 border border-[#a0810e] hover:bg-[#a0810e] transition-all text-lg rounded-sm"
              data-aos="flip-up"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
