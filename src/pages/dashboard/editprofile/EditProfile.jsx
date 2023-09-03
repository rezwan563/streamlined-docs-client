
const EditProfile = () => {
  return (
    <div>
      <div className="bg-white lg:max-w-5xl rounded-md">
        <div className="p-4">
          <div>
            <p className="text-2xl font-bold">
              Please fill up your profile information
            </p>
          </div>
          <div className="py-4">
            <p className="font-bold text-base border-b-2 border-blue-600 pb-2">
              Personal Information
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex justify-between items-center">
              <label htmlFor="name" className="font-normal text-base mr-2 ">
                Name(bn)
              </label>
              <input
                type="text"
                name="name"
                className="border-b-2 border-slate-200 pl-2 rounded-md py-1 outline-none text-xl"
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
                className="border-b-2 border-slate-200 pl-2 rounded-md py-1 outline-none text-xl"
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
                className="border-b-2 border-slate-200 pl-2 rounded-md py-1 outline-none text-xl"
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
                className="border-b-2 border-slate-200 pl-2 rounded-md py-1 outline-none text-xl"
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
                className="border-b-2 border-slate-200 pl-2 rounded-md py-1 outline-none text-xl"
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
                className="border-b-2 border-slate-200 pl-2 rounded-md py-1 outline-none text-xl"
                placeholder="Mother Name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
