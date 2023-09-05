import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import Loader from "../../../shared/loader/Loader";
import useUserProfile from "../../../hooks/useProfileData";

// eslint-disable-next-line react/prop-types
function ProfileInfoSection({ title, data }) {
  return (
    <div className="mb-6">
      {/* <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{title}</h2> */}
      <div className="border border-indigo-200 rounded-lg shadow-md">
        {data.map((item, index) => (
          <div key={index} className="border-t border-indigo-200 flex p-3">
            <div className="flex-shrink-0 w-1/3">
              <p className="text-gray-600  font-semibold">{item.label}</p>
            </div>
            <div className="flex-grow">
              <p className="text-gray-800 text-lg">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function UserProfile() {
  const { data, loading, error } = useUserProfile();
  const [activeTab, setActiveTab] = useState(0);

  if (!data || !data.userEmail) {
    return <div>You must be logged in to view this page.</div>;
  }

  if (loading) {
    return <Loader />;
  }

  if (error || !data) {
    return (
      <section>
        <div className="flex justify-center items-center h-100 mt-28">
          <p className="text-center text-gray-500">
            Oops! Something went wrong or there is no profile data available.
          </p>
        </div>
        <div className="flex justify-center my-10">
          <Link
            to="/dashboard/edit-profile"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Apply for Profile Details
          </Link>
        </div>
        <p className="text-center text-gray-500">
          Or click edit profile on the left dashboard.
        </p>
      </section>
    );
  }

  const personalInfo = [
    {
      label: "Full Name (English)",
      value: data.personal_data[0]?.name_en || "-",
    },
    {
      label: "Full Name (Bengali)",
      value: data.personal_data[0]?.name_bn || "-",
    },
    { label: "Gender", value: data.personal_data[0]?.gender || "-" },
    { label: "Blood Group", value: data.personal_data[0]?.blood_group || "-" },
    { label: "Date of Birth", value: data.personal_data[0]?.dob || "-" },
    {
      label: "Birth Registration",
      value: data.personal_data[0]?.birth_registration || "-",
    },
    { label: "Birth Place", value: data.personal_data[0]?.birth_place || "-" },
    {
      label: "Father's Name (Bengali)",
      value: data.personal_data[0]?.father_name_bn || "-",
    },
    {
      label: "Mother's Name (Bengali)",
      value: data.personal_data[0]?.mother_name_bn || "-",
    },
  ];

  const identificationInfo = [
    {
      label: "Education (Bengali)",
      value: data.identification_data[0]?.education_bn || "-",
    },
    {
      label: "Occupation",
      value: data.identification_data[0]?.occupation || "-",
    },
    {
      label: "Mobile Number",
      value: data.identification_data[0]?.mobile_number || "-",
    },
    { label: "Religion", value: data.identification_data[0]?.religion || "-" },
    {
      label: "Passport Number",
      value: data.identification_data[0]?.passport_number || "-",
    },
    { label: "TIN", value: data.identification_data[0]?.tin || "-" },
    {
      label: "Identification Mark (Bengali)",
      value: data.identification_data[0]?.identification_mark_bn || "-",
    },
  ];

  const addressInfo = [
    { label: "Division", value: data.address_data[0]?.division || "-" },
    { label: "District", value: data.address_data[0]?.district || "-" },
    { label: "Upozila", value: data.address_data[0]?.upozila || "-" },
    {
      label: "Police Station",
      value: data.address_data[0]?.police_station || "-",
    },
    { label: "Post Code", value: data.address_data[0]?.post_code || "-" },
    {
      label: "Post Office",
      value: data.address_data[0]?.post_office_bn || "-",
    },
    { label: "Voter Area", value: data.address_data[0]?.voter_area || "-" },
    {
      label: "House Holding",
      value: data.address_data[0]?.house_holding_bn || "-",
    },
    {
      label: "Village Road",
      value: data.address_data[0]?.village_road_bn || "-",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between items-center px-4 py-2 bg-blue-100">
        <h1 className="text-4xl font-medium">User Profile</h1>
        <Link
          to="/dashboard/edit-profile"
          className="px-2 py-1 rounded bg-yellow-500 hover:bg-yellow-600"
        >
          Edit
        </Link>
      </div>
      <div className="container mx-auto px-4 py-8">
        <Tabs
          selectedIndex={activeTab}
          onSelect={(index) => setActiveTab(index)}
        >
          <TabList className="flex space-x-4">
            <Tab
              className={`px-4 py-2 text-xl rounded border border-blue-300 cursor-pointer hover:bg-blue-200 ${
                activeTab === 0 ? "font-bold border text-xl" : "text-base"
              }`}
            >
              Personal Information
            </Tab>
            <Tab
              className={`px-4 py-2 text-xl rounded border border-blue-300 cursor-pointer hover:bg-blue-200 ${
                activeTab === 1 ? "font-bold border text-xl" : "text-base"
              }`}
            >
              Identification Information
            </Tab>
            <Tab
              className={`px-4 py-2 text-xl rounded border border-blue-300 cursor-pointer hover:bg-blue-200 ${
                activeTab === 2 ? "font-bold border text-xl" : "text-base"
              }`}
            >
              Address Information
            </Tab>
          </TabList>
          <div className="mt-4">
            <TabPanel>
              <ProfileInfoSection
                title="Personal Information"
                data={personalInfo}
              />
            </TabPanel>
            <TabPanel>
              <ProfileInfoSection
                title="Identification Information"
                data={identificationInfo}
              />
            </TabPanel>
            <TabPanel>
              <ProfileInfoSection
                title="Address Information"
                data={addressInfo}
              />
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default UserProfile;
