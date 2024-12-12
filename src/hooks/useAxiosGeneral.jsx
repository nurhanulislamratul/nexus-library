import axios from "axios";

const useAxiosGeneral = () => {
  const axiosGeneral = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  return axiosGeneral;
};

export default useAxiosGeneral;
