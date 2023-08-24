import { useContext, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const DashboardLayout = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(user);
  const from = "/";
  const [isClicked, setIsClicked] = useState(false);

  const signOut = () => {
    logOut()
      .then(() => navigate(from))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="w-full bg-white py-2">
        <div className="flex justify-between md:px-8 pt-5">
          {/* <p className="text-3xl font-bold ">Streamlined Docs</p> */}
          <p className="text-3xl font-bold">Dashboard</p>
          <input
            type="search"
            name="search"
            id=""
            placeholder="search"
            className="hidden md:block px-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
          />
          <select className="hidden md:block w-fit px-4 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent">
            <option value="Bangla" className="py-1">
              Bangla
            </option>
            <option value="English" className="py-1">
              English
            </option>
          </select>
          <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-full" />
        </div>
      </div>
      <div className="grid grid-rows-2 md:grid-cols-5">
        <div
          className={`bg-white  md:block order-1 md:order-none md:col-span-1 md:min-h-screen  shadow-xl border-r-2 rounded-md `}
        >
          <Link
            to="/dashboard"
            className="flex bg-green-500 w-1/2 my-5 mx-auto p-3 rounded-md text-white text-center font-bold shadow-lg hover:bg-green-400 cursor-pointer "
          >
            Dashboard
          </Link>
          
          <div className="grid grid-cols-3  md:flex md:flex-col  md:justify-start text-black md:w-1/2 mx-auto pt-10">
            <Link to="/dashboard/my-details" className="block mb-4">
              My Details
            </Link>
            <Link to="/dashboard/all_documents" className="block mb-4">
              All Documents
            </Link>
            {/* This will be admin link. Only admin can go to this route */}
            {/* <Link to="/dashboard/pending_documents" className="block mb-4">
              Pending Documents
            </Link> */}
            <Link to="/dashboard/upload" className="block mb-4">
              Documents Upload
            </Link>

            <Link to="/dashboard/progress" className="block mb-4">
              Correction Progress
            </Link>
            <Link to="/dashboard/settings" className="block mb-4">
              Settings
            </Link>
            <div className="mb-4 cursor-pointer " onClick={signOut}>
              Sign out
            </div>
          </div>
        </div>

        <div className="bg-gray-100 md:col-span-4 py-24 px-12 ">
          <button
            onClick={() => setIsClicked(!isClicked)}
            className="mb-4 md:hidden px-3 py-1 bg-blue-600 text-white rounded-md"
          >
            {isClicked ? "Close Sidebar" : "Open Sidebar"}
          </button>

          {/* Content goes here */}

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
