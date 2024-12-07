import React from "react";
import aboutImage from "../assets/images/workers-it-company-working-computer (1).jpg";

const AboutUsPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] sm:h-[450px] md:h-[600px]">
        <img
          src={aboutImage}
          alt="About Us Background"
          className="w-full h-full object-cover object-top brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase">
            About Us
          </h2>
          <p className="text-white mt-4 max-w-xl px-4 md:px-0 text-lg">
            Discover our journey to becoming a leading IT solutions provider,
            driving digital transformation across industries.
          </p>
        </div>
      </div>

      {/* Company Description Section */}
      <section className="py-12 px-4 lg:px-14 text-center">
        <div className="max-w-4xl mx-auto">
          <h3
            className="text-2xl md:text-3xl font-bold mb-6 text-gray-800"
            data-aos="fade-up"
          >
            Who We Are
          </h3>
          <p
            className="text-gray-600 text-lg leading-relaxed mb-8"
            data-aos="fade-up"
          >
            Founded in 2024 by Khaan Aamir and Kalpana Saini, NeuroCort has
            grown into a leading solutions provider, offering top-notch IT
            services across multiple industries. We specialize in catalyzing
            smooth digital transformation and delivering best-in-class
            solutions.
          </p>

          {/* Vision and Mission Section */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {[
              {
                title: "Our Vision",
                description:
                  "To be a trusted partner in the digital revolution, providing solutions that help businesses thrive in an ever-changing technological landscape.",
              },
              {
                title: "Our Mission",
                description:
                  "To deliver innovative, reliable, and scalable IT solutions that meet the dynamic needs of our clients and empower their growth.",
              },
            ].map((item, index) => (
              <div
                className="w-full md:w-1/2"
                data-aos="zoom-in-up"
                key={index}
              >
                <h4 className="text-xl font-semibold text-[#a0810e]">
                  {item.title}
                </h4>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
