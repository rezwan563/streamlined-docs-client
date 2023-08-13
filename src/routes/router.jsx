import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/homepage/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import DashboardLayout from "../layout/DashboardLayout";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'/login',
                element:<Login/>,
            },
            {
                path:'/register',
                element:<Register/>,
            },
           
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout/>
    }
])

export default router;