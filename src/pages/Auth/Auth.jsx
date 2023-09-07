
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Lottie from "lottie-react";
import regAnim from "../../assets/animation_llgf060i.json"
import Register from '../register/Register';
import Login from '../login/Login';


const Auth = () => {

    return (
        <div className='grid md:grid-cols-2'>
            <Lottie className='hidden md:block h-[100vh]' animationData={regAnim} />
            <div className='text-center'>
                <Tabs className="mt-5">
                    <TabList className="">
                        <Tab>Sign Up</Tab>
                        <Tab>Login</Tab>
                    </TabList>

                    <TabPanel>
                        <Register />
                    </TabPanel>
                    <TabPanel>
                        <Login />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Auth;