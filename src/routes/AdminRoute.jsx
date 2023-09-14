// import { Navigate } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";
// import Loader from "../shared/loader/Loader";

// // eslint-disable-next-line react/prop-types
// const AdminRoute = ({children}) => {
//   const [isAdmin, isAdminLoading] = useAdmin();
//   if (isAdminLoading) {
//     return <Loader />;
//   }

//   if (isAdmin) {
//     return children;
//   }

//   return <Navigate state={{ from: location }} to="/auth" replace />;
// };

// export default AdminRoute;

// TODO: check if it works

import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import Loader from "../shared/loader/Loader";

const AdminRoute = ({ children }) => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation(); // Access location using the useLocation hook

  if (isAdminLoading) {
    return <Loader />;
  }

  if (isAdmin) {
    return children;
  }

  // Redirect to the authentication page with the current location in state
  return <Navigate state={{ from: location }} to="/auth" replace />;
};

export default AdminRoute;
