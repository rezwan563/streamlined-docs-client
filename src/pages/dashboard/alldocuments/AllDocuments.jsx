


const AllDocuments = () => {
    return (
        <div>
            <h4 className="text-2xl font-semibold border-green-300 pb-2 border-b-2">All Documents</h4>

            {/* <div className="overflow-x-auto mt-5">
                <table className="table">
                  
                    <thead>
                        <tr>
                            <div className="w-full">
                                <th>User Profile</th>
                                <th>Email</th>
                                <th>View Details</th>
                                <th>Action</th>
                            </div>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <div className="w-full">
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div><div className="font-bold">Hart Hagerty</div></div>
                                    </div>
                                </td>
                                <td>Zemlak, Daniel and Leannon</td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </div>
                        </tr>

                        <tr>
                            <div>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </div>
                        </tr>

                    </tbody>
                </table>
            </div> */}

            <div className="mt-5">
                <div className="grid grid-cols-12 gap-5 bg-slate-200 py-4 px-3">
                    <div className="col-span-4 font-bold">User profile</div>
                    <div className="col-span-4 font-bold">Email</div>
                    <div className="col-span-2 font-bold flex items-center">View Details</div>
                    <div className="col-span-2 font-bold flex items-center">Action</div>
                </div>

                <div className="grid grid-cols-12 gap-5 bg-white p-3 mt-4 hover:shadow-lg cursor-pointer">
                    <div className="col-span-4">
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className=" w-12 h-12">
                                    <img className="rounded-full" src="https://i.ibb.co/R4wcyR4/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg" alt="user image" />
                                </div>
                            </div>
                            <div><div className="font-bold">Hart Hagerty</div></div>
                        </div>
                    </div>
                    <div className="col-span-4 flex items-center">
                        <p className="font-medium">robiulromjan.ius@gmail.com</p>
                    </div>
                    <div className="col-span-2 flex items-center">
                        <button className="btn-sm btn-success rounded-sm">Details</button>
                    </div>
                    <div className="col-span-2 flex items-center">
                        <button className="btn-sm btn-error rounded-sm">Delete</button>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default AllDocuments;