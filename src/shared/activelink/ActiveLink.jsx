import { NavLink } from "react-router-dom";
import './ActiveLink.css'

// eslint-disable-next-line react/prop-types
const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink to={to} className="ml-4 text-red-800 font-semibold nav-link">
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;