import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropsTypes from "prop-types";
import { RotatingLines } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading)
    return (
      <div className="flex justify-center items-center py-32">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
  }

  return <div>{children}</div>;
};

PrivateRoute.propTypes = {
  children: PropsTypes.node,
};

export default PrivateRoute;
