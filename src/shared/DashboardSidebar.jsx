import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import SidebarButton from "./SidebarButton";

const DashboardSidebar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);
  const from = "/";
  

  const signOut = () => {
    logOut()
      .then(() => navigate(from))
      .catch((err) => console.log(err));
  };
  return (
    <div
      className={`bg-white md:translate-x-0 w-1/2  md:w-full  md:col-span-1 min-h-screen shadow-xl border-r-2 rounded-md `}
    >
      <Link
        to="/dashboard"
        className="flex bg-green-500 w-1/2 my-5 mx-auto p-3 rounded-md text-white text-center font-bold shadow-lg hover:bg-green-400 cursor-pointer "
      >
        Dashboard
      </Link>
      <div className="flex flex-col  justify-start text-black w-1/2 mx-auto pt-10">
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
  );
};

export default DashboardSidebar;
