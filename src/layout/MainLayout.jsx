import { Outlet } from "react-router-dom";
import Header from "../shared/header/Header";
import { useState } from "react";

const MainLayout = () => {

  return (
    <div className="lg:max-w-7xl lg:mx-auto">
      <Header/>
      <Outlet/>
    </div>
  );
};

export default MainLayout;
