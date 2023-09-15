import { Outlet } from "react-router-dom";
import Header from "../shared/header/header/Header";
import { useState } from "react";
import Footer from "../shared/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="lg:max-w-7xl lg:mx-auto">
        <Header />
        <Outlet />
      </div>
        <Footer></Footer>
    </>
  );
};

export default MainLayout;
