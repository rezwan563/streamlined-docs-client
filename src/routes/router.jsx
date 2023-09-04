import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout";
import MyDetails from "../pages/dashboard/mydetails/MyDetails";
import AllDocuments from "../pages/dashboard/alldocuments/AllDocuments";
import PendingDocument from "../pages/dashboard/pendingdoc/PendingDocument";
import UploadDocument from "../pages/dashboard/uploaddocument/UploadDocument";
import DocumentProgress from "../pages/dashboard/progress/DocumentProgress";
import Settings from "../pages/dashboard/settings/Settings";
import PassportApplicationForm from "../sections/PassportApplicationForm";
import Chatbox from "../pages/dashboard/chat/Chatbox";
import Auth from "../pages/Auth/Auth";
import Header from "../shared/header/Header";
import AdminHome from "../pages/dashboard/admin/adminHomePage/AdminHome";
import UsersHome from "../pages/dashboard/admin/adminHomePage/adminHomePage/usersHome/UsersHome";
import EditProfile from "../pages/dashboard/editprofile/EditProfile";
import Homepage from "../pages/homepage/homepage/Homepage"


const router = createBrowserRouter([
  {
    path:'/header',
    element: <Header/>
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage/>
      },
       {
        path: "/auth",
        element: <Auth />
       },
      {
        path: "/apply",
        element: <PassportApplicationForm></PassportApplicationForm>,
      },
      
      
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/admin",
        element: <AdminHome />,
      },
      {
        path: "/dashboard/my-details",
        element: <MyDetails />,
      },
      {
        path:"/dashboard/create_profile",
        element:<EditProfile/>
      },
      {
        path: "/dashboard/all_documents",
        element: <AllDocuments />,
      },
      {
        path:'/dashboard/chat',
        element:<Chatbox/>
      },
      {
        path: "/dashboard/pending_documents",
        element: <PendingDocument />,
      },
      {
        path: "/dashboard/upload",
        element: <UploadDocument />,
      },
      {
        path: "/dashboard/progress",
        element: <DocumentProgress />,
      },
      {
        path: "/dashboard/settings",
        element: <Settings />,
      },
      {
        path:"/dashboard/admin_review",
        element:<UsersHome/>,
      },
     
     
    ],
  },
]);

export default router;
