import Lottie from "lottie-react";
import globe from "../../../assets/globe_animation.json";
import BannerBadge from "../../../shared/bannerbadge/BannerBadge";
import { Link } from "react-router-dom";
import { LiaUserEditSolid} from "react-icons/lia";
import { LuClipboardEdit } from "react-icons/lu";
import Aos from "aos";
import 'aos/dist/aos.css';
import Contact from "./Contact/Contact";


const Homepage = () => {
  Aos.init();
  return (
    <div className="pt-12 md:pt-24 ">
      <div className="grid grid-cols-1 px-2 lg:grid-cols-2 md:h-[80vh]">
        <div className="space-y-8 md:space-y-12">
          <BannerBadge />
          <div data-aos="fade-right"  data-aos-duration="3000" className="lg:py-12">
            <p className="text-5xl lg:text-7xl text-left font-semibold font-staatliches ">
              Streamlined Docs: Your Gateway to Uninterrupted Services
            </p>
          </div>
          <div data-aos="fade-right"  data-aos-duration="3000" className="hidden lg:block">
           <Link to='/auth'> <button className="bg-red-700 px-8 py-3 lg:px-12 lg:py-5 text-white text-lg font-semibold mr-5 lg:mr-12 hover:bg-red-600 hover:text-neutral-50">
            Get Started</button></Link>
            {/* <button className="border-2 border-black px-8 py-3 lg:px-12 lg:py-5 font-semibold text-lg hover:bg-slate-100">Learn More</button> */}
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="3000" className="w-full lg:w-[600px] lg:block ">
           <Lottie animationData={globe} data-testid="lottie-animation"/> 
       
        </div>
        <div className="block space-y-5 lg:hidden w-full">
            <button className="bg-red-700 px-8 py-3 w-full lg:px-12 lg:py-5 text-white text-lg font-semibold mr-5 lg:mr-12 hover:bg-red-600 hover:text-neutral-50">
              Get Started
            </button>
            {/* <button className="border-2 border-black w-full px-8 py-3 lg:px-12 lg:py-5 font-semibold text-lg hover:bg-slate-100">Learn More</button> */}
          </div>
      </div>
{/* Services We */}
      <div className=" mt-5 flex flex-col justify-between mb-20 ">
        <h1 className="text-4xl mb-10 font-semibold text-center"> Services We provide</h1>
         <div className=" my-5 flex flex-col md:flex-row justify-between ">
         <div data-aos="fade-up" data-aos-duration="3000" className="flex flex-col border-t-8  shadow-lg border-red-700 justify-center w-[600px] mb-10 items-center">
           <LiaUserEditSolid className="text-9xl my-10 text-red-900"></LiaUserEditSolid>
            <div className="flex flex-col items-start justify-center px-10">
            <span className="text-2xl font-semibold font-staatliches mb-5">NID Applications</span>
            <span className=" font-semibold font-staatliches mb-5"> Applying for the National Identity Card has become easier because of our online process </span>
            <Link to='/auth'> <button className="bg-red-700 mb-5 text-white  font-semibold p-2 hover:bg-red-600 hover:text-neutral-50">
           Explore Now</button></Link>
            </div>
          </div>
          <div  data-aos="fade-up" data-aos-duration="3000" className="flex flex-col border-t-8 shadow-lg border-red-700 justify-center w-[600px] mb-10 items-center">
           <LuClipboardEdit className="text-9xl my-10 text-red-900"></LuClipboardEdit>
            <div className="flex flex-col items-start justify-center px-10">
            <span className="text-2xl font-semibold font-staatliches mb-5">NID Corrections</span>
            <span className=" font-semibold font-staatliches mb-5"> Correct your National Identity Card in a fast and secure way</span>
            <Link to='/auth'> <button className="bg-red-700 mb-5 text-white  font-semibold p-2 hover:bg-red-600 hover:text-neutral-50">
           Explore Now</button></Link>
            </div>
          </div>
         </div>
      </div>
      {/* Procedure */}
      <div className=" mt-5 flex flex-col justify-center mb-20 "> 
      <h1 className="text-4xl font-semibold text-center mb-10">The Steps For Applications</h1>
      <span className=" mb-20 font-semibold text-center">We provide simple and Effective procedure that is easily understandable</span>
        <div className="flex justify-between mb-20 gap-10 items-center flex-col md:flex-row"> 
          <div data-aos="flip-left" data-aos-duration="3000" className=" flex flex-col shadow-gray-700 shadow-inner p-10 justify-center  md:w-[500px] w-[90%] items-baseline">
            <h1 className="text-2xl mb-5 font-bold text-center border-b-2 border-red-700">Steps for NID Application</h1>
            <ol className="list-decimal p-5 font-semibold">
              <li>Regiser an account</li>
              <li>Create an NID profile</li>
              <li>ADD Documents</li>
            </ol>
          </div>
          <div data-aos="flip-left" data-aos-duration="3000" className="flex flex-col p-10 shadow-gray-700 shadow-inner justify-center md:w-[500px] w-[90%] items-baseline">
            <h1 className="text-2xl mb-5 font-bold text-center border-b-2 border-red-700">Steps for NID Correction</h1>
            <ol className="list-decimal p-5 font-semibold">
              <li>Edit NID profile</li>
              <li>Request For Correction</li>
              <li>Provides necessary documents for verification</li>
            </ol>
          </div>
        </div>
      </div>
      {/* Contact us */}
      <div>
       <Contact></Contact>
      </div>
    
    </div>
  );
};

export default Homepage;