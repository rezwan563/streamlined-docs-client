import { useState } from "react";
import profileData from "./profileData.json";

function EditProfile() {
  const [formData, setFormData] = useState(profileData);
  const [editMode, setEditMode] = useState({});

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
    //ToDo
  };

  const handleFileUpload = (event, fieldName) => {
    const file = event.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: file,
    }));
  };

  const profileEntries = [
    { name: "Full Name", key: "fullName" },
    { name: "National ID Number", key: "nationalIdNumber" },
    { name: "Date of Birth", key: "dateOfBirth" },
    { name: "Gender", key: "gender" },
    { name: "Address", key: "address" },
    { name: "Issue Date", key: "issueDate" },
    { name: "Expiry Date", key: "expiryDate" },
    { name: "Issuing Authority", key: "issuingAuthority" },
    { name: "Citizenship", key: "citizenship" },
    { name: "Height", key: "height" },
    { name: "Eye Color", key: "eyeColor" },
    { name: "Blood Type", key: "bloodType" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
      <form className=" grid grid-cols-2 gap-6 gap-x-20">
        {profileEntries.map((entry) => (
          <div className="mb-4" key={entry.key}>
            <label htmlFor={entry.key} className="block font-semibold mb-1">
              {entry.name}
            </label>
            {editMode[entry.key] ? (
              entry.key === "address" ? (
                //separate fields
                <>
                  <input
                    type="text"
                    id={`${entry.key}-street`}
                    name={`${entry.key}.street`}
                    value={formData[entry.key]?.street}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-2"
                    placeholder="Street"
                  />
                  <input
                    type="text"
                    id={`${entry.key}-city`}
                    name={`${entry.key}.city`}
                    value={formData[entry.key]?.city}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-2"
                    placeholder="City"
                  />
                  <input
                    type="text"
                    id={`${entry.key}-state`}
                    name={`${entry.key}.state`}
                    value={formData[entry.key]?.state}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-2"
                    placeholder="State"
                  />
                  <input
                    type="text"
                    id={`${entry.key}-postalCode`}
                    name={`${entry.key}.postalCode`}
                    value={formData[entry.key]?.postalCode}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                    placeholder="Postal Code"
                  />
                </>
              ) : (
                //for text input
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
                  {entry.key === "address" ? (
                    //address fields
                    <>
                      <div>
                        {formData[entry.key]?.street},{" "}
                        {formData[entry.key]?.city},{" "}
                        {formData[entry.key]?.state},{" "}
                        {formData[entry.key]?.postalCode}
                      </div>
                    </>
                  ) : (
                    //edit separate text
                    formData[entry.key]
                  )}
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

        {/* File Upload */}
        <div className="mb-4">
          <label htmlFor="file1" className="block font-semibold mb-1">
            File 1
          </label>
          {editMode ? (
            <input
              type="file"
              id="file1"
              name="file1"
              onChange={(event) => handleFileUpload(event, "file1")}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            />
          ) : (
            <div>{formData.file1 && formData.file1.name}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="file1" className="block font-semibold mb-1">
            File 2
          </label>
          {editMode ? (
            <input
              type="file"
              id="file1"
              name="file1"
              onChange={(event) => handleFileUpload(event, "file1")}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            />
          ) : (
            <div>{formData.file1 && formData.file1.name}</div>
          )}
        </div>
        {/* Add More files */}
      </form>
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
