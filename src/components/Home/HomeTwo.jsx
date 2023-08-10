import React from 'react';
import { Link } from 'react-router-dom';

const HomeTwo = () => {
  return (
    <div className="bg-gradient-to-b from-green-100 to-white">
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-8 flex justify-between items-center">
          <img src="passport-logo.png" alt="Passport Logo" className="w-20" />
          <nav className="space-x-4">
            <Link to="#" className="text-gray-700 font-semibold hover:text-green-500">Home</Link>
            <Link to="#" className="text-gray-700 font-semibold hover:text-green-500">Apply</Link>
            <Link to="#" className="text-gray-700 font-semibold hover:text-green-500">Renew</Link>
            <Link to="#" className="text-gray-700 font-semibold hover:text-green-500">Status</Link>
            <Link to="#" className="text-green-500 font-semibold hover:underline">Login</Link>
            <Link to="#" className="bg-green-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-green-600 transition duration-300">Sign Up</Link>
          </nav>
        </div>
      </header>

      <section className="py-20 text-center bg-gradient-to-b from-green-300 to-green-200 animate-fade-in-up">
        <h1 className="text-4xl font-extrabold text-green-900 mb-4">Apply for Your Passport</h1>
        <p className="text-gray-700 text-lg mb-8">Explore our services and apply for your passport online.</p>
        <button className="bg-green-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-green-600 transition duration-300">Get Started</button>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold text-green-900 mb-4">Passport Services</h2>
          <p className="text-gray-700">Choose from a variety of passport services to suit your needs.</p>
          <div className="flex justify-center mt-8 space-x-4">
            <div className="text-center">
              <div className="text-green-600 text-3xl mb-2">Apply</div>
              <div className="text-gray-700">New Passport</div>
            </div>
            <div className="text-center">
              <div className="text-green-600 text-3xl mb-2">Renew</div>
              <div className="text-gray-700">Existing Passport</div>
            </div>
            <div className="text-center">
              <div className="text-green-600 text-3xl mb-2">Status</div>
              <div className="text-gray-700">Application Status</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-100">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold text-green-900 mb-4">Easy Application Process</h2>
          <p className="text-gray-700">Our online application process is simple and efficient.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 className="text-lg font-semibold mb-2">Step 1</h3>
              <p className="text-gray-700">Fill out the online application form.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 className="text-lg font-semibold mb-2">Step 2</h3>
              <p className="text-gray-700">Upload required documents and photos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center bg-gradient-to-b from-green-200 to-green-100">
        <h2 className="text-2xl font-semibold text-green-900 mb-4">Ready to Apply?</h2>
        <p className="text-gray-700">Start your passport application process today.</p>
        <button className="bg-green-500 text-white font-semibold px-8 py-3 rounded-full mt-8 hover:bg-green-600 transition duration-300">Get Started</button>
      </section>

      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Your Passport Application. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomeTwo;
