import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowAltCircleUp } from "react-icons/fa";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-8 flex justify-between items-center">
          <div className="flex items-center">
            {/* <img className="w-32" src="./streamlineddocs-logo.svg" alt="" /> */}
            <h4 className="font-semibold text-2xl">Streamlined</h4>
          </div>

          <div className="md:hidden">
            {isMenuOpen ? (
              <FaArrowAltCircleUp
                onClick={toggleMenu}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <GiHamburgerMenu
                onClick={toggleMenu}
                className="text-2xl cursor-pointer"
              />
            )}
          </div>

          <nav className={`md:block ${isMenuOpen ? "block" : "hidden"} md:flex mt-4 md:mt-0`}>
            <div className="md:flex md:space-x-4">
              <Link
                to="/"
                className="block mt-4 md:inline-block md:mt-0 text-gray-700 font-semibold hover:text-green-500"
              >
                Home
              </Link>
              <div id="google_translate_element"></div>

              <Link
                to="apply"
                className="block mt-4 md:inline-block md:mt-0 text-gray-700 font-semibold hover:text-green-500"
              >
                Apply
              </Link>
              <Link
                to="#"
                className="block mt-4 md:inline-block md:mt-0 text-gray-700 font-semibold hover:text-green-500"
              >
                Renew
              </Link>
              <Link
                to="#"
                className="block mt-4 md:inline-block md:mt-0 text-gray-700 font-semibold hover:text-green-500"
              >
                Status
              </Link>
              <Link
                to="/auth"
                className="block mt-4 md:inline-block md:mt-0 bg-green-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-green-600 transition duration-300"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
