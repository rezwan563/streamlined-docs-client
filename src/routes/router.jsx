import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";
import Auth from "../pages/Auth/Auth";
import AdminHome from "../pages/dashboard/admin/adminHomePage/adminHomePage/AdminHome";
import AllDocuments from "../pages/dashboard/alldocuments/AllDocuments";
import Chatbox from "../pages/dashboard/chat/Chatbox";
import EditProfile from "../pages/dashboard/mydetails/Editprofile";
import MyDetails from "../pages/dashboard/mydetails/MyDetails";
import PendingDocument from "../pages/dashboard/pendingdoc/PendingDocument";
import DocumentProgress from "../pages/dashboard/progress/DocumentProgress";
import Settings from "../pages/dashboard/settings/Settings";
import UploadDocument from "../pages/dashboard/uploaddocument/UploadDocument";
import Homepage from "../pages/homepage/Homepage";
import PassportApplicationForm from "../sections/PassportApplicationForm";
import Header from "../shared/header/Header";

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
