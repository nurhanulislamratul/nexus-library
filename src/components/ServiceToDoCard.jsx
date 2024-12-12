import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosGeneral from "../hooks/useAxiosGeneral";
import { toast } from "react-toastify";
const ServiceToDoCard = ({ bookedService }) => {
  const {
    _id,
    serviceId,
    serviceImage,
    serviceName,
    instructions,
    price,
    serviceDate,
    userName,
    userEmail,
    userImage,
    status,
  } = bookedService || {};
  const [filter, setFilter] = useState(status);
  const axiosGeneral = useAxiosGeneral();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosGeneral.patch(`/booked-services/${_id}`, {
        status: filter,
      });
    };
    getData();
  }, [filter]);

  return (
    <div>
      <div>
        <div className="flex flex-col sm:flex-row max-w-5xl mx-auto overflow-hidden bg-white rounded-md shadow-lg dark:bg-gray-800">
          <div className="sm:w-1/3">
            <img
              className="object-cover w-full h-64"
              src={serviceImage}
              alt={serviceName}
            />
          </div>

          <div className="w-full flex flex-col justify-between gap-6 sm:w-2/3 p-4">
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

            <div className="flex">
              <Link
                to={`/services-details/${serviceId}`}
                className="rounded-md px-3.5 py-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
                  View Details
                </span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-3">
              <div>
                <label className="label">
                  <span className="label-text font-bold">
                    Service Booked By
                  </span>
                </label>
                <div className="flex items-center gap-x-2">
                  <img
                    className="object-cover w-16 h-16 rounded-lg"
                    src={userImage}
                    alt={userName}
                  />

                  <div>
                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                      {userName}
                    </h1>

                    <p className="text-base text-gray-500 dark:text-gray-400">
                      {userEmail}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <form action="">
                  <label className="label">
                    <span className="label-text font-bold">
                      Update Your Service Status
                    </span>
                  </label>
                  <select
                    name="status"
                    defaultValue={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="select select-bordered w-full max-w-xs">
                    <option value={"Pending"}>Pending</option>
                    <option value={"Working"}>Working</option>
                    <option value={"Completed"}>Completed</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceToDoCard.propTypes = {
  bookedService: PropTypes.object,
};

export default ServiceToDoCard;
