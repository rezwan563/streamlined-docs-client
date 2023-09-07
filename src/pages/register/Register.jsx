import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "react-tabs/style/react-tabs.css";
import GoogleLogin from "../../shared/googlelogin/GoogleLogin";

const Register = () => {
  const [show, setShow] = useState(true);
  const [showConfirm, setShowConfirm] = useState(true);
  const [error, setError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = "/dashboard";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm_password.value;

    if (password !== confirmPassword) {
      return setError("Password is not match with confirm password");
    }

    setError("");

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const savedUser = {
          email: result.user.email,
        };
        fetch(`${import.meta.env.VITE_SERVER_API}/api/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
        Swal.fire({
          title: "Success!",
          text: "You have successfully registered",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
      });

    form.reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen sm:py-12 bg-white">
      <div className="flex flex-col max-w-lg p-6 rounded-md sm:p-5 w-full bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">
            Welcome to our NID Correction app
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="grid grid-cols-1 gap-4">
           

            <div>
              <div className="flex justify-between">
              <label htmlFor="email" className="text-sm mb-2">
                Email address
              </label>
              </div>
              <input
                type="email"
                name="email"
                required
                placeholder="type email address"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>

            <div className="relative">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type={show ? "password" : "text"}
                name="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
              />
              <span
                onClick={() => setShow(!show)}
                className="cursor-pointer absolute right-0 top-1/2 mt-2 me-4"
              >
                {show ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="relative">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Confirm Password
                </label>
              </div>
              <input
                type={showConfirm ? "password" : "text"}
                name="confirm_password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
              />
              <span
                onClick={() => setShowConfirm(!showConfirm)}
                className="cursor-pointer absolute right-0 top-1/2 mt-2 me-4"
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <p className="text-center text-red-500 font-medium">{error}</p>
          <div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 transition-all w-full rounded-md py-3 text-white"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">OR</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <GoogleLogin />
      </div>
    </div>
  );
};

export default Register;
