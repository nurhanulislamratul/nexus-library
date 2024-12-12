import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import useAuth from "./../hooks/useAuth";
import useAxiosGeneral from "./../hooks/useAxiosGeneral";
import { toast } from "react-toastify";

const AddServices = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosGeneral = useAxiosGeneral();

  const handleAddService = async (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.serviceName.value;
    const imgURL = form.imgURL.value;
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;
    const providerEmail = user?.email;
    const providerImage = user?.photoURL;
    const providerName = user?.displayName;
    const service = {
      serviceName,
      imgURL,
      price,
      serviceArea,
      description,
      providerEmail,
      providerImage,
      providerName,
    };
    try {
      const { data } = await axiosGeneral.post("/services", service);
      if (data.insertedId) {
        toast.success("Service Added Successfully", { autoClose: 1500 });
        navigate("/manage-service");
        form.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-[calc(100vh-170px)] flex items-center justify-center py-24 md:pt-28 md:pb-20 dark:bg-gray-900 px-4">
      <Helmet>
        <title>FixNexus | Add New Service</title>
      </Helmet>
      <section className="max-w-4xl  w-full p-4 sm:p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 capitalize dark:text-white">
          Add New Service
        </h2>

        <form onSubmit={handleAddService}>
          <div className="grid grid-cols-1 gap-3 md:gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 md:font-bold font-medium text-base md:text-lg  dark:text-gray-200"
                htmlFor="serviceName">
                Service Name
              </label>
              <input
                id="serviceName"
                type="text"
                name="serviceName"
                required
                className="block w-full px-2 sm:px-4 py-1 sm:py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 md:font-bold font-medium text-base md:text-lg dark:text-gray-200"
                htmlFor="imgURL">
                Image URL of the service
              </label>
              <input
                id="imgURL"
                type="text"
                name="imgURL"
                required
                className="block w-full px-2 sm:px-4 py-1 sm:py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 md:font-bold font-medium text-base md:text-lg dark:text-gray-200"
                htmlFor="price">
                Price
              </label>
              <input
                id="price"
                name="price"
                type="text"
                className="block w-full px-2 sm:px-4 py-1 sm:py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 md:font-bold font-medium text-base md:text-lg dark:text-gray-200"
                htmlFor="serviceArea">
                Service Area
              </label>
              <input
                id="serviceArea"
                name="serviceArea"
                type="text"
                className="block w-full px-2 sm:px-4 py-1 sm:py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="text-gray-700 md:font-bold font-medium text-base md:text-lg dark:text-gray-200"
              htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              className="block w-full px-2 sm:px-4 py-1 sm:py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              required></textarea>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group border">
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-orange-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Add Service
              </span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddServices;
