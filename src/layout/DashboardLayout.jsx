import { useContext } from "react";
import {  Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Sidebar from "../shared/Sidebar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  
  return (
    <div>
      <div className="w-full bg-white py-2">
        <div className="flex justify-between md:px-8 pt-5">
          {/* <p className="text-3xl font-bold ">Streamlined Docs</p> */}
          <p className="text-3xl font-bold">Dashboard</p>
          {/* <input
            type="search"
            name="search"
            id=""
            placeholder="search"
            className="hidden md:block px-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
          /> */}
          {/* <select className="hidden md:block w-fit px-4 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent">
            <option value="Bangla" className="py-1">
              Bangla
            </option>
            <option value="English" className="py-1">
              English
            </option>
          </select> */}
          <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-full" />
        </div>
      </div>
      {/* for small device grid row and outlet at top */}
      <div className="grid grid-rows-3">
        <div className="md:hidden row-span-2 bg-gray-100 px-24 py-12">
          <Outlet/>
        </div>
        <div className="md:hidden ">
          <Sidebar/>
        </div>
      </div>
      {/* for medium and large device sidebar and outlet  */}
      <div className="grid grid-cols-5">
          <div className="hidden md:block min-h-screen col-span-1">
            <Sidebar/>
          </div>
          <div className="hidden md:block bg-gray-100 col-span-4">
            <div className="py-24 px-12">
            <Outlet/>
            </div>
          </div>
      </div>
    
    </div>
  );
};

export default DashboardLayout;


 {/* <div className="min-h-screen ">
          <Sidebar />
        </div> */}
        {/* <div className="bg-gray-100 md:col-span-4 py-24 px-12 ">

          <Outlet />
        </div> */}