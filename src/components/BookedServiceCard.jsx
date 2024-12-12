import PropsTypes from "prop-types";
import { Link } from "react-router-dom";
const BookedServiceCard = ({ bookedService, handleCancel }) => {
  const {
    _id,
    serviceId,
    serviceName,
    serviceImage,
    price,
    instructions,
    serviceDate,
    status,
    providerName,
    providerImage,
  } = bookedService || {};

  return (
    <div>
      <div className="flex flex-col lg:justify-between mx-auto overflow-hidden bg-white rounded-md shadow-lg dark:bg-gray-800 max-w-5xl">
        <div className="">
          <img
            className="object-cover w-full h-64"
            src={serviceImage}
            alt={serviceName}
          />
        </div>

        <div className="flex flex-col md:flex-row  md:justify-between dark:bg-gray-800 px-4 py-6 gap-4">
          <div className="w-full flex flex-col justify-between gap-4 md:w-2/3">
            <div className="space-y-3">
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                {serviceName}
              </h1>

              <h4 className="font-bold text-gray-700 dark:text-gray-200">
                Price : ${price}
              </h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <strong>Service Taking Date: </strong>{" "}
                {new Date(serviceDate).toLocaleDateString()}
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <strong>Instruction: </strong> {instructions}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to={`/services-details/${serviceId}`}
                className="rounded-md px-3.5 py-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
                  View Details
                </span>
              </Link>

              <button
                onClick={() => handleCancel(_id)}
                className="px-5 py-1.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-orange-600 inline-block">
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-orange-600 group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white">
                  Cancle Booking
                </span>
              </button>
            </div>
          </div>
          <div className="md:w-1/3 md:flex md:justify-end">
            <div>
              <h2 className="text-base font-medium text-gray-800 dark:text-white mb-3">
                Service Provider
              </h2>
              <div className="flex items-center gap-x-2">
                <img
                  className="object-cover w-[72px] h-[72px] rounded-lg"
                  src={providerImage}
                  alt={providerName}
                />

                <div>
                  <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                    {providerName}
                  </h1>

                  <div className="text-center flex flex-col items-center mt-1">
                    <p className="text-sm text-gray-400">Status:</p>
                    <p
                      className={`px-2.5 ml-2 py-1 rounded-md ${
                        status === "Pending" && "text-blue-500 bg-blue-100/60"
                      } ${
                        status === "Working" &&
                        "text-emerald-500 dark:bg-green-100 bg-emerald-100/60"
                      } ${
                        status === "Completed" &&
                        "text-pink-700 dark:bg-violet-100 bg-pink-100/60"
                      } text-sm`}>
                      {status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BookedServiceCard.propTypes = {
  bookedService: PropsTypes.object,
  handleCancel: PropsTypes.func,
};

export default BookedServiceCard;
