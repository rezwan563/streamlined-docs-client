import { useState } from "react";
import ActiveLink from "../activelink/ActiveLink";
import { HiMenuAlt3 } from "react-icons/hi";
import { SiDocsdotrs } from "react-icons/si";
import { AiOutlineCloseCircle } from "react-icons/ai"
const Header = () => {
  const navLinks = (
    <>
      <ActiveLink to="/">HOME</ActiveLink>
      <ActiveLink to="/details">DETAILS</ActiveLink>
      <ActiveLink to="/faq">FAQ</ActiveLink>
    </>
  );
  const loginButton = (
    <>
      <button className="bg-red-700 px-4 py-2 lg:rounded-md text-white font-semibold hover:bg-red-600 ">
        LOGIN
      </button>
    </>
  );
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <nav className=" bg-white lg:opacity-90  z-10 sticky top-0 ">
        {/* desktop */}
        <div className="flex justify-between items-center  py-5 lg:py-10 ">
          <div className="hidden lg:flex lg:gap-16">
            <div className="flex items-center lg:gap-3">
              <SiDocsdotrs className="text-red-600 lg:text-3xl" />
              <p className="lg:text-3xl font-bold">STREAMLINED DOCS</p>
            </div>
            <div className="flex items-center lg:gap-16">{navLinks}</div>
          </div>
          <div className="hidden lg:block">{loginButton}</div>
        </div>
        {/* mobile device */}
        <div className="lg:hidden">
          <div className="flex justify-between">
            <div className="">
              <p>STREAMLINED DOCS</p>
            </div>
            <div className="hidden lg:block">{navLinks}</div>
            <div>
              <HiMenuAlt3
                onClick={() => setIsClicked(!isClicked)}
                className={`text-4xl ${isClicked ? 'hidden' : ''}`}
              />
              <AiOutlineCloseCircle onClick={() => setIsClicked(!isClicked)}
                className={`text-4xl ${isClicked ? '' : 'hidden'}`}/>
            </div>
          </div>
        </div>
        {/* transform with transition create sliding header for mobile and tablet  */}
        <div
          className={`lg:hidden z-50 fixed w-full flex justify-center  items-center transform  transition-all ease-linear border-b-2 shadow-md  duration-300 bg-white   ${
            isClicked ? "h-2/3 md:h-96 opacity-100" : "opacity-0 h-0"
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="space-y-3">{navLinks} {loginButton}</div>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
