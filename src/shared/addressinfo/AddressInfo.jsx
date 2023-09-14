
const AddressInfo = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-between items-center">
          <label htmlFor="division" className="font-normal text-base mr-2 ">
            Division(bn)
          </label>
          <input
            type="text"
            name="division"
            className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out "
            placeholder="বিভাগ" required
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="district" className="font-normal text-base mr-2 ">
            District(bn)
          </label>
          <input
            type="text"
            name="district"
            className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
            placeholder="জেলা" required
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="upzilla" className="font-normal text-base mr-2 ">
            Upazilla(bn)
          </label>
          <input
            type="text"
            name="upzilla"
            className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
            placeholder="উপজেলা" required
          />
        </div>
        <div className="flex justify-between items-center">
          <label
            htmlFor="policeStation"
            className="font-normal text-base mr-2 "
          >
            Police Station
          </label>
          <input
            type="text"
            name="police Station"
            className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
            placeholder="থানা" required
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
          <label htmlFor="postCode" className="font-normal text-base mr-2">
            Post Code
          </label>
          <input
            type="text"
            name="postCode"
            className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
            placeholder="পোস্ট কোড" required
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="postOffice" className="font-normal text-base mr-2">
            Post Office(bn)
          </label>
          <input
            type="text"
            name="postOffice"
            className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
            placeholder="পোস্ট অফিস" required
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="holdingNumber" className="font-normal text-base mr-2">
            House Holding No(bn)
          </label>
          <input
            type="text"
            name="holdingNumber"
            className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
            placeholder="হোল্ডিং নম্বর" required
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="voterArea" className="font-normal text-base mr-2">
            Voter Area(bn)
          </label>
          <input
            type="text"
            name="voterArea"
            className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
            placeholder="ভোটার এলাকা" required
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="villageNumber" className="font-normal text-base mr-2">
            Village Road No(bn)
          </label>
          <input
            type="text"
            name="villageRoad"
            className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
            placeholder="রোড নম্বর"
          />
        </div>
      </div>
    </div>
  );
};

export default AddressInfo;
