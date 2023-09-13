import { Link } from "react-router-dom";
import demo4 from "../../assets/Images/demo4.png";

const AboutUs = () => {
  return (
    <div className="pt-12 md:pt-24 ">
      <div className="grid grid-cols-1 px-2 lg:grid-cols-2 gap-8 max-w-screen-xl space-y-5">
        <div className="space-y-8 md:space-y-12 text-xl">
          ABOUT US
          <div className="">
            <p className="text-5xl lg:text-5xl text-left font-semibold font-staatliches ">
              StreamlinedDocs - Your Personal Document Correction Partner.
            </p>
            <p className="mt-3 mb-3">
              In todays digital age, the accuracy and reliability of national
              documents like National ID Cards (NID) and Passports are
              paramount. Recognizing the need for a seamless and user-centric
              solution, With a focus on efficiency and convenience,
              StreamlinedDocs empowers users to review, update, and rectify
              discrepancies within their official records, revolutionizing the
              traditional document correction process
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[600px] lg:block ">
          <img src={demo4} alt="" />
        </div>

        <Link to='/auth'><button className="btn bg-red-600 text-lg font-semibold text-white p-2 mb-3">
          Sign Up For Free
        </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
