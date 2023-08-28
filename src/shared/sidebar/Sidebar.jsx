import  { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Sidebar = () => {
    const {  logOut } = useContext(AuthContext);
  const navigate = useNavigate();
//   console.log(user);
  const from = "/";

  const signOut = () => {
    logOut()
      .then(() => navigate(from))
      .catch((err) => console.log(err));
  };
    return (
        <div
          className="px-4 md:px-8"
        >
          <Link
            to="/dashboard"
            className="flex bg-green-500 w-1/2 mx-auto lg:w-1/2 md:mx-auto my-5  p-3 rounded-md text-white text-center font-bold shadow-lg hover:bg-green-400 cursor-pointer "
          >
            Dashboard
          </Link>
          
          <div className="grid grid-cols-3  md:flex md:flex-col  md:justify-start text-black lg:w-1/2 lg:mx-auto pt-10">
            <Link to="/dashboard/my-details" className="block mb-4">
              My Details
            </Link>
            <Link to="/dashboard/all_documents" className="block mb-4">
              All Documents
            </Link>
            {/* This will be admin link. Only admin can go to this route */}
            {/* <Link to="/dashboard/pending_documents" className="block mb-4">
              Pending Documents
            </Link> */}
            <Link to="/dashboard/upload" className="block mb-4">
              Documents Upload
            </Link>

            <Link to="/dashboard/progress" className="block mb-4">
              Correction Progress
            </Link>
            <Link to="/dashboard/settings" className="block mb-4">
              Settings
            </Link>
            <div className="mb-4 cursor-pointer " onClick={signOut}>
              Sign out
            </div>
          </div>
        </div>
    );
};

export default Sidebar;