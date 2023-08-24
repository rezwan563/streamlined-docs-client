import { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import 'react-tabs/style/react-tabs.css';

const Register = () => {
    const [show, setShow] = useState(true);
    const [showConfirm, setShowConfirm] = useState(true);
    const [error, setError] = useState("");
    const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.first_name.value;
        const lastName = form.last_name.value;
        const fullName = firstName + " " + lastName
        const email = form.email.value;
        const phone = form.phone.value;
        const password = form.password.value;
        const confirmPassword = form.confirm_password.value;

        if (password !== confirmPassword) {
            return setError("Password is not match with confirm password")
        }

        setError("")

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                updateUserProfile(fullName, phone)
                    .then(() => {
                        Swal.fire({
                            title: 'Success!',
                            text: 'You have successfully registered',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                        navigate("/")
                    })
                    .catch(error => {
                        setError(error.message)
                    })
            })
            .catch(error => {
                setError(error.message)
            })

        form.reset()

    }


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className='flex justify-center items-center min-h-screen sm:py-12 bg-white'>
            <div className='flex flex-col max-w-lg p-6 rounded-md sm:p-5 w-full bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                    <p className='text-sm text-gray-400'>
                        Welcome to our passport app
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='grid md:grid-cols-2 gap-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                First Name
                            </label>
                            <input
                                type='text'
                                name='first_name'
                                required
                                placeholder='first name'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Last Name
                            </label>
                            <input
                                type='text'
                                name='last_name'
                                required
                                placeholder='last name'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                required
                                placeholder='type email address'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Phone Number
                            </label>
                            <input
                                type='number'
                                name='phone'
                                required
                                placeholder='type phone number'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div className='relative'>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input
                                type={show ? "password" : "text"}
                                name='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                            />
                            <span onClick={() => setShow(!show)} className="cursor-pointer absolute right-0 top-1/2 mt-2 me-4">
                                {show ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <div className='relative'>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Confirm Password
                                </label>
                            </div>
                            <input
                                type={showConfirm ? "password" : "text"}
                                name='confirm_password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                            />
                            <span onClick={() => setShowConfirm(!showConfirm)} className="cursor-pointer absolute right-0 top-1/2 mt-2 me-4">
                                {showConfirm ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>
                    <p className='text-center text-red-500 font-medium'>{error}</p>
                    <div>
                        <button
                            type='submit'
                            className='bg-green-500 hover:bg-green-700 transition-all w-full rounded-md py-3 text-white'
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Sign up with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <div
                    onClick={handleGoogleSignIn}
                    className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
                >
                    <FcGoogle size={32} />

                    <p>Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Register;