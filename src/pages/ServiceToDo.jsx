import { Helmet } from "react-helmet-async";
import SectionTitle from "../components/SectionTitle";
import ServiceToDoCard from "../components/ServiceToDoCard";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ServiceToDo = () => {
  const [bookedServices, setBookedServices] = useState([]);
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  // ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // get data from the server
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure.get(`/services-to-do/${user?.email}`);
      setBookedServices(data);
    };
    getData();
  }, []);

  return (
    <div className="py-20">
      <Helmet>
        <title>FixNexus | Service To Do</title>
      </Helmet>
      <SectionTitle title="Service To Do" />

      <div className="grid grid-cols-1 gap-4">
        {bookedServices?.length === 0 && (
          <div className="flex justify-center items-center py-32">
            <h3 className="text-2xl font-semibold">
              No One Booked Services, Wait With Patience For Someone To Book.
            </h3>
          </div>
        )}
        {bookedServices?.map((bookedService) => (
          <ServiceToDoCard
            key={bookedService._id}
            bookedService={bookedService}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceToDo;
