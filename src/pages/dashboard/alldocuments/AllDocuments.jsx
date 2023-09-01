


const AllDocuments = () => {
    return (
        <div>
            <h4 className="text-2xl font-semibold border-green-300 pb-2 border-b-2">All Documents</h4>

            <div className="w-3/4 mx-auto">
                <table className="w-full">
                    {/* head */}
                    <thead className="">
                        <div>
                            <tr>
                                <th>User Profile</th>
                                <th>Email</th>
                                <th>View Details</th>
                                <th>Action</th>
                            </tr>
                        </div>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <div className="mb-8 bg-slate-400">
                            <tr>
                                <td className="border-b">
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img className="w-12 h-12 rounded-full" src="https://lh3.googleusercontent.com/a/AAcHTte3HNFLKbFV2Hf46PeH1luCB4-S8muIxHZJpRxCkRadDQ=s96-c" alt="User Image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Robiul Alam Romjan</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-b"><span>robiulromjan.ius@gmail.com</span></td>
                                <td className="border-b"><button>View Details</button></td>
                                <td className="border-b"><button>Delete</button></td>
                            </tr>
                        </div>
                        <div>
                            <tr>
                                <td className="border-b">
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img className="w-12 h-12 rounded-full" src="https://lh3.googleusercontent.com/a/AAcHTte3HNFLKbFV2Hf46PeH1luCB4-S8muIxHZJpRxCkRadDQ=s96-c" alt="User Image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Robiul Alam Romjan</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-b"><span>robiulromjan.ius@gmail.com</span></td>
                                <td className="border-b"><button>View Details</button></td>
                                <td className="border-b"><button>Delete</button></td>
                            </tr>
                        </div>


                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default AllDocuments;