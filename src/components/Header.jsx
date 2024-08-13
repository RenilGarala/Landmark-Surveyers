import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { useState } from "react";

const Header = () => {
  //   const [btnName, setBtnName] = useState("LOG IN");
  const [isClicked, setIsClicked] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 90);
  };

  return (
    <div>
      <div
        data-aos="fade-down"
        className="fixed top-0 left-0 w-full z-10 flex justify-between px-32 lg:px-20 md:px-16 sm:px-7 items-center h-20 bg-white text-black border-b-2 border-gray-100"
      >
        <div className="flex justify-center items-center gap-3">
          <div className="max-w-14 lg:w-12 sm:w-10">
            <img src="https://media.istockphoto.com/id/1206058752/vector/surveying-and-cartography-design-symbol-for-business.jpg?s=612x612&w=0&k=20&c=6T8FjQZ8j2DrwnwSY9UFrpLN13qVfuS8Y5BH0MEaV6o=" />
          </div>
          <div className="text-xl lg:text-lg sm:text-base">Landmark Surveyors</div>
        </div>
        <div className="flex justify-center items-center gap-10">
          <div className="lg:hidden flex gap-10 text-lg">
            <div className="hover:border-b border-black">Home</div>
            <div className="hover:border-b border-black">About us</div>
          </div>
          <div className="hidden lg:block pt-2">
            <button
              className="text-lg hover:text-green-700 "
              onClick={() => setIsPopupOpen(!isPopupOpen)}
            >
              {/* {FaList} */}
              <img
                className="sm:w-4"
                width="20"
                height="20"
                src="https://img.icons8.com/ios/50/menu--v1.png"
                alt="menu--v1"
              />
            </button>
          </div>
          <div className="lg:hidden">
            <button
              className={`px-5 py-2 w-auto bg-black hover:bg-gray-700 text-white font-medium text-sm tracking-wider rounded-full transition duration-300 transform ${
                isClicked ? "scale-95" : ""
              }`}
              onClick={handleClick}
            >
              Request For demo
            </button>
          </div>
        </div>

        {isPopupOpen && (
          <div className="absolute top-20 mt-3 right-8 w-auto min-w-52 bg-white border border-gray-100 rounded-lg shadow-lg p-5 lg:flex lg:flex-col gap-4 hidden">
            <div className="hover:border-b border-black">Home</div>
            <div className="hover:border-b border-black">About us</div>
            <div className="flex justify-center">
              <button
                className={`px-5 py-2 w-auto bg-black hover:bg-gray-700 text-white font-medium text-sm tracking-wider rounded-full transition duration-300 transform ${
                  isClicked ? "scale-95" : ""
                }`}
                onClick={handleClick}
              >
                Request For demo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
