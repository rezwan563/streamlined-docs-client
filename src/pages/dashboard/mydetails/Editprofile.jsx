import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

function EditProfile() {
  const [formData, setFormData] = useState({
    fullName: "",
    nationalIdNumber: "",
    dob: "",
    gender: "",
    address: "",
    issueDate: "",
    expiryDate: "",
    auth: "",
    citizenship: "",
    height: "",
    eyeColor: "",
    bloodType: "",
    photoUrl: "",
  });

  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch(`${import.meta.env.VITE_SERVER_API}/edits/${user.email}`)
        .then((response) => response.json())
        .then((profileData) => {
          setFormData(profileData || {});
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
          setLoading(false);
        });
    }
  }, [user?.email]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    const formDataWithEmail = {
      ...formData,
      email: user.email,
    };

    const method = formData.id ? "PUT" : "POST";
    const endpoint = formData.id
      ? `${import.meta.env.VITE_SERVER_API}/edits/${user.email}`
      : `${import.meta.env.VITE_SERVER_API}/edits`;

    fetch(endpoint, {
      method: method,
      body: JSON.stringify(formDataWithEmail),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: `${method === "PUT" ? "Update" : "Update"} successful.`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          throw new Error("Profile update failed.");
        }
      })
      .catch((error) => {
        console.error(
          `Error ${method === "PUT" ? "updating" : "creating"} profile:`,
          error
        );
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Error ${method === "PUT" ? "updating" : "creating"} profile`,
        });
      });
  };

  const profileEntries = [
    { name: "Full Name", key: "fullName" },
    { name: "National ID Number", key: "nationalIdNumber" },
    { name: "Date of Birth", key: "dob" },
    { name: "Gender", key: "gender" },
    { name: "Address", key: "address" },
    { name: "Issue Date", key: "issueDate" },
    { name: "Expiry Date", key: "expiryDate" },
    { name: "Issuing Authority", key: "auth" },
    { name: "Citizenship", key: "citizenship" },
    { name: "Height", key: "height" },
    { name: "Eye Color", key: "eyeColor" },
    { name: "Blood Type", key: "bloodType" },
    { name: "Photo URL", key: "photoUrl" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <form className="grid grid-cols-2 gap-6 gap-x-20">
          {profileEntries.map((entry) => (
            <div className="mb-4" key={entry.key}>
              <label htmlFor={entry.key} className="block font-semibold mb-1">
                {entry.name}
              </label>
              {entry.key === "gender" ? (
                <select
                  id={entry.key}
                  name={entry.key}
                  value={formData[entry.key]}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              ) : entry.key === "dob" ||
                entry.key === "issueDate" ||
                entry.key === "expiryDate" ? (
                <input
                  type="date"
                  id={entry.key}
                  name={entry.key}
                  value={formData[entry.key]}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                />
              ) : (
                <input
                  type={entry.key === "photoUrl" ? "url" : "text"}
                  id={entry.key}
                  name={entry.key}
                  value={formData[entry.key]}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  placeholder={entry.name}
                />
              )}
            </div>
          ))}
        </form>
      )}
      <div className="flex justify-center mt-10">
        <button
          type="button"
          onClick={handleSaveClick}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
