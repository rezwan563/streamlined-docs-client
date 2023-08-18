import { useState, useEffect } from "react";

function EditProfile() {
  const [formData, setFormData] = useState({});
  const [editMode, setEditMode] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch initial profile data from the API endpoint
    fetch("http://localhost:5000/users/test@gmail.com")
      .then((response) => response.json())
      .then((profileData) => {
        setFormData(profileData);
        setLoading(false);
        setEditMode(
          Object.keys(profileData).reduce(
            (acc, key) => ({ ...acc, [key]: false }),
            {}
          )
        );
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
        setLoading(false);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditClick = (fieldName) => {
    setEditMode((prevMode) => ({
      ...prevMode,
      [fieldName]: true,
    }));
  };

  const handleSaveClick = () => {
    // Make the POST request to the desired endpoint
    fetch("http://localhost:5000/users", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        // Handle the response if needed
        console.log("Changes saved:", result);
      })
      .catch((error) => {
        console.error("Error saving changes:", error);
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
    // Add other profile entries
  ];

  return (
    <div className="container mx-auto px-4 py-8">
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
              {editMode[entry.key] ? (
                entry.key === "address" || entry.key === "photoUrl" ? (
                  <input
                    type={entry.key === "photoUrl" ? "url" : "text"}
                    id={entry.key}
                    name={entry.key}
                    value={formData[entry.key]}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                    placeholder={entry.name}
                  />
                ) : (
                  <input
                    type="text"
                    id={entry.key}
                    name={entry.key}
                    value={formData[entry.key]}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  />
                )
              ) : (
                <div className="flex items-center">
                  <div className="border border-gray-300 rounded-lg px-3 py-2 w-full">
                    {formData[entry.key]}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleEditClick(entry.key)}
                    className="ml-2 text-blue-500"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          ))}
        </form>
      )}
      <div className="flex justify-center mt-10">
        <button
          type="button"
          onClick={handleSaveClick}
          className={`${
            Object.values(editMode).some((val) => val) ? "block" : "hidden"
          } bg-blue-500 text-white px-4 py-2 rounded`}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
