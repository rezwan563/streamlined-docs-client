import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout";
import MyDetails from "../pages/dashboard/mydetails/MyDetails";
import DashboardSummary from "../pages/dashboard/dasboardsummary/DashboardSummary";
import AllDocuments from "../pages/dashboard/alldocuments/AllDocuments";
import PendingDocument from "../pages/dashboard/pendingdoc/PendingDocument";
import UploadDocument from "../pages/dashboard/uploaddocument/UploadDocument";
import DocumentProgress from "../pages/dashboard/progress/DocumentProgress";
import Settings from "../pages/dashboard/settings/Settings";
import PassportApplicationForm from "../sections/PassportApplicationForm";
import EditProfile from "../pages/dashboard/mydetails/Editprofile"
import Chatbox from "../pages/dashboard/chat/Chatbox";
import Auth from "../pages/Auth/Auth";
import Header from "../shared/header/Header";
import Homepage from "../pages/homepage/Homepage";
import AdminHome from "../pages/dashboard/admin/adminHomePage/AdminHome";
import UsersHome from "../pages/dashboard/admin/adminHomePage/adminHomePage/usersHome/UsersHome";

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
        element: <Homepage/>,
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
        path: "/dashboard/",
        element: <AdminHome />,
      },
      {
        path: "/dashboard/my-details",
        element: <MyDetails />,
      },

      {
        path: "/dashboard/edit-profile",
        element: <EditProfile />,
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
        path: "/dashboard/adminhome",
        element:<AdminHome></AdminHome>
      },
     
    ],
  },
]);

export default router;
