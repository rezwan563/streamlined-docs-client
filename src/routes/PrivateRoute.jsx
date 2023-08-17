import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Loader from "../shared/Loader";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return <Loader />
    }

    if(user){
        return children;
    }

    return (
        <div>
            <Navigate state={{ from: location }} to="/login" replace />
        </div>
    );
};

export default PrivateRoute;