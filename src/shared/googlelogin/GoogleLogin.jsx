import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = "/dashboard";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedInUser = result.user;
        const savedUser = {
          email: loggedInUser.email,
        };
        navigate(from);
        console.log(savedUser);

        fetch(`${import.meta.env.VITE_SERVER_API}/users`, {
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
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div
      onClick={handleGoogleSignIn}
      className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
    >
      <FcGoogle size={32} />
      <p>Continue with Google</p>
    </div>
  );
};

export default GoogleLogin;