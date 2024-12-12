import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import { useEffect, useState } from "react";
import useAxiosGeneral from "./../hooks/useAxiosGeneral";
import { ColorRing } from "react-loader-spinner";

const CardContainer = () => {
  const axiosGeneral = useAxiosGeneral();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosGeneral("/home-services");
      setServices(data);
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <div className="py-10 md:py-20 px-4">
      <SectionTitle
        title="Popular Services"
        desctiption="Browse our popular services below and schedule an appointment with us today to get your gadgets working like new again."
      />
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>

      <div className="flex justify-center mt-14">
        <Link
          to="/services"
          className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
          <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#864508] to-[#0026ff] group-hover:from-[#ff6600c4] group-hover:via-[#545fff] group-hover:to-[#ff8a05] absolute"></span>
          <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span className="relative text-white">Show All Services</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CardContainer;
