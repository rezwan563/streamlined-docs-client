import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DataTableForReview = () => {
  const [info, setInfo] = useState([]);

  const [del, setDel] = useState();

  useEffect(() => {
    fetch('https://streamlined-docs-server.vercel.app/reviewed_applications')
      .then(res => res.json())
      .then(data => setInfo(data));
  }, []);

  const handleDelete = _id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://streamlined-docs-server.vercel.app/reviewed_applications/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const reamining = del.filter(t => t._id !== _id);
              setDel(reamining)
            }

          })

      }
    })

  }

  return (
    <div>
      <h4 className="text-2xl font-semibold border-green-300 pb-2 border-b-2">
        All Documents
      </h4>

      <div className="mt-5">
        <div className="grid grid-cols-12 gap-5 bg-slate-200 py-4 px-3">
          <div className="col-span-4 font-bold">User profile</div>
          <div className="col-span-4 font-bold">Email</div>
          <div className="col-span-2 font-bold flex items-center">
            View Details
          </div>
          <div className="col-span-2 font-bold flex items-center"></div>
        </div>
        {
          info.map((profile) => <p key={profile._id}>
            <div className="grid grid-cols-12 gap-5 bg-white p-3 mt-4 hover:shadow-lg cursor-pointer">
              <div className="col-span-4">
                <div className="flex items-center space-x-3">
                  {/* <div className="avatar">
                    <div className=" w-12 h-12">
                      <img
                        className="rounded-full"
                        src=""
                        alt="user image"
                      />
                    </div>
                  </div> */}
                  <div>
                    <div className="font-bold">{ profile.personal_data[0]?.name_bn}</div>
                  </div>
                </div>
              </div>
              <div className="col-span-4 flex items-center">
                <p className="font-medium">{profile.userEmail }</p>
              </div>
              <div className="col-span-2 flex items-center">
                {/* <button className="btn-sm btn-success rounded-sm">
                  <Link to={`/dashboard/admin_review/${profile._id}`}>Details</Link>
                </button> */}
              </div>
              {/* <div className="col-span-2 flex items-center">
                <button onClick={()=>handleDelete(profile._id)} className="btn-sm btn-error rounded-sm">Delete</button>
              </div> */}
            </div>
          </p>)
        }
      </div>
    </div>
  );
};

export default DataTableForReview;
