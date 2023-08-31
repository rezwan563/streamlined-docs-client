
const AdminReview = ({ user }) => {
  return (
    <div className="p-6 border rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={user?.profilePicture}
          alt={user?.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <h2 className="text-lg font-semibold">{user?.name}</h2>
      </div>
      <div className="mb-4">
        <h3 className="text-md font-semibold mb-2">Documents for Verification:</h3>
        <div className="grid grid-cols-2 gap-4">
          {user?.documents.map((document, index) => (
            <img
              key={index}
              src={document}
              alt={`Document ${index + 1}`}
              className="w-full h-auto"
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-md font-semibold mb-2">Additional Information:</h3>
        <p className="mb-2">
          <span className="font-semibold">Date of Birth:</span> {user?.dateOfBirth}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Address:</span> {user?.address}
        </p>
        {/* Add more user? information here */}
      </div>
    </div>
  );
};

export default AdminReview;
