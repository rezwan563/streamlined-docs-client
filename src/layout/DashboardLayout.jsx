import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Sidebar from "../shared/sidebar/Sidebar";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import { RiMenuFoldFill } from "react-icons/ri";
import { RiMenuUnfoldFill } from "react-icons/ri";
import DesktopNavbar from "../shared/desktopNavbar/DesktopNavbar";

const DashboardLayout = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  return (
    <nav className="px-8 lg:px-16 py-4 lg:py-8">
      {/* Desktop */}
      <DesktopNavbar/>
      <div className="hidden py-8 lg:block">
        <div className="grid grid-cols-5 min-h-screen">
          <div className="col-span-1">
            <Sidebar/>
          </div>
          <div className="col-span-4 bg-slate-100 px-8 py-12">
            <Outlet/>
          </div>
        </div>
      </div>
      {/* Medium device */}
      <div className="flex justify-between items-center py-8 lg:hidden  text-4xl">
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
        <div>
          <div className="flex">
            <RiMenuFoldFill className={`${isMenuClicked ? '' : 'hidden'}`} onClick={() => setIsMenuClicked(!isMenuClicked)} />
            <RiMenuUnfoldFill className={`${isMenuClicked ? 'hidden' : ''}`} onClick={() => setIsMenuClicked(!isMenuClicked)} />
          </div>
        
        </div>
      </div>
    </nav>
  );
};

export default DashboardLayout;
