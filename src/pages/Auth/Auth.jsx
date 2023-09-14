import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Lottie from "lottie-react";
import regAnim from "../../assets/animation_llgf060i.json";
import Register from "../register/Register";
import Login from "../login/Login";

const Auth = () => {
  console.log(`${import.meta.env.VITE_SERVER_API}`);
  return (
    <div className="grid md:grid-cols-2">
      <Lottie className="hidden md:block " animationData={regAnim} />
      <div className="text-center">
        <Tabs className="">
          <TabList className="w-1/2 flex justify-between mx-auto">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>

          <TabPanel>
            <Login />
          </TabPanel>
          <TabPanel>
            <Register />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Auth;
