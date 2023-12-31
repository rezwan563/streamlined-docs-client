import { Outlet } from "react-router-dom";
import Header from "../shared/header/header/Header";
import Footer from "../shared/footer/Footer";

const MainLayout = () => {

  return (
    <div className="lg:max-w-7xl lg:mx-auto">
      <Header/>
      <Outlet/>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
