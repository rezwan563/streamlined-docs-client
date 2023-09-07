
const PersonalInformation = () => {
  return (
    <div className="">
      
      <div className="py-2 mb-2 border-b-2 border-blue-700">
        <p className=" font-bold text-base">Personal Information</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-between items-center">
          <label htmlFor="name" className="font-normal text-base mr-2 ">
            Name(bn)
          </label>
          <input
            type="text"
            name="name"
            className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out "
            placeholder="নাম"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="name" className="font-normal text-base mr-2 ">
            Name(en)
          </label>
          <input
            type="text"
            name="nameEnglish"
            className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
            placeholder="Name"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="name" className="font-normal text-base mr-2 ">
            Father Name(bn)
          </label>
          <input
            type="text"
            name="fatherName"
            className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
            placeholder="পিতার নাম"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="name" className="font-normal text-base mr-2 ">
            Father Name(en)
          </label>
          <input
            type="text"
            name="fatherNameEnglish"
            className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
            placeholder="Father Name"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="name" className="font-normal text-base mr-2 ">
            Mother Name(bn)
          </label>
          <input
            type="text"
            name="motherName"
            className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
            placeholder="মাতার নাম"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="name" className="font-normal text-base mr-2 ">
            Mother Name(bn)
          </label>
          <input
            type="text"
            name="motherNameEnglish"
            className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
            placeholder="Mother Name"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
