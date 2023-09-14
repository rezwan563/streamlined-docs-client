import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAdmin from "../../hooks/useAdmin";

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
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  return (
    <div className=" lg:min-h-screen">
      <div className="grid   md:flex px-8  md:flex-col justify-between  md:justify-start text-black  pt-10">
        <div className="hidden lg:flex md:flex-wrap lg:flex-wrap lg:items-center lg:gap-4 pb-5">
          <img
            src={user?.photoURL}
            className="w-36 h-36 rounded-full shadow-sm"
            alt=""
          />
          <div>
            <p>{user?.email}</p>
          </div>
        </div>
        <div>
          <Link to="/" className="block mb-4">
            Homepage
          </Link>
          {isAdmin ? (
            <>
              {" "}
              <Link to="/dashboard/admin" className="block mb-4">
                Dashboard
              </Link>
              <Link to="/dashboard/pending_application" className="block mb-4">
                Pending Application
              </Link>
              <Link to="/dashboard/approved_application" className="block mb-4">
                Approved Application
              </Link>
              <Link to="/dashboard/rejected_application" className="block mb-4">
                Rejected Application
              </Link>
            </>
          ) : (
              ""
          )}
          {isAdmin ? (
            ""
          ) : (
            <>
              <Link to="/dashboard/user" className="block mb-4">
                Dashboard
              </Link>

              <Link to="/dashboard/create_profile" className="block mb-4">
                Create Profile
              </Link>
            </>
          )}

          {/* This will be admin link. Only admin can go to this route */}
          {/* <Link to="/dashboard/pending_documents" className="block mb-4">
              Pending Documents
            </Link> */}
          {/* TODO: Finish backend code */}
          {/* <Link to="/dashboard/upload" className="block mb-4">
            Documents Upload
          </Link> */}

          {/* <Link to="/dashboard/progress" className="block mb-4">
            Correction Progress
          </Link>
          <Link to="/dashboard/settings" className="block mb-4">
            Settings
          </Link> */}
          <div className="mb-4 cursor-pointer " onClick={signOut}>
            Sign out
          </div>
        </div>
        <div className="lg:hidden flex flex-wrap items-center  gap-2 pb-5">
          <img
            src={user?.email}
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
