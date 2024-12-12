// Import Swiper React components
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const ClientReview = () => {
  return (
    <div className="relative lg:mt-24 mt-16 px-4 py-10">
      <div className="flex flex-row absolute inset-0 -z-20">
        <div className="min-h-[50vh] bg-white dark:bg-gray-900 md:w-3/4"></div>
        <div className="min-h-[50vh] bg-blue-400 md:w-2/5"></div>
      </div>

      <div className="max-w-xl w-full px-6">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          What our <span className="text-blue-500">customers</span> <br /> are
          saying
        </h1>
        <p className="text-gray-500 dark:text-slate-300 mt-4">
          These testimonials offer a glimpse into the real-world impact of our
          work, highlighting the quality of our services and the trust our
          clients place in us.
        </p>
      </div>

      <div className="flex justify-center relative mt-8">
        <div className=" w-full px-6 ">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },

              1024: {
                width: 1540,
                slidesPerView: 3,
              },
            }}>
            <SwiperSlide>
              <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                  “ Absolutely impressed with the speedy service and
                  professionalism of the technicians at FixNexus. My phone was
                  fixed within hours, and it works perfectly now! Highly
                  recommend their services. ”
                </p>

                <div className="flex items-center mt-6 -mx-2">
                  <img
                    className="object-cover mx-2 rounded-full w-14 h-14"
                    src="https://i.ibb.co/59MTKTx/Team-1.jpg"
                    alt=""
                  />

                  <div className="mx-2">
                    <h1 className="font-semibold text-gray-800 dark:text-white">
                      Christa Smith
                    </h1>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Area Manager, Navana
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                  “ I was hesitant about getting my laptop repaired, but
                  FixNexus made the process so easy and stress-free. The team
                  kept me updated throughout, and my laptop came back as good as
                  new. Thank you! ”
                </p>

                <div className="flex items-center mt-6 -mx-2">
                  <img
                    className="object-cover mx-2 rounded-full w-14 h-14"
                    src="https://i.ibb.co/FYQzzYF/Team-2.jpg"
                    alt=""
                  />

                  <div className="mx-2">
                    <h1 className="font-semibold text-gray-800 dark:text-white">
                      Jenifer Smith
                    </h1>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Executive, Team Sourcing
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                  “ Had a fantastic experience with FixNexus. Their attention to
                  detail and commitment to quality are unmatched. I'll
                  definitely be using their services again in the future. Highly
                  recommend! ”
                </p>

                <div className="flex items-center mt-6 -mx-2">
                  <img
                    className="object-cover mx-2 rounded-full w-14 h-14"
                    src="https://i.ibb.co/25vsfH8/Team-3.jpg"
                    alt=""
                  />

                  <div className="mx-2">
                    <h1 className="font-semibold text-gray-800 dark:text-white">
                      Michael R.
                    </h1>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      CEO, Teranove
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                  “ Couldn't be happier with the service I received from
                  FixNexus. The repair was completed ahead of schedule, and my
                  tablet now works flawlessly. Thank you for the excellent
                  customer service! ”
                </p>

                <div className="flex items-center mt-6 -mx-2">
                  <img
                    className="object-cover mx-2 rounded-full w-14 h-14"
                    src="https://i.ibb.co/19P7TWs/Team-4.jpg"
                    alt=""
                  />

                  <div className="mx-2">
                    <h1 className="font-semibold text-gray-800 dark:text-white">
                      David L.
                    </h1>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      COO, Puma
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                  “ I've used FixNexus for multiple device repairs, and they've
                  never disappointed. Their technicians are knowledgeable,
                  friendly, and go above and beyond to ensure customer
                  satisfaction. Highly recommended! ”
                </p>

                <div className="flex items-center mt-6 -mx-2">
                  <img
                    className="object-cover mx-2 rounded-full w-14 h-14"
                    src="https://i.ibb.co/2ydDd9F/Team-5.jpg"
                    alt=""
                  />

                  <div className="mx-2">
                    <h1 className="font-semibold text-gray-800 dark:text-white">
                      Brian S.
                    </h1>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      AGM, Labib Group
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                  “ A huge shoutout to the team at [Your Company Name] for
                  saving my day! My phone screen was shattered, and I thought it
                  was beyond repair, but they fixed it like magic. Thanks for
                  your expertise and efficiency! ”
                </p>

                <div className="flex items-center mt-6 -mx-2">
                  <img
                    className="object-cover mx-2 rounded-full w-14 h-14"
                    src="https://i.ibb.co/YNPrfYK/Team-6.jpg"
                    alt=""
                  />

                  <div className="mx-2">
                    <h1 className="font-semibold text-gray-800 dark:text-white">
                      Jessica M.
                    </h1>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Manager, DeshBondhu
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
