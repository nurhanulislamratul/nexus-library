import { Helmet } from "react-helmet-async";
import SectionTitle from "../components/SectionTitle";
import { useEffect, useState } from "react";
import AllServiceCard from "../components/AllServiceCard";
import useAxiosGeneral from "../hooks/useAxiosGeneral";
import { ColorRing } from "react-loader-spinner";

const AllServices = () => {
  const [loading, setLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [services, setServices] = useState([]);

  const axiosGeneral = useAxiosGeneral();
  // ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosGeneral(
        `/services?page=${currentPage}&size=${itemsPerPage}&search=${search}`
      );

      setServices(data);

      setLoading(false);
    };

    getData();
  }, [currentPage, itemsPerPage, search]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosGeneral(`/services-count?search=${search}`);
      setCount(data.count);
    };
    getData();
  }, [search]);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  //  handle pagination button
  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
    setCurrentPage(1);
  };

  return (
    <div className="py-20">
      <Helmet>
        <title>FixNexus | All Services</title>
      </Helmet>

      <SectionTitle title="All Services" />

      <div className="px-4 flex justify-center sm:justify-end pb-7 -mt-6">
        <h3 className="text-2xl font-semibold mb-4"></h3>
        <form onSubmit={handleSearch}>
          <label className="input input-bordered flex items-center max-w-sm w-full gap-2">
            <input
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              name="search"
              className="grow"
              placeholder="Search"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-6 h-6 opacity-70 cursor-pointer">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </label>
        </form>
      </div>

      {services?.length === 0 && (
        <div className="flex justify-center items-center py-32">
          <h3 className="text-2xl font-semibold">
            No Service Found, Try Again.
          </h3>
        </div>
      )}

      {loading && (
        <div className="flex justify-center items-center py-32">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        {services?.map((service) => (
          <AllServiceCard key={service._id} service={service} />
        ))}
      </div>

      <div className="flex sticky bottom-5 items-center justify-center mt-10">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePaginationButton(currentPage - 1)}
          className="px-4 py-2 mx-1 capitalize bg-orange-400 text-slate-900 font-semibold rounded-md cursor-not-allowed hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>

        {/* Numbers */}
        {pages.map((btnNum) => (
          <button
            onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={`hidden ${
              currentPage === btnNum
                ? "bg-blue-500 text-white"
                : "bg-orange-400"
            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}>
            {btnNum}
          </button>
        ))}

        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handlePaginationButton(currentPage + 1)}
          className="px-4 py-2 mx-1 text-slate-900 font-semibold transition-colors duration-300 transform bg-orange-400 rounded-md  hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 pr-7">
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AllServices;
