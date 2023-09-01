import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

import Loader from "../../../shared/Loader";

function ProfileSection() {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/details/${user.email}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((profileData) => {
          setData(profileData || {});
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
          setError(error);
          setLoading(false);
        });
    }
  }, [user?.email]);

  if (!user?.email) {
    return <div>You must be logged in to view this page.</div>;
  }

  if (loading) {
    return <Loader />;
  }

  if (error || Object.keys(data).length === 0) {
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
  const profileEntries = [
    { name: "Full Name", value: data.fullName },
    { name: "National ID Number", value: data.nationalIdNumber },
    { name: "Date of Birth", value: data.dob },
    { name: "Gender", value: data.gender },
    { name: "Address", value: data.address },
    { name: "Issue Date", value: data.issueDate },
    { name: "Expiry Date", value: data.expiryDate },
    { name: "Issuing Authority", value: data.auth },
    { name: "Citizenship", value: data.citizenship },
    { name: "Height", value: `${data.height} cm` },
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
            Apply for Edit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
