import ActiveLink from "../activelink/ActiveLink";
import { HiMenuAlt3 } from "react-icons/hi";
const Header = () => {
  const navLinks = (
    <>
      <ActiveLink to="/">HOME</ActiveLink>
      <ActiveLink to="/">DETAILS</ActiveLink>
      <ActiveLink to="/">FAQ</ActiveLink>
    </>
  );
  return (
    <nav className="">
      {/* desktop */}
      <div className="flex">
        <div className="hidden lg:flex lg:gap-16">
          <div>
            <p>STREAMLINED DOCS</p>
          </div>
          <div className="flex lg:gap-16">{navLinks}</div>
        </div>
        <div className="hidden lg:block">
          <button>LOGIN</button>
        </div>
      </div>
      {/* mobile device */}
      <div className="px-12 md:px-16 lg:hidden">
        <div className="flex justify-between">
          <p>STREAMLINED DOCS</p>
          <div className="hidden">{navLinks}</div>
        <div><HiMenuAlt3/></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
