import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileData from "./profileData.json";

function ProfileSection() {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(profileData);
  }, []);

  const addressString =
    `${data.address?.street}, ${data.address?.city}, ${data.address?.state}, ${data.address?.postalCode}` ||
    "";

  const profileEntries = [
    { name: "Full Name", value: data.fullName },
    { name: "National ID Number", value: data.nationalIdNumber },
    { name: "Date of Birth", value: data.dateOfBirth },
    { name: "Gender", value: data.gender },
    { name: "Address", value: addressString },
    { name: "Issue Date", value: data.issueDate },
    { name: "Expiry Date", value: data.expiryDate },
    { name: "Issuing Authority", value: data.issuingAuthority },
    { name: "Citizenship", value: data.citizenship },
    { name: "Height", value: data.height },
    { name: "Eye Color", value: data.eyeColor },
    { name: "Blood Type", value: data.bloodType },
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <div className="flex justify-center items-center mb-6">
            <img
              src={data.photoUrl}
              alt="Profile"
              className="w-52 h-52 rounded-full border-2 border-gray-300"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {profileEntries.map((entry, index) => (
              <div key={index} className="mb-4 relative">
                <div className="absolute -top-6 left-0 text-sm font-semibold px-2 py-1 rounded-t-lg">
                  {entry.name}
                </div>
                <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-4">
                  {entry.value}
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="flex justify-center">
          <Link
            to="/dashboard/edit-profile"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Apply for changes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
