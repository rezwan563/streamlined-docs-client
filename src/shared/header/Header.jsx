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
    <nav className="max-w-[1980px]  lg:mx-auto">
      {/* desktop */}
      <div className="flex justify-around">
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
        <div><HiMenuAlt3 onClick={() => setIsClicked(!isClicked)} className="text-4xl"/></div>
        </div>
      </div>
      {/* transform with transition create sliding effect  */}
      <div className={`lg:hidden z-50 flex justify-center  items-center transform underline transition-all ease-linear  duration-300 bg-black text-white  ${isClicked ? 'h-96 opacity-100' : 'opacity-0 h-0'}`}>
           <div className="space-y-3">
           {navLinks}
           </div>
        </div>
        <p>hello</p>
    </nav>
  );
};

export default Header;
