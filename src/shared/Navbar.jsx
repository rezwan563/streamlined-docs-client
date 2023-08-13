import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);
  return (
    <nav>
      <header className="bg-white shadow-md">
        <div className={`container mx-auto py-4 px-8 flex justify-between items-center`}>
          <img src="passport-logo.png" alt="Passport Logo" className="w-20" />
          <GiHamburgerMenu onClick={() => setIsClicked(!isClicked)} className="md:hidden text-2xl cursor-pointer"/>
          <nav className={`space-x-4 md:block ${isClicked ? '': 'hidden'}`}>
            <div className="">
            <Link
              to="/"
              className="text-gray-700 font-semibold hover:text-green-500"
            >
              Home
            </Link>
            <Link
              to="#"
              className="text-gray-700 font-semibold hover:text-green-500"
            >
              Apply
            </Link>
            <Link
              to="#"
              className="text-gray-700 font-semibold hover:text-green-500"
            >
              Renew
            </Link>
            <Link
              to="#"
              className="text-gray-700 font-semibold hover:text-green-500"
            >
              Status
            </Link>
            <Link
              to="/login"
              className="text-gray-500 font-semibold hover:underline"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-green-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-green-600 transition duration-300"
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
