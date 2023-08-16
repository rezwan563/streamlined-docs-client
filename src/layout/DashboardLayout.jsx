import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languageTexts = {
    English: {
      dashboard: "Dashboard",
      newApplication: "New Application",
      allDocuments: "All Documents",
      pendingDocuments: "Pending Documents",
      upload: "Documents Upload",
      progress: "Correction Progress",
      settings: "Settings",
      signOut: "Sign out",
    },
    Bangla: {
      dashboard: "ড্যাশবোর্ড",
      newApplication: "নতুন আবেদন",
      allDocuments: "সমস্ত ডকুমেন্ট",
      pendingDocuments: "মুলতুবি ডকুমেন্ট",
      upload: "ডকুমেন্ট আপলোড",
      progress: "সংশোধন অগ্রগতি",
      settings: "সেটিংস",
      signOut: "সাইন আউট",
    },
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const getText = (key) => languageTexts[selectedLanguage][key];

  return (
    <div>
      <div className="w-full bg-white py-2">
        <div className="flex justify-between px-8 pt-5">
          <p className="text-3xl font-bold ">Streamlined Docs</p>
          <p className="text-3xl font-bold">{getText("dashboard")}</p>
          <input
            type="search"
            name="search"
            id=""
            placeholder={getText("search")}
            className="px-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
          />
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="block w-fit px-4 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
          >
            <option value="Bangla">{getText("Bangla")}Bangla</option>
            <option value="English">{getText("English")}English</option>
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
          <Link
            to="/dashboard"
            className="block bg-green-500 w-1/2 my-5 mx-auto p-3 rounded-md text-white text-center font-bold shadow-lg hover:bg-green-400 cursor-pointer "
          >
            {getText("dashboard")}
          </Link>
          <div className="flex flex-col  justify-start text-black w-1/2 mx-auto pt-10">
            <Link to="/dashboard/new_application" className="block mb-4">
              {getText("newApplication")}
            </Link>
            <Link to="/dashboard/all_documents" className="block mb-4">
              {getText("allDocuments")}
            </Link>
            <Link to="/dashboard/pending_documents" className="block mb-4">
              {getText("pendingDocuments")}
            </Link>
            <Link to="/dashboard/upload" className="block mb-4">
              {getText("upload")}
            </Link>
            <Link to="/dashboard/progress" className="block mb-4">
              {getText("progress")}
            </Link>
            <Link to="/dashboard/settings" className="block mb-4">
              {getText("settings")}
            </Link>
            <div className="mb-4 cursor-pointer ">{getText("signOut")}</div>
          </div>
        </div>
        <div className="bg-gray-100 col-span-4 py-24 px-12 ">
          {/* Content goes here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
