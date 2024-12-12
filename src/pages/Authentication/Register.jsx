import { FaArrowRight, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Register = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";
  const { googleLogin, createUser, updateUserProfile, user, setUser } =
    useAuth();

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    try {
      // create user from firebase
      const result = await createUser(email, password);
      await updateUserProfile(name, photo);

      // Optimistic UI - update state
      setUser({ ...result?.user, displayName: name, photoURL: photo });

      const { data } = await axiosSecure.post("/jwt", {
        email: result?.user?.email,
      });
      if (data.success) {
        toast.success("User Created Successfully", { autoClose: 1500 });
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, { autoClose: 1500 });
    }
  };

  // handle google login
  const handleGoogleLogin = async () => {
    try {
      // google sign in from firebase
      const result = await googleLogin();

      const { data } = await axiosSecure.post("/jwt", {
        email: result?.user?.email,
      });

      if (data.success) {
        toast.success("Login Successful", { autoClose: 1500 });
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, { autoClose: 1500 });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-170px)]">
      <Helmet>
        <title>FixNexus | Register</title>
      </Helmet>
      <div className="">
        <section className="max-w-4xl w-full p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <div>
            <h2 className="text-3xl font-semibold text-gray-700 capitalize dark:text-white">
              Register
            </h2>
            <p className="text-gray-500 dark:text-gray-300 mt-4">
              Enter your credentials to access FixNexus.
            </p>
            <div onClick={handleGoogleLogin}>
              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-md border border-n30 bg-white py-3">
                <FaGoogle className="text-green-500" />
                <span className="text-base font-bold dark:text-slate-900 ">
                  Google
                </span>
              </button>
            </div>
          </div>

          <div className="divider">or</div>

          <form onSubmit={handleRegister}>
            <div className="grid grid-cols-1 gap-3 mt-4 ">
              <div>
                <label
                  className="text-gray-900 font-bold dark:text-gray-200"
                  htmlFor="username">
                  Name
                </label>
                <input
                  id="username"
                  name="name"
                  type="text"
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-900 font-bold dark:text-gray-200"
                  htmlFor="userphoto">
                  Photo URL
                </label>
                <input
                  id="userphoto"
                  name="photo"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-900 font-bold dark:text-gray-200"
                  htmlFor="emailAddress">
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  name="email"
                  type="email"
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 font-bold dark:text-gray-200"
                  htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <FaArrowRight />
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <FaArrowRight className="text-red-600" />
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Register
                </span>
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center gap-2 py-3 text-sm font-medium">
            <p className="text-n300">Already have an account?</p>
            <Link to="/login" className="text-b300 underline" href="/sign-in">
              Login here
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
