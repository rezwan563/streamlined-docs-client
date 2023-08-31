import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";
import Header from "../shared/header/Header";

const MainLayout = () => {
  return (
    <div className="lg:max-w-7xl lg:mx-auto">
      <Header/>
      <Outlet />
    </div>
  );
};

export default MainLayout;
