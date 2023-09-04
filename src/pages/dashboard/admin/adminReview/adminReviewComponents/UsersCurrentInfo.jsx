import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";


const UsersInfo = () => {
    const [info, setInfo] = useState([]);
    
    useEffect(() => {
        fetch('/usersPersonalInfo.json')
            .then(res => res.json())
        .then(data=>setInfo(data))
    },[])
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl mt-4">
            <Tabs>
                <TabList>
                    <Tab>Personal Info</Tab>
                    <Tab>Identification info</Tab>
                    <Tab>Address Info</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-3xl font-bold mt-5 text-center'>Current Personal Information</h2>
                    <div className='w-full mx-auto'>
                        {
                            info.filter(d => d.category == 'Personal Info').map(user => <p key={user._id}>
                                <div className="grid grid-cols-2 gap-2 mb-2">
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl"> 
                                            <p>Name Bangla: {user.name_bangla}</p>
                                        </div>
                                    </div>
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl">
                                            <p>Name English: {user.name_english}</p>
                                        </div>
                                    </div>
                               </div>
                                <div className="grid grid-cols-2 gap-2 mb-2">
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl"> 
                                            <p>Father name: {user.father_name}</p>
                                        </div>
                                    </div>
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl">
                                            <p>Mother name: {user.mother_name}</p>
                                        </div>
                                    </div>
                               </div>
                                <div className="grid grid-cols-2 gap-2 mb-2">
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl"> 
                                            <p>Gender: {user.gender}</p>
                                        </div>
                                    </div>
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl">
                                            <p>Blood group: {user.blood_group}</p>
                                        </div>
                                    </div>
                               </div>
                                <div className="grid grid-cols-2 gap-2 mb-2">
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl"> 
                                            <p>Birth regist no: {user.birth_regist_no}</p>
                                        </div>
                                    </div>
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl">
                                            <p>Date of Birth: {user.Date_of_Birth}</p>
                                        </div>
                                    </div>
                               </div>
                                <div className="grid grid-cols-2 gap-2 mb-2">
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl">
                                            <p>birth_place: {user.birth_place}</p>
                                        </div>
                                    </div>
                               </div>
                            </p>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-3xl font-bold mt-5 text-center'>Current Identification information</h2>
                    <div className='w-full mx-auto'>
                        {
                            info.filter(d => d.category == 'Identification info').map(user => <p key={user._id}>
                                <div className="grid grid-cols-2 gap-2 mb-2">
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl">
                                            <p>Education: {user.education}</p>
                                        </div>
                                    </div>
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl">
                                            <p>Occupation: {user.occupation}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 mb-2">
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl">
                                            <p>mobile_number: {user.mobile_number}</p>
                                        </div>
                                    </div>
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl">
                                            <p>Religion: {user.religion}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 mb-2">
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl">
                                            <p>driving license number: {user.driving_license_number}</p>
                                        </div>
                                    </div>
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl">
                                            <p>Passport number: {user.passport_number}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 mb-2">
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl">
                                            <p>Tin: {user.tin}</p>
                                        </div>
                                    </div>
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl">
                                            <p>Identification Mark: {user.Identification_Mark}</p>
                                        </div>
                                    </div>
                                </div>
                            </p>)
                        }

                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-3xl font-bold mt-5 text-center'>Current Address Information</h2>
                    <div className='w-full mx-auto'>
                        {
                            info.filter(d => d.category == 'Address Info').map(user => <p key={user._id}>
                                <div className="grid grid-cols-2 gap-2 mb-2">
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl">
                                            <p>Division: {user.division}</p>
                                        </div>
                                    </div>
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl">
                                            <p>District: {user.district}</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="grid grid-cols-2 gap-2 mb-2">
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl">
                                            <p>Upazila: {user.upazila}</p>
                                        </div>
                                    </div>
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl">
                                            <p>Police station: {user.police_station}</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="grid grid-cols-2 gap-2 mb-2">
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl">
                                            <p>Post code: {user.post_code}</p>
                                        </div>
                                    </div>
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl">
                                            <p>Post office: {user.post_office}</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="grid grid-cols-2 gap-2 mb-2">
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl">
                                            <p>House holding: {user.house_holding}</p>
                                        </div>
                                    </div>
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl">
                                            <p>Voter area: {user.voter_area}</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="grid grid-cols-2 gap-2 mb-2">
                                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                        <div className="card-body border rounded-b-xl">
                                            <p>village road: {user.village_road}</p>
                                        </div>
                                    </div>
                                </div> 
                            </p>)
                        }

                    </div>
                </TabPanel>
            </Tabs> 
        </div>
    );
};

export default UsersInfo;