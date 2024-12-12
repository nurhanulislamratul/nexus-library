import { Link } from "react-router-dom";
import PropsTypes from "prop-types";

const Slide = ({ image, text, desc }) => {
  return (
    <div
      className="w-full bg-center rounded-md bg-cover h-[38rem]"
      style={{
        backgroundImage: `url(${image})`,
      }}>
      <div className=" w-full h-full bg-gray-900/70">
        <div className="w-full h-full flex flex-col gap-10 justify-center md:ml-20 px-6">
          <div className="">
            <h1 className="text-3xl max-w-3xl font-semibold text-white lg:text-5xl ">
              {text}
            </h1>
            <p className="text-white mt-4 max-w-xl ">{desc}</p>
          </div>
          <div>
            <Link
              to="/services"
              className="relative inline-flex items-center justify-start px-2 sm:px-6 py-1.5 sm:py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-orange-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Find Services
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Slide.propTypes = {
  image: PropsTypes.string,
  text: PropsTypes.string,
};

export default Slide;
