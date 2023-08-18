import React, { useState } from "react";

const Settings = () => {
  const [formData, setFormData] = useState({
    email: "user@example.com",
    username: "username123",
    password: "********",
    address: "123 Main St, City, Country",
    phoneNumber: "123-456-7890",
  });

  const [editableFields, setEditableFields] = useState({
    email: false,
    username: false,
    password: false,
    address: false,
    phoneNumber: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEdit = (field) => {
    setEditableFields((prevFields) => ({
      ...prevFields,
      [field]: true,
    }));
  };

  const handleSubmit = (e, field) => {
    e.preventDefault();
    setEditableFields((prevFields) => ({
      ...prevFields,
      [field]: false,
    }));
    // You can add your logic here to submit the updated field
    console.log("Updated field:", field);
  };

  return (
      <div className="bg-white p-6 rounded-md shadow-md w-full md:w-2/3 md:mx-auto lg:w-1/2 xl:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Email
            </label>
            <div className="flex">
              {editableFields.email ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
                />
              ) : (
                <div className="flex-grow">{formData.email}</div>
              )}
              <button
                type="button"
                onClick={() => handleEdit("email")}
                className="ml-2 text-gray-600 hover:text-green-500"
              >
                Edit
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Username
            </label>
            <div className="flex">
              {editableFields.username ? (
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
                />
              ) : (
                <div className="flex-grow">{formData.username}</div>
              )}
              <button
                type="button"
                onClick={() => handleEdit("username")}
                className="ml-2 text-gray-600 hover:text-green-500"
              >
                Edit
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Password
            </label>
            <div className="flex">
              {editableFields.password ? (
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
                />
              ) : (
                <div className="flex-grow">********</div>
              )}
              <button
                type="button"
                onClick={() => handleEdit("password")}
                className="ml-2 text-gray-600 hover:text-green-500"
              >
                Edit
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Address
            </label>
            <div className="flex">
              {editableFields.address ? (
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
                  rows="3"
                />
              ) : (
                <div className="flex-grow">{formData.address}</div>
              )}
              <button
                type="button"
                onClick={() => handleEdit("address")}
                className="ml-2 text-gray-600 hover:text-green-500"
              >
                Edit
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Phone Number
            </label>
            <div className="flex">
              {editableFields.phoneNumber ? (
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
                />
              ) : (
                <div className="flex-grow">{formData.phoneNumber}</div>
              )}
              <button
                type="button"
                onClick={() => handleEdit("phoneNumber")}
                className="ml-2 text-gray-600 hover:text-green-500"
              >
                Edit
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-600 transition duration-300 w-full"
          >
            Save Changes
          </button>
        </form>
      </div>
  );
};

export default Settings;
