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
import MediumNavbar from "../shared/mediumNavbar/MediumNavbar";

const DashboardLayout = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  return (
    <nav className="pt-4 lg:pt-8">
      {/* Desktop */}
      <div>
        <DesktopNavbar />
        <div className="hidden pt-8 lg:block">
          <div className="grid grid-cols-5 min-h-screen">
            <div className="col-span-1">
              <Sidebar />
            </div>
            <div className="col-span-4 bg-slate-100 px-8 py-12">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      {/* Medium device */}
      <div className="lg:hidden ">
        <div className="flex justify-between items-center px-2 py-8  text-4xl">
          <div>
            <MediumNavbar />
          </div>
          
          <div className="flex">
            <RiMenuFoldFill
              className={`${isMenuClicked ? "" : "hidden"}`}
              onClick={() => setIsMenuClicked(!isMenuClicked)}
            />
            <RiMenuUnfoldFill
              className={`${isMenuClicked ? "hidden" : ""}`}
              onClick={() => setIsMenuClicked(!isMenuClicked)}
            />
          </div>
          <div
            className={`lg:hidden z-50 fixed top-24 text-lg bg-white rounded-s-md h-screen w-3/4  transition ease-linear duration-150 underline ${
              isMenuClicked
                ? "  translate-x-36 "
                : " translate-x-[500px]"
            }`}
          >
            <Sidebar />
          </div>
        </div>
            <Outlet/>
      </div>
    </nav>
  );
};

export default DashboardLayout;
