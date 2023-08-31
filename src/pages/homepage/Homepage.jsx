import Lottie from "lottie-react";
import globe from "../../assets/globe_animation.json";
import BannerBadge from "../../shared/bannerbadge/BannerBadge";
const Homepage = () => {
  return (
    <div className="lg:pt-24">
      <div className="grid grid-cols-1 px-2 md:grid-cols-2 w-full ">
        <div className="">
          <BannerBadge />
          <div className="lg:py-12 w-full">
            <p className="lg:text-7xl text-left font-semibold font-staatliches ">
              Streamlined Docs: Your Gateway to Uninterrupted Services
            </p>
          </div>
          <div>
            <button className="bg-red-700 lg:px-12 lg:py-5 text-white lg:text-lg font-semibold lg:mr-12 hover:bg-red-600 hover:text-neutral-50">
              Get Started
            </button>
            <button className="border-2 border-black lg:px-12 lg:py-5 font-semibold lg:text-lg hover:bg-slate-100">Learn More</button>
          </div>
        </div>
        <div className="lg:w-[800px] hidden md:block ">
          <Lottie animationData={globe} />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Homepage;
