import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useUser from "../../hooks/useUser";

const Sidebar = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  //   console.log(user);
  const from = "/";

  const signOut = () => {
    logOut()
      .then(() => navigate(from))
      .catch((err) => console.log(err));
  };

  const { user } = useContext(AuthContext);

  const [User] = useUser();

 const isAdmin = User?.isAdmin;
const photoURL = User?.photoURL;
 
 // const User = Users.filter(ins => ins.email === user?.email);


  return (
    <div className=" lg:min-h-screen">
      <div className="grid   md:flex px-8  md:flex-col justify-between  md:justify-start text-black  pt-10">
        <div className="hidden lg:flex md:flex-wrap lg:flex-wrap lg:items-center lg:gap-4 pb-5">
         { user  && (<img
            src={user.photoURL}
            className="w-36 h-36 rounded-full shadow-sm"
            alt=""
          />)
         }
        { !user && (
          <img
            src='https://i.ibb.co/PwHygL1/image.png'
            className="w-36 h-36 rounded-full shadow-sm"
            alt=""
          />
        )
        }
       
        
          <div>
            <p>{user?.email}</p>
          </div>
        </div>
        <div>
          {/* <Link to="/" className="block mb-4">
            Homepage
          </Link> */}
          {user && isAdmin &&(
            <>
              <Link to="/dashboard/admin" className="block mb-4">
                Dashboard
              </Link>
              <Link to="/dashboard/pending_application" className="block mb-4">
                Pending Correction Applications
              </Link>
              <Link to="/dashboard/approved_application" className="block mb-4">
                Approved Correction Applications
              </Link>
              <Link to="/dashboard/rejected_application" className="block mb-4">
                Rejected Correction Applications
              </Link>
            </>
          )} 
          { user && !isAdmin &&(
            <>
              <Link to="/dashboard/user" className="block mb-4">
                Dashboard
              </Link>

              <Link to="/dashboard/seedetails" className="block mb-4">
                View NID Profile
              </Link>
              <Link to="/dashboard/create_profile" className="block mb-4">
                Create NID Profile
              </Link>
              <Link to="/dashboard/users_edit_profile" className="block mb-4">
                Edit NID Profile
              </Link>
              <Link to="/dashboard/progress_check" className="block mb-4">
               Check NID Correction Progress 
              </Link>
            </>
          )}
        
          <div className="mb-4 cursor-pointer " onClick={signOut}>
            Sign out
          </div>
        </div>
        <div className="lg:hidden flex flex-wrap items-center  gap-2 pb-5">
          <img
            src={user?.photoURL}
            className="w-12 h-12 rounded-full shadow-sm"
            alt=""
          />
          <div>
            <p>{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
