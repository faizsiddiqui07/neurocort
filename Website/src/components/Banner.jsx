import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import { EffectFade, Autoplay } from "swiper/modules";
import image1 from '../assets/images/html-css-collage-concept-with-person (1).jpg'
import image2 from '../assets/images/html-css-collage-concept-with-person.jpg'
import image3 from '../assets/images/man-wheelchair-coworker-doing-tasks-data-center.jpg'

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 5000, once: true });
  }, []);

  return (
    <section>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        effect={"fade"}
        grabCursor={true}
        loop={true}
        modules={[EffectFade, Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <div className="relative w-full lg:h-[700px]" data-aos="fade-up">
            <img
              src={image1}
              alt="Banner 1"
              className="w-full "
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full lg:h-[700px]" data-aos="fade-up">
            <img
              src={image2}
              alt="Banner 2"
              className="w-full  "
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full lg:h-[700px]" data-aos="fade-up">
            <img
              src={image3}
              alt="Banner 2"
              className="w-full "
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
