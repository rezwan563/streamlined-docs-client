import { BsQuestionCircle } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const DesktopNavbar = () => {
  return (
    <div className="lg:px-16 flex justify-between items-center">
      <div className="hidden lg:flex lg:gap-16">
        <Link
                to="/"
                className="block mt-4 md:inline-block md:mt-0 text-gray-700 font-semibold hover:text-green-500"
              >
              <p className="text-3xl font-semibold">Streamlined Docs</p>
              </Link>
        <p className="text-4xl font-bold">Dashboard</p>
      </div>
      {/* <div className="hidden  lg:flex lg:gap-8 text-4xl">
        <div className="relative">
          <IoMdNotificationsOutline className="cursor-pointer" />
          <span className=" absolute top-0 right-0 translate-x-1/2  -translate-y-1/2 flex justify-center items-center bg-red-500 text-white w-8 h-8 rounded-full object-center">
            1
          </span>
        </div>
        <div>
          <BsQuestionCircle className="cursor-pointer" />
        </div>
         <div className="relative">
          <Link to="/dashboard/chat">
            <FiMessageSquare className="cursor-pointer" />
          </Link>
          <span className=" absolute top-0 right-0 translate-x-1/2  -translate-y-1/2 flex justify-center items-center bg-red-500 text-white w-8 h-8 rounded-full object-center">
            1
          </span>
        </div> 
      </div> */}
    </div>
  );
};

export default DesktopNavbar;
