import { useContext, useEffect, useState } from 'react';
import UsersCurrentInfo from '../adminReviewComponents/UsersCurrentInfo';
import UserEditProfile from '../adminReviewComponents/UsersEditProfile';
import { AuthContext } from '../../../../../providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useLoaderData, useParams } from 'react-router-dom';

const AdminReview = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const { user } = useContext(AuthContext);
    const {id} = useParams();
    console.log(id);
    const userdata= useLoaderData();
    const info = {
        userEmail: userdata?.userEmail, 
        personal_data: userdata?.personal_data,
        identification_data: userdata?.identification_data,
        address_data: userdata?.address_data,

    }
    const [profile, setProfile] = useState();

  
   useEffect(() => {
    axios.get('http://localhost:5000/profiles')
    .then(response => {
      const currentProfile = response.data.find(profile => profile.userEmail == userdata?.userEmail);
      setProfile(currentProfile);
      console.log(currentProfile);
    })
    .catch(error => {
      console.error('Error fetching profiles:', error);
    });
}, []);
    const handleApprove = () => {
       axios.post(`http://localhost:5000/approved_applications`,info )
       axios.delete(`http://localhost:5000/pending_applications/${userdata?._id}` )
       axios.put(`http://localhost:5000/profiles/${profile?._id}`,info)

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Edited info updated.',
          showConfirmButton: false,
          timer: 1500
        });
        setIsButtonDisabled(true);
      };
      const handleReview = () => {
       axios.post(`http://localhost:5000/reviewed_applications`,info )
    //   axios.delete(`http://localhost:5000/pending_applications/${id}` )
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Edited info Reviewed',
            showConfirmButton: false,
            timer: 1500
          });
          setIsButtonDisabled(true);
      };
      const handleDelete = () => {
        axios.delete(`http://localhost:5000/pending_applications/${id}` )
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Request Cancelled.',
          showConfirmButton: false,
          timer: 1500
        });
        setIsButtonDisabled(true);
      };
    return (

        <div data-testid="child">
            <h1 className='text-2xl font-bold'> Welcome {user?.displayName}, To Application Review</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <UsersCurrentInfo></UsersCurrentInfo>
                <UserEditProfile></UserEditProfile>
            </div>
            <div className='grid lg:grid-cols-3 gap-2 mt-8 bg-white p-4 rounded-lg'>
                <button onClick={handleApprove} className='btn btn-success ' >Approve</button>
                <button onClick={handleReview} className='btn btn-primary ' >Review</button>
                <button onClick={handleDelete}  className='btn btn-warning' >Cancel request</button>
            </div>
        </div>

    );
};

export default AdminReview;