const IdentificationInfo = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex justify-between items-center">
          <label htmlFor="name" className="font-normal text-base mr-2 ">
            Education(bn)
          </label>
          <input
            type="text"
            name="education"
            className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out "
            placeholder="শিক্ষাগত যোগ্যতা"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="name" className="font-normal text-base mr-2 ">
            Occupation(bn)
          </label>
          <input
            type="text"
            name="occupation"
            className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
            placeholder="পেশা"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="name" className="font-normal text-base mr-2 ">
            Reliogion(bn)
          </label>
          <input
            type="text"
            name="religion"
            className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
            placeholder="ধর্ম"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="name" className="font-normal text-base mr-2 ">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
            placeholder="Phone"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="name" className="font-normal text-base mr-2 ">
            Driving License
          </label>
          <input
            type="text"
            name="drivingLicense"
            className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
            placeholder="Driving License"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="name" className="font-normal text-base mr-2">
            Passport Number
          </label>
          <input
            type="text"
            name="passportNumber"
            className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
            placeholder="Passport Number"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="name" className="font-normal text-base mr-2">
            TIN Number
          </label>
          <input
            type="text"
            name="tinNumber"
            className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
            placeholder="TIN Number"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="name" className="font-normal text-base mr-2">
            Identification Mark(bn)
          </label>
          <input
            type="text"
            name="identificationMark"
            className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
            placeholder="Identification Mark"
          />
        </div>
      </div>
    </div>
  );
};

export default IdentificationInfo;
