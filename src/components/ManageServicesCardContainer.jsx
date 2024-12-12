import { useEffect, useState } from "react";
import ManageServiceCard from "./ManageServiceCard";
import useAxiosGeneral from "../hooks/useAxiosGeneral";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAxiosSecure from "./../hooks/useAxiosSecure";

const ManageServicesCardContainer = () => {
  const [services, setServices] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const axiosGeneral = useAxiosGeneral();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure(`/manage-services/${user?.email}`);
      setServices(data);
    };
    getData();
  }, [user?.email]);

  // Delete Service
  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { data } = await axiosGeneral.delete(`/services/${id}`);
          if (data.acknowledged) {
            toast.success("Service Deleted Successfully", { autoClose: 1500 });
            const newServices = services.filter(
              (service) => service._id !== id
            );
            setServices(newServices);
          }
        }
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-10">
      {services?.length === 0 && (
        <div className="flex justify-center items-center">
          <h3 className="text-3xl">Yet no service added. Please add one.</h3>
        </div>
      )}
      {services?.map((service) => (
        <ManageServiceCard
          key={service._id}
          service={service}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ManageServicesCardContainer;
