import UsersCurrentInfo from '../adminReviewComponents/UsersCurrentInfo';
import UserEditProfile from '../adminReviewComponents/UsersEditProfile';

const AdminReview = () => {
    return (

        <div data-testid="child">
            <h1 className='text-2xl font-bold'> Welcome Jashim, To Application Review</h1>
 <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <UsersCurrentInfo data-testid="child"></UsersCurrentInfo>
            <UserEditProfile></UserEditProfile>
            </div>
            <div className='grid grid-cols-4 gap-2 mt-8 bg-white p-4 rounded-lg'>
                <button className='btn btn-success'>Approved</button>
                <button className='btn btn-primary'>Reviwed</button>
                <button className='btn btn-info'>Rejected</button>
                <button className='btn btn-warning'>Requiste cancel</button>
            </div>
        </div>
       
    );
};

export default AdminReview;