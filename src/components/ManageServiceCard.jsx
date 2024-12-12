import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const ManageServiceCard = ({ service, handleDelete }) => {
  const { _id, serviceName, imgURL, price, serviceArea, description } =
    service || {};

  // ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="flex flex-col sm:flex-row max-w-5xl mx-auto overflow-hidden bg-white rounded-md shadow-lg dark:bg-gray-800">
        <div className="sm:w-1/3">
          <img
            className="object-cover w-full h-64"
            src={imgURL}
            alt={serviceName}
          />
        </div>

        <div className="w-full flex flex-col justify-between sm:w-2/3 p-4">
          <div className="space-y-2">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              {serviceName}
            </h1>

            <p className="mt-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
              <strong>Service Area:</strong> {serviceArea}
            </p>
            <h4 className="font-bold text-gray-700 dark:text-gray-200">
              Price :${price}
            </h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between mt-3 gap-4 item-center">
            <div className="flex">
              <Link
                to={`/services-details/${_id}`}
                className="rounded-md px-3.5 py-1 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
                  View Details
                </span>
              </Link>
              <Link
                to={`/update-service/${_id}`}
                className="rounded-md px-3.5 py-1 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 ">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
                  Edit
                </span>
              </Link>
            </div>
            <button
              onClick={() => handleDelete(_id)}
              className="relative inline-flex items-center justify-start px-6 py-1.5 overflow-hidden font-medium transition-all bg-red-500 rounded-md group">
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 ">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Delete
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ManageServiceCard.propTypes = {
  service: PropTypes.object,
  handleDelete: PropTypes.func,
};

export default ManageServiceCard;
