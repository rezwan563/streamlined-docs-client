import  from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-green-100 to-white">

      <section className="py-12 md:py-20 text-center bg-gradient-to-b from-green-300 to-green-200 animate-fade-in-up">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-green-900 mb-4">
          Apply for Your Passport
        </h1>
        <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-6 md:mb-8">
          Explore our services and apply for your passport online.
        </p>
        <button className="bg-green-500 text-white font-semibold px-6 md:px-8 py-3 rounded-full hover:bg-green-600 transition duration-300">
          Get Started
        </button>
      </section>

      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-green-900 mb-4">
            Passport Services
          </h2>
          <p className="text-gray-700 text-sm md:text-base lg:text-lg">
            Choose from a variety of passport services to suit your needs.
          </p>
          <div className="flex flex-col md:flex-row justify-center mt-6 md:mt-8 space-y-4 md:space-y-0 md:space-x-4">
            <div className="text-center">
              <Link to="apply" className="text-green-600 text-lg md:text-2xl lg:text-3xl mb-1">Apply</Link>
              <div className="text-gray-700 text-sm md:text-base lg:text-lg">New Passport</div>
            </div>
            <div className="text-center">
              <div className="text-green-600 text-lg md:text-2xl lg:text-3xl mb-1">Renew</div>
              <div className="text-gray-700 text-sm md:text-base lg:text-lg">Existing Passport</div>
            </div>
            <div className="text-center">
              <div className="text-green-600 text-lg md:text-2xl lg:text-3xl mb-1">Status</div>
              <div className="text-gray-700 text-sm md:text-base lg:text-lg">Application Status</div>
            </div>
            <div className="text-center">
              <div className="text-green-600 text-lg md:text-2xl lg:text-3xl mb-1">Corrections</div>
              <div className="text-gray-700 text-sm md:text-base lg:text-lg">Passport Corrections</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-green-100">
        <div className="container mx-auto text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-green-900 mb-4">
            Easy Application Process
          </h2>
          <p className="text-gray-700 text-sm md:text-base lg:text-lg">
            Our online application process is simple and efficient.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Step 1</h3>
              <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                Fill out the online application form.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Step 2</h3>
              <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                Upload required documents and photos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 text-center bg-gradient-to-b from-green-200 to-green-100">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-green-900 mb-4">
          Ready to Apply?
        </h2>
        <p className="text-gray-700 text-sm md:text-base lg:text-lg">
          Start your passport application process today.
        </p>
        <button className="bg-green-500 text-white font-semibold px-6 md:px-8 py-3 rounded-full mt-6 md:mt-8 hover:bg-green-600 transition duration-300">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Home;
