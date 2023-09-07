import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleLogin from "../../shared/googlelogin/GoogleLogin";

const Login = () => {
  const [show, setShow] = useState(true);
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = "/dashboard";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Success!",
          text: "You have successfully Login",
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
    <div className="flex justify-center items-center min-h-screen bg-white sm:py-12">
      <div className="flex flex-col max-w-lg px-6 rounded-md sm:px-5 w-full bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
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
                id="password"
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
          </div>
          <p className="text-center text-red-500 font-medium">{error}</p>
          <div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 transition-all w-full rounded-md py-3 text-white"
            >
              Log In
            </button>
          </div>
        </form>
        <div className="space-y-1">
          <button className="text-xs hover:underline hover:text-rose-500 text-gray-400">
            Forgot password?
          </button>
        </div>
        <div className="flex flex-col items-center pt-4 space-y-2">
          <div className="flex-1 h-px w-16 md:w-full dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">OR</p>
          <GoogleLogin />
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
