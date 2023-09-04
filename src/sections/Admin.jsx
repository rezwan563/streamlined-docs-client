import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            viewingPassportApplications ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'
          } px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
        >
          View Passport Applications
        </button>
        <button
          onClick={handleViewCorrectionApplications}
          className={`${
            !viewingPassportApplications ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'
          } px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
        >
          View Correction Applications
        </button>
      </div>
      {filteredUsers.length > 0 && (
        <div className="mt-4 mx-auto">
          <h2 className="text-2xl font-semibold mb-2 text-center">
            {viewingPassportApplications ? 'Passport Applications' : 'Correction Applications'}
          </h2>
          <ul className='mx-auto flex flex-col justify-center items-center'>
            {filteredUsers.map((user, index) => (
              <li key={index} className="flex items-center p-2 border shadow-md w-[70%] space-x-4 mt-2">
               <div className='flex gap-5 items-center'>
               <p>{index +1}</p>
                <img
                  src={user.profilePicture}
                  alt={user.username}
                  className="w-16 h-14 rounded-full"
                />
               </div>
                <p>{user.username}</p>
                <Link to={`/admin/userdetail/${user.userId}`}>
                <button
                  className="px-3 py-1 bg-green-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  // You can implement an onClick handler for the Details button
                >
                  Details
                </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Admin;
