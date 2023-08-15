import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <div className="w-full bg-white py-2">
        <div className="flex justify-between px-8 pt-5">
          <p className="text-3xl font-bold ">Streamlined Docs</p>
          <p className="text-3xl font-bold">Dashboard</p>
          <input
            type="search"
            name="search"
            id=""
            placeholder="search"
            className="px-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
          />
          <select className="block w-fit px-4 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent">
            <option value="Bangla" className="py-1">
              Bangla
            </option>
            <option value="English" className="py-1">
              English
            </option>
          </select>
          <img
            src="https://i.ibb.co/64jgrXk/istockphoto-1335941248-612x612.jpg"
            alt=""
            className="w-12 h-12 rounded-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-5 ">
        <div className="bg-white col-span-1 h-screen shadow-lg rounded-md">
          <Link to='/dashboard' className="block bg-green-500 w-1/2 my-5 mx-auto p-3 rounded-md text-white text-center font-bold shadow-lg hover:bg-green-400 cursor-pointer ">
            Dashboard
          </Link>
          <div className="flex flex-col  justify-start text-black w-1/2 mx-auto pt-10">
            <Link to="/dashboard/new_application" className="block mb-4">
              New Application
            </Link>
            <Link to="/dashboard/all_documents" className="block mb-4">
              All Documents
            </Link>
            <Link to="/dashboard/pending_documents" className="block mb-4">
              Pending Documents
            </Link>
            <Link to="/dashboard/upload" className="block mb-4">
              Documents Upload
            </Link>

            <Link to="/dashboard/progress" className="block mb-4">
              Correction Progress
            </Link>
            <Link to="/dashboard/settings" className="block mb-4">
              Settings
            </Link>
            <div className="mb-4 cursor-pointer ">Sign out</div>
          </div>
        </div>
        <div className="bg-gray-100 col-span-4 py-24 px-12 ">
          {/* Content goes here */}
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;