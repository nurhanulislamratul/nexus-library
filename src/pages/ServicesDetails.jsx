import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const ServicesDetails = () => {
  const loadedData = useLoaderData();
  const {
    _id,
    serviceName,
    imgURL,
    price,
    description,
    serviceArea,
    providerName,
    providerImage,
  } = loadedData || {};

  // ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <Helmet>
        <title>FixNexus | Service Details</title>
      </Helmet>
      <div className="py-20 md:pt-28 md:pb-20">
        <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
              <div className="bg-gray-800 sm:px-4 p-1 sm:py-10 rounded-xl">
                <img
                  src={imgURL}
                  alt="Product"
                  className="w-full sm:w-4/5 rounded-xl sm:rounded object-cover mx-auto"
                />
              </div>
              <div>
                <p className="text-lg text-left font-semibold mt-4 mb-3">
                  Service Provider Information
                </p>
                <div className="flex items-center gap-x-2">
                  <img
                    className="object-cover sm:w-28 sm:h-28 w-20 h-20 rounded-lg"
                    src={providerImage}
                    alt={providerName}
                  />

                  <div className="text-left">
                    <h1 className="text-lg sm:text-xl font-semibold text-gray-700 capitalize dark:text-white">
                      {providerName}
                    </h1>

                    <p className="text-base text-gray-500 dark:text-gray-400">
                      Service Area : {serviceArea}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-xl sm:text-3xl font-semibold">
                {serviceName}
              </h2>
              <p className=" text-xl sm:text-4xl font-semibold mt-4">
                Price: ${price}
              </p>

              <div className="flex space-x-2 mt-4">
                <svg
                  className="w-5 fill-orange-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-orange-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-orange-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-orange-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <h4 className="text-base">500 Reviews</h4>
              </div>

              <div className="flex flex-row gap-4 mt-8">
                <Link
                  to={`/purchase/${_id}`}
                  className="max-w-[200px] w-full  px-4 py-3 bg-orange-300 hover:bg-orange-400 text-black text-center text-sm font-semibold rounded">
                  Book Now
                </Link>

                <button
                  type="button"
                  className=" max-w-[200px] w-full px-4 py-2.5 border border-yellow-300 bg-transparent dark:text-yellow-300 text-sm font-semibold rounded">
                  Add to cart
                </button>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mt-4">
                  Service Description
                </h3>

                <p className="mt-4">{description}</p>

                <div className="mt-8">
                  <div className="flex items-center sm:justify-end justify-start gap-x-2">
                    <img
                      className="object-cover w-12 h-12 rounded-full"
                      src={providerImage}
                      alt={providerName}
                    />

                    <div>
                      <h1 className="text-sm sm:text-xl font-semibold text-gray-700 capitalize dark:text-white">
                        {providerName}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <ul className="flex">
                  <li className="font-semibold text-sm bg-gray-800 text-white py-3 px-8 border-b-2 border-yellow-300 cursor-pointer transition-all">
                    Reviews
                  </li>
                  <li className="font-semibold text-sm py-3 px-8 cursor-pointer">
                    Sellter
                  </li>
                </ul>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold">Reviews(10)</h3>

                  <div className="space-y-3 mt-4">
                    <div className="flex items-center">
                      <p className="text-sm font-semibold">5.0</p>
                      <svg
                        className="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-400 rounded w-full h-2 ml-3">
                        <div className="w-2/3 h-full rounded bg-yellow-300"></div>
                      </div>
                      <p className="text-sm font-semibold ml-3">66%</p>
                    </div>

                    <div className="flex items-center">
                      <p className="text-sm font-semibold">4.0</p>
                      <svg
                        className="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-400 rounded w-full h-2 ml-3">
                        <div className="w-1/3 h-full rounded bg-yellow-300"></div>
                      </div>
                      <p className="text-sm font-semibold ml-3">33%</p>
                    </div>

                    <div className="flex items-center">
                      <p className="text-sm font-semibold">3.0</p>
                      <svg
                        className="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-400 rounded w-full h-2 ml-3">
                        <div className="w-1/6 h-full rounded bg-yellow-300"></div>
                      </div>
                      <p className="text-sm font-semibold ml-3">16%</p>
                    </div>

                    <div className="flex items-center">
                      <p className="text-sm font-semibold">2.0</p>
                      <svg
                        className="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-400 rounded w-full h-2 ml-3">
                        <div className="w-1/12 h-full rounded bg-yellow-300"></div>
                      </div>
                      <p className="text-sm font-semibold ml-3">8%</p>
                    </div>

                    <div className="flex items-center">
                      <p className="text-sm font-semibold">1.0</p>
                      <svg
                        className="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-400 rounded w-full h-2 ml-3">
                        <div className="w-[6%] h-full rounded bg-yellow-300"></div>
                      </div>
                      <p className="text-sm font-semibold ml-3">6%</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start mt-8">
                  <img
                    src="https://readymadeui.com/team-2.webp"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />

                  <div className="ml-3">
                    <h4 className="text-sm font-semibold ">John Doe</h4>
                    <div className="flex space-x-1 mt-1">
                      <svg
                        className="w-4 fill-yellow-300"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-yellow-300"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-yellow-300"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <p className="text-xs !ml-2 font-semibold">2 mins ago</p>
                    </div>
                    <p className="text-xs mt-4">
                      The service was amazing. I never had to wait that long for
                      my phone. The staff was friendly and attentive, and the
                      delivery was impressively prompt.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full mt-8 px-4 py-2.5 bg-transparent border border-yellow-300 dark:text-yellow-300 font-semibold rounded">
                  Read all reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
