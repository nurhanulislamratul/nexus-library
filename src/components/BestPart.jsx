import { useRef } from "react";
import BannarAnimation from "../assets/support.json";
import Lottie from "lottie-react";
const BestPart = () => {
  const erAnimation = useRef(null);
  const style = {
    width: "100%",
    height: "400px",
    margin: "0 auto",
    maxWidth: "600px",
  };
  return (
    <div className="px-4 rounded-md">
      <div className="w-full flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center bg-orange-200 dark:bg-slate-800 rounded-md">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
              Our Best Parts
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Count on 24/7 support
            </p>
            <div className="grid gap-3 sm:gap-6 mt-8 sm:grid-cols-2">
              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Comprehensive Repair Services</span>
              </div>

              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Expert Technicians</span>
              </div>

              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Transparent Pricing</span>
              </div>

              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Quality Parts</span>
              </div>

              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Track Repair Status</span>
              </div>

              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Secure Payment Options</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <Lottie
            animationData={BannarAnimation}
            style={style}
            lottieRef={erAnimation}
            onLoopComplete={() => {
              erAnimation.current.setDirection(1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BestPart;
