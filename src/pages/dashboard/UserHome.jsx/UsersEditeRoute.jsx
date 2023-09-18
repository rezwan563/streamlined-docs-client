import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import useProfile from "../../../hooks/useProfile";


const UsersEditeRoute = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [info, setInfo] = useState();
console.log(info);
    const [Profile] = useProfile();
    useEffect(() => {
        setInfo(Profile);
    }, [Profile]);

        const defaultValues = {
            name_bn: info?.personal_data[0]?.name_bn || "",
            name_en: info?.personal_data[0]?.name_en || "",
            father_name_bn: info?.personal_data[0]?.father_name_bn || "",
            mother_name_bn: info?.personal_data[0]?.mother_name_bn || "",
            gender: info?.personal_data[0]?.gender || "",
            blood_group: info?.personal_data[0]?.blood_group || "",
            birth_registration: info?.personal_data[0]?.birth_registration || "",
            dob: info?.personal_data[0]?.dob || "",
            birth_place: info?.personal_data[0]?.birth_place || "",
            education_bn: info?.identification_data[0]?.education_bn || "",
            occupation: info?.identification_data[0]?.occupation || "",
            religion: info?.identification_data[0]?.religion || "",
            mobile_number: info?.identification_data[0]?.mobile_number || "",
            driving_license_number: info?.identification_data[0]?.driving_license_number || "",
            passport_number: info?.identification_data[0]?.passport_number || "",
            tin: info?.identification_data[0]?.tin || "",
            identification_mark_bn: info?.identification_data[0]?.identification_mark_bn || "",
            division: info?.address_data[0]?.division || "",
            district: info?.address_data[0]?.district || "",
            upozila: info?.address_data[0]?.upozila || "",
            police_station: info?.address_data[0]?.police_station || "",
            post_code: info?.address_data[0]?.post_code || "",
            post_office_bn: info?.address_data[0]?.post_office_bn || "",
            house_holding_bn: info?.address_data[0]?.house_holding_bn || "",
            voter_area: info?.address_data[0]?.voter_area || "",
            village_road_bn: info?.address_data[0]?.village_road_bn || "",
        };
console.log(defaultValues);
      
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
            userEmail: personalEmail,
            personal_data: personalInfo,
            identification_data: identificationInfo,
            address_data: addressInfo
        };


        fetch('http://localhost:5000/pending_applications', {
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
                        text: 'Profile update successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    navigate("/");
                }
                else {
                    Swal.fire('Profile already update')
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
                            <input type="text" name="name_bn" defaultValue={defaultValues.name_bn}
                                className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out " placeholder="নাম"   />
                        </div>
                        <div className="flex justify-between items-center">
                            <label htmlFor="name" className="font-normal text-base mr-2 ">Name(en)
                            </label>
                            <input type="text" name="name_en" defaultValue={defaultValues.name_en}
                                className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out" placeholder="Name" />
                        </div>
                        <div className="flex justify-between items-center">
                            <label htmlFor="name" className="font-normal text-base mr-2 ">Father Name(bn)</label>
                            <input type="text" name="father_name_bn"
                                className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
                                placeholder="পিতার নাম" defaultValue={defaultValues.father_name_bn} />
                        </div>

                        <div className="flex justify-between items-center">
                            <label htmlFor="name" className="font-normal text-base mr-2 ">
                                Mother Name(bn)
                            </label>
                            <input
                                type="text"
                                name="mother_name_bn"
                                className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
                                placeholder="মাতার নাম" defaultValue={defaultValues.mother_name_bn}
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
                                placeholder="gender" defaultValue={defaultValues.gender}
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
                                placeholder="blood group" defaultValue={defaultValues.blood_group}
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
                                placeholder="birth registration" defaultValue={defaultValues.birth_registration}
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <label htmlFor="name" className="font-normal text-base mr-2 ">
                                date of birth
                            </label>
                            <input
                                type="text"
                                name="dob"
                                className="border-b-2 border-slate-200 pl-2 rounded-md py-1   text-xl  focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
                                placeholder="date of birth" defaultValue={defaultValues.dob}
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
                                placeholder="Birth place" defaultValue={defaultValues.birth_place}
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
                                placeholder="শিক্ষাগত যোগ্যতা" defaultValue={defaultValues.education_bn}
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
                                placeholder="পেশা" defaultValue={defaultValues.occupation}
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
                                placeholder="ধর্ম" defaultValue={defaultValues.religion}
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
                                placeholder="Phone" defaultValue={defaultValues.mobile_number}
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
                                placeholder="Driving License" defaultValue={defaultValues.driving_license_number}
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
                                placeholder="Passport Number" defaultValue={defaultValues.passport_number}
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
                                placeholder="TIN Number" defaultValue={defaultValues.tin}
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
                                placeholder="Identification Mark" defaultValue={defaultValues.identification_mark_bn}
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
                                placeholder="বিভাগ" defaultValue={defaultValues.division}
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
                                placeholder="জেলা" defaultValue={defaultValues.district}
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
                                placeholder="উপজেলা" defaultValue={defaultValues.upozila}
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
                                placeholder="থানা" defaultValue={defaultValues.police_station}
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
                                placeholder="পোস্ট কোড" defaultValue={defaultValues.post_code}
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
                                placeholder="পোস্ট অফিস" defaultValue={defaultValues.post_office_bn}
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
                                placeholder="হোল্ডিং নম্বর" defaultValue={defaultValues.house_holding_bn}
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
                                placeholder="ভোটার এলাকা" defaultValue={defaultValues.voter_area}
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
                                placeholder="রোড নম্বর" defaultValue={defaultValues.village_road_bn}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <div className="form-control mt-6 mb-12">
                            <input className="btn btn-accent text-xl font-bold" type="submit" value="Edit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UsersEditeRoute;
