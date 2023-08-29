import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

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
  return (
    <div className=" lg:min-h-screen">
      <div className="grid   md:flex px-8  md:flex-col justify-between  md:justify-start text-black  pt-10">
        <div className="hidden lg:flex md:flex-wrap lg:flex-wrap lg:items-center lg:gap-4 pb-5">
          <img
            src="https://i.ibb.co/R4wcyR4/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg"
            className="w-36 h-36 rounded-full shadow-sm"
            alt=""
          />
          <div>
            <p>Jashim Uddin</p>
            <p>jashim@gmail.com</p>
          </div>
        </div>
       <div>
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
        <div className="lg:hidden flex flex-wrap items-center  gap-2 pb-5">
          <img
            src="https://i.ibb.co/R4wcyR4/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg"
            className="w-12 h-12 rounded-full shadow-sm"
            alt=""
          />
          <div>
            <p>Jashim Uddin</p>
            <p>jashim@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
