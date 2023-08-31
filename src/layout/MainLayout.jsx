import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";
import Header from "../shared/header/Header";

const MainLayout = () => {
  return (
    <div className="max-w-7xl px-2 md:px-12 lg:mx-auto">
      <Header/>
      <Outlet />
    </div>
  );
};

export default MainLayout;
