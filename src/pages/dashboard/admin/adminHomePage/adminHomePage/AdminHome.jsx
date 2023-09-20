import { Link } from 'react-router-dom';
import demo1 from '../../../../../assets/Images/demo1.jpg';
import demo2 from '../../../../../assets/Images/demo2.jpg';
import demo3 from '../../../../../assets/Images/demo3.jpg';
import AdminHomeChart from '../adminHomeComponent/AdminHomeChart';
import AdminHomePieChart from '../adminHomeComponent/AdminHomePieChart';
import { useEffect, useState } from 'react';


const AdminHome = () => {
    const [info, setInfo] = useState([]);
    const [reviewed, setReviewed] = useState([]);
    const [approved, setApproved] = useState([]);
   useEffect(() => {
    fetch('http://localhost:5000/approved_applications')
    .then(res => res.json())
    .then(data => setApproved(data));
   }, []);

   useEffect(() => {
    fetch('http://localhost:5000/reviewed_applications')
    .then(res => res.json())
    .then(data => setReviewed(data));
   }, []);

    useEffect(() => {
        fetch('http://localhost:5000/pending_applications')
            .then(res => res.json())
            .then(data => setInfo(data));
    }, []);
    return (
        <div>
            <h1 className='text-2xl font-bold mb-3'>Welcome to Admin Home page</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">

                <div className="card w-80 image-full mx-auto">
                    <figure><img src={demo3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Total Pending</h2>
                        <p className='text-2xl font-bold'> {info.length }</p>
                        <div className="card-actions justify-end">
                            <Link to="/dashboard/pending_application"><button className="btn btn-primary">View</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-80 image-full mx-auto">
                    <figure><img src={demo1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Total Approved</h2>
                        <p className='text-2xl font-bold'>{approved.length}</p>
                        <div className="card-actions justify-end">
                        <Link to="/dashboard/approved_application"><button className="btn btn-primary">View</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-80 image-full mx-auto">
                    <figure><img src={demo2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Total Reviwed</h2>
                        <p className='text-2xl font-bold'>{reviewed.length}</p>
                        <div className="card-actions justify-end">
                        <Link to="/dashboard/reviewed_application"><button className="btn btn-primary">View</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
                <AdminHomeChart info={info} reviewed={reviewed} approved={approved}></AdminHomeChart>
                <AdminHomePieChart info={info} reviewed={reviewed} approved={approved}></AdminHomePieChart>
            </div>
        </div>
    );
};

export default AdminHome;