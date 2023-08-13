import { Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <div className="w-full bg-white py-2">
        <div className="flex justify-between px-8 pt-5">
          <p className="text-3xl font-bold ">Streamlined Docs</p>
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
      <div className="grid grid-cols-4 ">
        <div className="bg-green-700 col-span-1 h-screen shadow-lg">
          <div className="flex flex-col items-center justify-center h-screen text-white">
                <Link to='/dashboard/application' className="block mb-4">Apply</Link>
                <Link to='/dashboard/status' className="block mb-4">Status</Link>
          </div>
        </div>
        <div className="bg-slate-200 col-span-3 p-4">
          <div className="my-24 w-4/5 mx-auto bg-yellow-400">
            <div className="flex justify-start items-start">
                hello
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
