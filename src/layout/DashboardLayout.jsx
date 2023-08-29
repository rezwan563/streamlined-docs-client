import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Sidebar from "../shared/sidebar/Sidebar";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import { RiMenuFoldFill } from "react-icons/ri";
import { RiMenuUnfoldFill } from "react-icons/ri";

const DashboardLayout = () => {
  // console.log(user);

  return (
    <nav className="lg:px-16 lg:py-8">
      <div className="flex justify-between">
        <div className="flex lg:gap-16">
          <p>Streamlined Docs</p>
          <p>Dashboard</p>
        </div>
        <div className="hidden  lg:flex lg:gap-4 text-4xl">
        <div className="relative">
            <IoMdNotificationsOutline  className="cursor-pointer"/>
            <span className=" absolute top-0 right-0 translate-x-1/2  -translate-y-1/2 flex justify-center items-center bg-red-500 text-white w-8 h-8 rounded-full object-center">1</span>
            
          </div>
          <div>
            <BsQuestionCircle className="cursor-pointer"/>
            
          </div>
          <div className="relative">
            <FiMessageSquare  className="cursor-pointer"/>
            <span className=" absolute top-0 right-0 translate-x-1/2  -translate-y-1/2 flex justify-center items-center bg-red-500 text-white w-8 h-8 rounded-full object-center">1</span>
            
          </div>
          <div className="lg:hidden">
            <RiMenuFoldFill />
          </div>
          <div className="lg:hidden">
            <RiMenuUnfoldFill />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardLayout;
