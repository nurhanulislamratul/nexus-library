import { Link } from "react-router-dom";
import PropsType from "prop-types";

const AllServiceCard = ({ service }) => {
  const {
    _id,
    serviceName,
    serviceArea,
    imgURL,
    price,
    description,
    providerImage,
    providerName,
  } = service || {};
  return (
    <div>
      <div className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ">
        <div className="group">
          <img
            className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-300"
            src={imgURL}
            alt="Article"
          />

          <div className="p-6">
            <div>
              <h2 className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline">
                {serviceName}
              </h2>
              <p className="mt-2 font-bold text-gray-600 dark:text-gray-400">
                Service Area: {serviceArea}
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {description.slice(0, 100)}
              </p>
              <h4 className="mt-2 text-lg sm:text-xl font-bold text-gray-600 dark:text-gray-400">
                Price: ${price}
              </h4>
            </div>
          </div>
        </div>

        <div className="mt-4 px-6 pb-6 flex items-start justify-between">
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                className="object-cover w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                src={providerImage}
                alt={providerName}
              />
            </div>
            <div className="ml-3">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Post By
              </p>
              <p className="text-sm font-semibold sm:font-normal sm:text-xl text-gray-600 dark:text-gray-400">
                {providerName}
              </p>
            </div>
          </div>

          <div className="flex">
            <Link
              to={`/services-details/${_id}`}
              className="relative inline-flex items-center justify-start sm:px-6 px-2 sm:py-3 py-1.5 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group border">
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-orange-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white text-sm sm:text-base">
                View Details
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

AllServiceCard.propTypes = {
  service: PropsType.object,
};

export default AllServiceCard;
