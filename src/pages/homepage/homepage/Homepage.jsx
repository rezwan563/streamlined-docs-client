import Lottie from "lottie-react";
import globe from "../../../assets/globe_animation.json";
import BannerBadge from "../../../shared/bannerbadge/BannerBadge";
import { Link } from "react-router-dom";
const Homepage = () => {
  
  return (
    <div className="pt-12 md:pt-24 ">
      <div className="grid grid-cols-1 px-2 lg:grid-cols-2">
        <div className="space-y-8 md:space-y-12">
          <BannerBadge />
          <div className="lg:py-12">
            <p className="text-5xl lg:text-7xl text-left font-semibold font-staatliches ">
              Streamlined Docs: Your Gateway to Uninterrupted Services
            </p>
          </div>
          <div className="hidden lg:block">
           <Link to='/auth'> <button className="bg-red-700 px-8 py-3 lg:px-12 lg:py-5 text-white text-lg font-semibold mr-5 lg:mr-12 hover:bg-red-600 hover:text-neutral-50">
            Get Started</button></Link>
            <button className="border-2 border-black px-8 py-3 lg:px-12 lg:py-5 font-semibold text-lg hover:bg-slate-100">Learn More</button>
          </div>
        </div>
        <div className="w-full lg:w-[600px] lg:block ">
          <Lottie animationData={globe} data-testid="lottie-animation"/>
        </div>
        <div className="block space-y-5 lg:hidden w-full">
            <button className="bg-red-700 px-8 py-3 w-full lg:px-12 lg:py-5 text-white text-lg font-semibold mr-5 lg:mr-12 hover:bg-red-600 hover:text-neutral-50">
              Get Started
            </button>
            <button className="border-2 border-black w-full px-8 py-3 lg:px-12 lg:py-5 font-semibold text-lg hover:bg-slate-100">Learn More</button>
          </div>
      </div>
      <div className="">
      </div>
    </div>
  );
};

export default Homepage;
