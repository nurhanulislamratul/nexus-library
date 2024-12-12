import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosGeneral from "../hooks/useAxiosGeneral";
import { toast } from "react-toastify";

const PurchaseConfirm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const loadedData = useLoaderData();
  const axiosGeneral = useAxiosGeneral();
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    _id,
    serviceName,
    imgURL,
    price,
    providerName,
    providerEmail,
    providerImage,
  } = loadedData || {};

  // ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const instructions = form.instructions.value;
    const serviceDate = startDate;
    const status = "Pending";

    const service = {
      serviceId: _id,
      serviceName,
      serviceImage: imgURL,
      providerEmail,
      providerName,
      providerImage,
      price,
      userEmail: user?.email,
      userName: user?.displayName,
      userImage: user?.photoURL || "https://i.ibb.co/jV2yzqg/ethan.png",
      serviceDate,
      status,
      instructions,
    };
    try {
      const { data } = await axiosGeneral.post("/booked-services", service);
      if (data.insertedId) {
        toast.success("Service Added Successfully", { autoClose: 1500 });
        navigate("/booked-services");
        form.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-[calc(100vh-170px)] flex items-center justify-center py-24 md:pt-28 md:pb-20 dark:bg-gray-900 px-4">
      <Helmet>
        <title>FixNexus | Purchase Confirmation</title>
      </Helmet>
      <section className="max-w-7xl  w-full p-4 sm:p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="sm:text-3xl text-xl font-semibold text-gray-700 capitalize dark:text-white mb-6">
          Purchase Confirmation
        </h2>
        <div className="grid grid-cols-1 gap-3 md:gap-6 mt-4 md:grid-cols-2">
          <div className=" py-10 rounded-xl">
            <img
              src={imgURL}
              alt={serviceName}
              className="rounded object-cover mx-auto"
            />
          </div>

          <form onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 text-sm font-semibold dark:text-gray-200"
                  htmlFor="serviceId">
                  Service Id
                </label>
                <input
                  id="serviceId"
                  type="text"
                  name="serviceId"
                  value={_id}
                  disabled
                  className="block w-full px-4 py-1.5 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 text-sm font-semibold dark:text-gray-200"
                  htmlFor="serviceName">
                  Service Name
                </label>
                <input
                  id="imgserviceName"
                  type="text"
                  name="serviceName"
                  value={serviceName}
                  disabled
                  className="block w-full px-4 py-1.5 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 text-sm font-semibold dark:text-gray-200"
                  htmlFor="serviceImage">
                  Service Image URL
                </label>
                <input
                  id="serviceImage"
                  type="text"
                  name="serviceImage"
                  value={imgURL}
                  disabled
                  className="block w-full px-4 py-1.5 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 text-sm font-semibold dark:text-gray-200"
                  htmlFor="price">
                  Price
                </label>
                <input
                  id="price"
                  name="price"
                  type="text"
                  value={price}
                  disabled
                  className="block w-full px-4 py-1.5 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 text-sm font-semibold dark:text-gray-200"
                  htmlFor="providerName">
                  Provider Name
                </label>
                <input
                  id="providerName"
                  type="text"
                  name="providerName"
                  value={providerName}
                  disabled
                  className="block w-full px-4 py-1.5 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 text-sm font-semibold dark:text-gray-200"
                  htmlFor="providerEmail">
                  Provider Email
                </label>
                <input
                  id="providerEmail"
                  type="text"
                  name="providerEmail"
                  value={providerEmail}
                  disabled
                  className="block w-full px-4 py-1.5 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 text-sm font-semibold dark:text-gray-200"
                  htmlFor="userName">
                  User Name
                </label>
                <input
                  id="userName"
                  type="text"
                  name="userName"
                  value={user?.displayName}
                  disabled
                  className="block w-full px-4 py-1.5 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 text-sm font-semibold dark:text-gray-200"
                  htmlFor="userEmail">
                  User Email
                </label>
                <input
                  id="userEmail"
                  type="text"
                  name="userEmail"
                  value={user?.email}
                  disabled
                  className="block w-full px-4 py-1.5 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-gray-700 text-sm font-bold dark:text-gray-200"
                  htmlFor="serviceDate">
                  Service Taking Date
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="block w-full px-4 py-1.5 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="text-gray-700 font-bold text-sm dark:text-gray-200"
                htmlFor="instructions">
                Customized Service Plan
              </label>
              <textarea
                id="instructions"
                name="instructions"
                rows="4"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required></textarea>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group border">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-orange-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  Purchase
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default PurchaseConfirm;
