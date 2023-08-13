import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex justify-center items-center min-h-screen sm:py-12 bg-green-100'>
            <div className='flex flex-col max-w-lg p-6 rounded-md sm:p-5 w-full bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                    <p className='text-sm text-gray-400'>
                        Welcome to our passport app
                    </p>
                </div>
                <form
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
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                   Confirm Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='confirm_password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                            />
                        </div>
                    </div>

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
                    className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
                >
                    <FcGoogle size={32} />

                    <p>Continue with Google</p>
                </div>
                <p className='px-6 text-sm text-center text-gray-400'>
                     Have an account yet?{' '}
                    <Link
                        to='/login'
                        className='hover:underline hover:text-green-500 text-gray-600'
                    >
                        Login here
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default Register;