import { BsQuestionCircle } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";

const MediumNavbar = () => {
    return (
        <div className="flex gap-5 md:gap-8">
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
            <FiMessageSquare className="cursor-pointer" />
            <span className=" absolute top-0 right-0 translate-x-1/2  -translate-y-1/2 flex justify-center items-center bg-red-500 text-white w-8 h-8 rounded-full object-center">
              1
            </span>
          </div>
        </div>
    );
};

export default MediumNavbar;