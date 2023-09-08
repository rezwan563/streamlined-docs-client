import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const UserDetails = () => {
  const { userId } = useParams();
  const users = useLoaderData();
  const user = users.find((user) => user.userId === userId);
 console.log(user);
  const handleApprove = () => {
    updateUser(userId, { approved: true });
  };

  const handleFeedback = () => {
    // Implement your feedback mechanism here
  };

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">User Details</h1>
      <div className="flex items-center justify-center gap-10">
        <img
          src={user.profilePicture}
          alt={user.username}
          className="w-[300px] h-[300px] "
        />
        <div className='flex flex-col items-center gap-5'>
          <h2 className="text-xl font-semibold">{user.username}</h2>
          <p>Passport ID: {user.passportId}</p>
          <p>Address: {user.address}</p>
          <p>Birthdate: {user.birthdate}</p>
          <p>Father's Name: {user.fatherName}</p>
          <p>Mother's Name: {user.motherName}</p>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Documents for Verification:</h2>
        <div className="grid grid-cols-2 gap-4">
           {user.documents.map((document, index) => (
            <img
              key={index}
              src={document}
              alt={`Document ${index + 1}`}
              className="w-full h-auto"
            />
          ))} 
        </div>
      </div>
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={handleApprove}
        >
          Approve
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={handleFeedback}
        >
          Give Feedback
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
