import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const EditProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const createProfile = event => {
    event.preventDefault();
    const form = event.target;

    const personalEmail = user?.email;
      
      const personalInfo = [{
        name_bn: form.name_bn.value,
        name_en: form.name_en.value,
        father_name_bn: form.father_name_bn.value,
        mother_name_bn: form.mother_name_bn.value,
        gender: form.gender.value,
        blood_group: form.blood_group.value,
        birth_registration: form.birth_registration.value,
        dob: form.dob.value,
        birth_place: form.birth_place.value,
      }];

      const identificationInfo = [{
        education_bn: form.education_bn.value,
        occupation: form.occupation.value,
        religion: form.religion.value,
        mobile_number: form.mobile_number.value,
        driving_license_number: form.driving_license_number.value,
        passport_number: form.passport_number.value,
        tin: form.tin.value,
        identification_mark_bn: form.identification_mark_bn.value,
      }];

      const addressInfo = [{
        division: form.division.value,
        district: form.district.value,
        upozila: form.upozila.value,
        police_station: form.police_station.value,
        post_code: form.post_code.value,
        post_office_bn: form.post_office_bn.value,
        house_holding_bn: form.house_holding_bn.value,
        voter_area: form.voter_area.value,
        village_road_bn: form.village_road_bn.value,
      }];

      const profileData = { 
        userEmail:personalEmail,
        personal_data: personalInfo,
        identification_data: identificationInfo,
        address_data: addressInfo
      };
  
    
    fetch('http://localhost:5000/profiles', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(profileData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: 'success',
              text: 'Profile created successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            });
            navigate("/");
          }
          else{
            Swal.fire('Profile already added')
          }
      })
    form.reset();

}

  return (
    <div>
      <div
        className="bg-white w-full md:max-w-5xl md:mx-auto rounded-md md:p-12 px-4">
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
                <label htmlFor="name" className="font-normal text-base mr-2 "> Name(bn)
                </label>
              <input type="text" name="name_bn"
                  className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out " placeholder="নাম" required/>
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="name" className="font-normal text-base mr-2 ">Name(en)
                </label>
              <input type="text" name="name_en"
                  className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out" placeholder="Name" required/>
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="name" className="font-normal text-base mr-2 ">Father Name(bn)</label>
                <input type="text" name="father_name_bn"
                  className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
                  placeholder="পিতার নাম" required/>
              </div>
             
              <div className="flex justify-between items-center">
                <label htmlFor="name" className="font-normal text-base mr-2 ">
                  Mother Name(bn)
                </label>
                <input
                  type="text"
                  name="mother_name_bn"
                  className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
                  placeholder="মাতার নাম" required
                />
              </div>
             
              <div className="flex justify-between items-center">
                <label htmlFor="name" className="font-normal text-base mr-2 ">
                  Gender
                </label>
                <input
                  type="text"
                  name="gender"
                  className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
                  placeholder="gender" required
                />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="name" className="font-normal text-base mr-2 ">
                  Blood Group
                </label>
                <input
                  type="text"
                name="blood_group"
                  className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
                placeholder="blood group" required
                />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="name" className="font-normal text-base mr-2 ">
                Birth registration
                </label>
                <input
                  type="text"
                name="birth_registration"
                  className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
                placeholder="birth registration" required
                />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="name" className="font-normal text-base mr-2 ">
                 date of birth
                </label>
                <input
                  type="date"
                  name="dob"
                  className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
                  placeholder="date of birth" required
                />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="name" className="font-normal text-base mr-2 ">
                 Birth place
                </label>
                <input
                  type="text"
                  name="birth_place"
                  className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
                  placeholder="Birth place" required
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
                name="education_bn"
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
                name="mobile_number"
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
                name="driving_license_number"
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
                name="passport_number"
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
                name="tin"
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
                name="identification_mark_bn"
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
                Upozilla(bn)
              </label>
              <input
                type="text"
                name="upozila"
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
                name="police_station"
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
                name="post_code"
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
                name="post_office_bn"
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
                name="house_holding_bn"
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
                name="voter_area"
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
                name="village_road_bn"
                className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
                placeholder="রোড নম্বর"
              />
            </div>
          </div>
          <div className="form-control mt-6 mb-10">
            <input className="btn btn-accent text-xl font-bold" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
