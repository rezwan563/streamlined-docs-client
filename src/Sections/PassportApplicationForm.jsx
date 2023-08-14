import React, { useState } from "react";

const PassportApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    // add other form fields which u want to include...
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div className="bg-white p-8 rounded-md shadow-md">
      <div className="mb-8">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                Step {step}
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-green-600">
                {step === 3 ? "Completed" : `${step - 1}/3`}
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
            <div
              style={{ width: `${(step - 1) * 50}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
            ></div>
          </div>
        </div>
      </div>
      {step === 1 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Step 1: Personal Information</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-1">
                First Name
              </label>
             
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
              />
            </div>

            {/* ...other form fields */}
            <div className="mt-6">
              <button
                type="button"
                onClick={handleNext}
                className="bg-green-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-600 transition duration-300"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Step 2: Address Information</h2>
          
          
          {/* address */}
         
          <input
                type="text"
                name="adress"               
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
              />


          {/* ...similar form structure for step 2 */}
          <div className="mt-6">
            <button
              type="button"
              onClick={handlePrevious}
              className="mr-4 bg-gray-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-600 transition duration-300"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="bg-green-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-600 transition duration-300"
            >
              Next
            </button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Step 3: Review and Submit</h2>
          {/* ...similar form structure for step 3 */}
          <div className="mt-6">
            <button
              type="button"
              onClick={handlePrevious}
              className="mr-4 bg-gray-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-600 transition duration-300"
            >
              Previous
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PassportApplicationForm;
