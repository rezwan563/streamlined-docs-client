import { useState } from "react";
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
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <nav className="max-w-[1980px] bg-white lg:opacity-90 lg:mx-auto z-10 sticky top-0 ">
        {/* desktop */}
        <div className="flex justify-around py-5 lg:py-10 ">
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
        <div className="px-10 md:px-16 lg:hidden">
          <div className="flex justify-between">
            <p>STREAMLINED DOCS</p>
            <div className="hidden lg:block">{navLinks}</div>
            <div>
              <HiMenuAlt3
                onClick={() => setIsClicked(!isClicked)}
                className="text-4xl"
              />
            </div>
          </div>
        </div>
        {/* transform with transition create sliding header for mobile and tablet  */}
        <div
          className={`lg:hidden z-50 fixed w-full  flex justify-center  items-center transform underline transition-all ease-linear  duration-300 bg-white   ${
            isClicked ? "h-screen md:h-96 opacity-100" : "opacity-0 h-0"
          }`}
        >
          <div className="space-y-3">{navLinks}</div>
        </div>
      </nav>
      
    </>
  );
};

export default Header;
