import { useEffect, useState } from "react";
import './PendingDocument.css'

const PendingDocument = () => {
    const [pending, setPending] = useState([]);

    useEffect(() => {
        fetch('/pending.json')
        .then(res => res.json())
        .then(data => setPending(data));
    },[])

    return (
        <div>
            <h1 className="text-4xl text-center font-bold mb-8 text-purple-500">Pending Documents will be here</h1>
       
            <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead className="font-bold text-xl">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Type</th>
                            <th>Date</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            pending.map((p,index) => 
                                <tr key={p._id}>
                                    <th>{index + 1}</th>
                                    <td className="grid grid-cols-1 md:grid-cols-2"><img className="rounded w-12 h-12" src={p.Image} alt="" />
                                        <p className="mt-3">{p.name}</p></td>
                                    <td>{p.email}</td>
                                    <td>{p.type}</td>
                                    <td>{p.date}</td>
                                    
                                </tr>
                           )
                        }
                      
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default PendingDocument;