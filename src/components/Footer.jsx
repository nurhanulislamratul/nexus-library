import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white px-4 dark:bg-gray-900 py-5">
      <div className=" flex flex-col sm:flex-row sm:justify-between items-center text-center gap-2">
        <div className="">
          <Link to="/" className="cursor-pointer">
            <img
              className="w-auto h-12"
              src="https://i.ibb.co/j5Sqs26/logo.png"
              alt=""
            />
          </Link>
        </div>

        <div>
          <p className="max-w-md text-slate-800 dark:text-slate-300">
            <strong>Office Address.</strong> Level-4, 34, Awal Centre, Banani,
            Dhaka;
          </p>
        </div>
        <div className="flex">
          <Link
            to="https://www.facebook.com/juboraj.sujon/"
            className="mx-1 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 border-2 p-2 border-transparent hover:border-orange-400"
            target="_blank"
            aria-label="Reddit">
            <FaFacebookF
              size={20}
              className="text-slate-800 dark:text-slate-300"
            />
          </Link>

          <Link
            to="https://www.linkedin.com/in/sujonmiah/"
            className="mx-1 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 border-2 p-2 border-transparent hover:border-orange-400"
            target="_blank"
            aria-label="Facebook">
            <FaLinkedin
              size={20}
              className="text-slate-800 dark:text-slate-300"
            />
          </Link>
        </div>
      </div>

      <hr className="h-px my-3 bg-gray-200 border-none dark:bg-gray-700" />

      <div className="text-center">
        <p className="mb-0 text-slate-800 dark:text-slate-300">
          {new Date().getFullYear()}@ FixNexus. Design with{" "}
          <IoIosHeart className="inline-block text-red-500" size={20} /> by{" "}
          <Link
            to={"https://github.com/JuborajSujon"}
            target="_blank"
            className="text-reset underline">
            JuborajSujon
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
