import { useState } from "react";

const UploadDocument = () => {
  const [isClicked, setIsClicked] = useState(false);
  // const handleFileUpload = (e) =>{
  //     const file = e.target.value;
  //     console.log(file);
  // }
  return (
    <div>
      {/* <p>Please Upload Your Files</p>
            <input  onChange={handleFileUpload} type="file" name="file" id="" /> */}
      <p onClick={() => setIsClicked(!isClicked)}>Edit Profile</p>

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
                Fathers Name(bn)
              </label>
              <input
                type="text"
                name="fatherName"
                className="border-b-2 border-slate-200 pl-2 rounded-md py-1 outline-none text-xl"
                placeholder="Father Name"
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="name" className="font-normal text-base mr-2 ">
                Mothers Name(bn)
              </label>
              <input
                type="text"
                name="motherName"
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

export default UploadDocument;
