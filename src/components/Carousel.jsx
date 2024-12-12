import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

const Carousel = () => {
  const bgimg1 = "https://i.ibb.co/kMQ6NSw/Slider1.jpg";
  const bgimg2 = "https://i.ibb.co/SRq3S0Y/Slider2.jpg";
  const bgimg3 = "https://i.ibb.co/sRtRZmV/Slider3.jpg";
  return (
    <div className=" px-2 py-5 mx-auto -z-10 rounded-xl">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text="Revive Your Devices with Our Expert Repairs"
            desc="Trust our skilled technicians to breathe new life into your electronics. From smartphones to laptops, we specialize in repairing a wide range of devices with precision and expertise. "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text="Experience Seamless Repairs for Your Electronics"
            desc="Experience seamless repairs and reliable solutions for all your electronic devices. Whether it's a cracked screen, faulty battery, or software issue, our team is here to diagnose. "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text="Empowering Your Devices to Perform Like New"
            desc="Get back to doing what you love with our efficient electronic repair services. With quick turnaround times and transparent pricing, we make it easy to get your devices fixed without hassle."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
