import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";


const UsersInfo = () => {
    const [info, setInfo] = useState([null]);
    
    useEffect(() => {
        fetch('https://streamlined-docs-server.vercel.app/api/profiles/muhammadraselbinsiddik@gmail.com')
            .then(res => res.json())
            .then(data => setInfo(data));
    },[])
    return (
        <div data-testid="child" className="card card-compact w-full bg-base-100 shadow-xl mt-4">
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
                            info?.personal_data &&(
                                <>
                                    <div className="grid grid-cols-2 gap-2 mb-2">
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>Name Bangla: {info.personal_data[0].name_bn}</p>
                                            </div>
                                        </div>
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>Father Name:  {info.personal_data[0].father_name_bn}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mb-2">
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>Mother Name:  {info.personal_data[0].mother_name_bn}</p>
                                            </div>
                                        </div>
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>Gender:  {info.personal_data[0].gender}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mb-2">
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>Gender:  {info.personal_data[0].gender}</p>
                                            </div>
                                        </div>
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>Blood Group:  {info.personal_data[0].blood_group}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mb-2">
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>Date of Birth: {info.personal_data[0].dob}</p>
                                            </div>
                                        </div>
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>Birth registration:  {info.personal_data[0].birth_registration}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mb-2">
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>birth_place: {info.personal_data[0].birth_place}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                          )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-3xl font-bold mt-5 text-center'>Current Identification information</h2>
                    <div className='w-full mx-auto'>
                        {
                            info?.identification_data && (
                                <>
                                    <div className="grid grid-cols-2 gap-2 mb-2">
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>Education: {info.identification_data[0].education_bn}</p>
                                            </div>
                                        </div>
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>Occupation: {info.identification_data[0].occupation}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mb-2">
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>Religion: {info.identification_data[0].religion}</p>

                                            </div>
                                        </div>
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>Passport Number: {info.identification_data[0].passport_number}</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mb-2">
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>Tin: {info.identification_data[0].tin}</p>

                                            </div>
                                        </div>
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>Mobile number: {info.identification_data[0].mobile_number}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mb-2">
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>Identification mark: {info.identification_data[0].mobile_number}</p>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </>
                            )
                        }

                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-3xl font-bold mt-5 text-center'>Current Address Information</h2>
                    <div className='w-full mx-auto'>
                        {
                            info?.address_data && (
                                <>
                                    <div className="grid grid-cols-2 gap-2 mb-2">
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>Division: {info.address_data[0].division}</p>
                                            </div>
                                        </div>
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>District:  {info.address_data[0].district}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mb-2">
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>Upozila:  {info.address_data[0].upozila}</p>
                                            </div>
                                        </div>
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>Police station:  {info.address_data[0].police_station}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mb-2">
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>Post code:  {info.address_data[0].post_code}</p>
                                            </div>
                                        </div>
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>Post office:  {info.address_data[0].post_office_bn}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mb-2">
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>House holding: {info.address_data[0].house_holding_bn}</p>
                                            </div>
                                        </div>
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>Voter area:  {info.address_data[0].voter_area}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mb-2">
                                        <div className="card card-compact w-full bg-base-100 shadow-xl mt-2">
                                            <div className="card-body border rounded-b-xl">
                                                <p>Village road: {info.address_data[0].village_road_bn}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }

                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default UsersInfo;

