import React, { useState } from "react";

import AddressInfo from "../../../shared/addressinfo/AddressInfo";
import IdentificationInfo from "../../../shared/identificationinfo/IdentificationInfo";
import PersonalInformation from "../../../shared/personalinfo/PersonalInformation";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    nameEnglish: "",
    fatherName: "",
    fatherNameEnglish: "",
    motherName: "",
    motherNameEnglish: "",
    education: "",
    occupation: "",
    religion: "",
    phone: "",
    drivingLicense: "",
    passportNumber: "",
    tinNumber: "",
    identificationMark: "",
    division: "",
    district: "",
    upzilla: "",
    policeStation: "",
    postCode: "",
    postOffice: "",
    holdingNumber: "",
    voterArea: "",
    villageRoad: "",
    profilePicture: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: file,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Create a FormData object to send the file and other fields
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      // Make a POST request to your backend API
      const response = await fetch(
        "http://localhost:5000/api/pending_profiles",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      // Handle successful submission
      setIsSubmitting(false);
      console.log("Profile updated successfully!");
    } catch (err) {
      // Handle errors
      setIsSubmitting(false);
      setError(err.message || "An error occurred");
    }
  };

  return (
    <div>
      <div className="bg-white w-full md:max-w-5xl md:mx-auto rounded-md md:p-12 px-4">
        <div>
          <p className="text-2xl font-bold">
            Please fill up your profile information
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <PersonalInformation onChange={handleInputChange} />
          <div className="py-2 my-8 border-b-2 border-blue-700">
            <p className=" font-bold text-base">Identification Information</p>
          </div>
          <IdentificationInfo onChange={handleInputChange} />
          <div className="py-2 my-8 border-b-2 border-blue-700">
            <p className="font-bold text-base">Address Information</p>
          </div>
          <AddressInfo onChange={handleInputChange} />

          <div className="flex items-center justify-between pt-4">
            <input
              type="file"
              name="profilePicture"
              id="profile-picture"
              onChange={handleFileChange}
            />
            <button
              type="submit"
              className="bg-blue-700 px-4 py-2 mt-4 text-end rounded-md text-white font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
