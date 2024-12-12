import { useEffect, useState } from "react";
import BookedServiceCard from "./BookedServiceCard";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAxiosGeneral from "../hooks/useAxiosGeneral";
import { toast } from "react-toastify";

const BookedServiceCardContainer = () => {
  const [bookedServices, setBookedServices] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const axiosGeneral = useAxiosGeneral();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure.get(`/booked-services/${user?.email}`);
      setBookedServices(data);
    };
    getData();
  }, []);

  const handleCancel = async (id) => {
    try {
      const { data } = await axiosGeneral.delete(`/booked-services/${id}`);
      if (data.acknowledged) {
        const newBookedServices = bookedServices.filter(
          (bookedService) => bookedService._id !== id
        );
        setBookedServices(newBookedServices);
        toast.success("Booking Cancelled Successfully", { autoClose: 1500 });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-12 px-4">
      {bookedServices?.length === 0 && (
        <div className="flex justify-center items-center py-32">
          <h3 className="text-2xl font-semibold">
            No Booked Services, Please Booked Service First.
          </h3>
        </div>
      )}
      {bookedServices?.map((bookedService) => (
        <BookedServiceCard
          key={bookedService._id}
          bookedService={bookedService}
          handleCancel={handleCancel}
        />
      ))}
    </div>
  );
};

export default BookedServiceCardContainer;
