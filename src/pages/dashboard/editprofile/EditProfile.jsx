import Swal from "sweetalert2";

const EditProfile = () => {

  const createProfile = event => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const nameEnglish = form.nameEnglish.value;
    const fatherName = form.fatherName.value;
    const fatherNameEnglish = form.fatherNameEnglish.value;
    const motherName = form.motherName.value;
    const motherNameEnglish = form.motherNameEnglish.value;
    const education = form.education.value;
    const occupation = form.occupation.value;
    const religion = form.religion.value;
    const phone = form.phone.value;
    const drivingLicense = form.drivingLicense.value;
    const passportNumber = form.passportNumber.value;
    const tinNumber = form.tinNumber.value;
    const identificationMark = form.identificationMark.value;
    const division = form.division.value;
    const district = form.district.value;
    const upzilla = form.upzilla.value;
    const policeStation = form.policeStation.value;
    const postCode = form.postCode.value;
    const postOffice = form.postOffice.value;
    const holdingNumber = form.holdingNumber.value;
    const voterArea = form.voterArea.value;
    const villageRoad = form.villageRoad.value;

    const profileOkey={name,nameEnglish,fatherName,fatherNameEnglish,motherName,motherNameEnglish,education,occupation,religion,phone,drivingLicense,passportNumber,tinNumber,identificationMark,division,district,upzilla,policeStation,postCode,postOffice,holdingNumber,voterArea,villageRoad}

    
    fetch('http://localhost:5000/api/profiles', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(profileOkey)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'success',
            text: 'user added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })

}

  return (
    <div>
      <div
        className="bg-white w-full md:max-w-5xl 
      md:mx-auto rounded-md md:p-12 px-4"
      >
        <div>
          <p className="text-2xl font-bold">
            Please fill up your profile information
          </p>
        </div>
        <form onSubmit={createProfile}>
          {/* Personal Information */}
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
                  placeholder="নাম" required
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
                  placeholder="Name" required
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
                  placeholder="পিতার নাম" required
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
                  placeholder="Father Name" required
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
                  placeholder="মাতার নাম" required
                />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="name" className="font-normal text-base mr-2 ">
                  Mother Name(en)
                </label>
                <input
                  type="text"
                  name="motherNameEnglish"
                  className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
                  placeholder="Mother Name" required
                />
              </div>
            </div>
          {/* Identification Information */}
          <div className="py-2 my-8 border-b-2 border-blue-700">
            <p className=" font-bold text-base">Identification Information</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-between items-center">
              <label htmlFor="name" className="font-normal text-base mr-2 ">
                Education(bn)
              </label>
              <input
                type="text"
                name="education"
                className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out "
                placeholder="শিক্ষাগত যোগ্যতা" required
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
                placeholder="পেশা" required
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
                placeholder="ধর্ম" required
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
                placeholder="Phone" required
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
          {/* Address Information */}
          <div className="py-2 my-8 border-b-2 border-blue-700">
            <p className="font-bold text-base">Address Information</p>
          </div>
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
                name="policeStation"
                className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
                placeholder="থানা" required
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
          <div className="flex items-center justify-between pt-4">
            
            <div className="form-control mt-6">
              <input className="btn btn-accent" type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
