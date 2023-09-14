
import { animated, useSpring } from "react-spring";
import { FaDownload, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext, useState, useEffect } from "react";


function ApplicationStatusWidget() {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState([true]);
  const url = `http://localhost:5000/api/profiles/${user?.email}`

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setProfile(data));
  }, [url]);

  const appliedCount = 12;
  const rejectedCount = 4;
  const buttonProps = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { delay: 300, duration: 500 },
  });

  const welcomeProps = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 800 },
  });

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
        <img
          src={user?.photoURL}
          alt="Profile"
          className="w-60 h-60 border-gray-500 border rounded-md mr-4"
        />
        <div className="flex flex-col">
          <animated.h3
            className="text-xl font-semibold mb-1"
            style={welcomeProps}
          >
            Welcome, {user?.displayName}!
          </animated.h3>
          <animated.p className="text-gray-500 mb-2" style={welcomeProps}>
            We are glad to have you here!
          </animated.p>
          {profile ? (
            <Link to="/dashboard/seedetails">
              <animated.button
                style={buttonProps}
                className="bg-cyan-200 px-2 py-2 rounded-lg mt-10"
              >
                <div className="flex items-center">
                  <CgProfile className="text-xl" />
                  <span className="text-xl font-semibold block">See Details</span>
                </div>
              </animated.button>
            </Link>
          ) : (
            <Link to="/dashboard/create_profile">
              <animated.button
                style={buttonProps}
                className="bg-cyan-200 px-2 py-2 rounded-lg mt-10"
              >
                <div className="flex items-center">
                  <CgProfile className="text-xl" />
                  <span className="text-xl font-semibold block">Create Profile</span>
                </div>
              </animated.button>
            </Link>
          )}
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <div className="flex space-x-4">
          <animated.button
            style={buttonProps}
            className="bg-blue-300 px-8 py-4 rounded-lg flex items-center justify-between w-1/2"
          >
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-700 text-2xl" />
              <span className="text-2xl font-semibold block">Applied</span>
              <span className="text-sm">Total: {appliedCount}</span>
            </div>
          </animated.button>
          <animated.button
            style={buttonProps}
            className="bg-red-300 px-8 py-4 rounded-lg flex items-center justify-between w-1/2"
          >
            <div className="flex items-center space-x-2">
              <FaTimesCircle className="text-red-700 text-2xl" />
              <span className="text-2xl font-semibold block">Rejected</span>
              <span className="text-sm">Total: {rejectedCount}</span>
            </div>
          </animated.button>
        </div>
        <animated.button
          style={buttonProps}
          className="bg-green-300 px-8 py-4 rounded-lg flex items-center justify-between w-full"
        >
          <div className="flex items-center space-x-2">
            <FaDownload className="text-2xl" />
            <span className="text-2xl font-semibold block">Download</span>
          </div>
        </animated.button>
      </div>
      {/* ... Rest of your component */}
    </div>
  );
}

export default ApplicationStatusWidget;

