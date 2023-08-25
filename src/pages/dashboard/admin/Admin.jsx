import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [viewingPassportApplications, setViewingPassportApplications] = useState(false);

  useEffect(() => {
    // Fetch the user data from the public directory
    fetch('/users.json')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleViewPassportApplications = () => {
    setViewingPassportApplications(true);
  };

  const handleViewCorrectionApplications = () => {
    setViewingPassportApplications(false);
  };

  // Filter users based on the application type
  const filteredUsers = viewingPassportApplications
    ? users.filter((user) => user.appliedForPassport)
    : users.filter((user) => user.appliedForCorrection);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
      <div className="flex space-x-4">
        <button
          onClick={handleViewPassportApplications}
          className={`${
            viewingPassportApplications ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          } px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          View Passport Applications
        </button>
        <button
          onClick={handleViewCorrectionApplications}
          className={`${
            !viewingPassportApplications ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          } px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          View Correction Applications
        </button>
      </div>
      {filteredUsers.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">
            {viewingPassportApplications ? 'Passport Applications' : 'Correction Applications'}
          </h2>
          <ul>
            {filteredUsers.map((user, index) => (
              <li key={index} className="flex items-center space-x-4 mt-2">
                <img
                  src={user.profilePicture}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <p>{user.name}</p>
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  // You can implement an onClick handler for the Details button
                >
                  Details
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Admin;
