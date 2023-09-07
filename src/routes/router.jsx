import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";
import Auth from "../pages/Auth/Auth";
import AdminHome from "../pages/dashboard/admin/adminHomePage/adminHomePage/AdminHome";
import AllDocuments from "../pages/dashboard/alldocuments/AllDocuments";
import Chatbox from "../pages/dashboard/chat/Chatbox";
import MyDetails from "../pages/dashboard/mydetails/MyDetails";
import PendingDocument from "../pages/dashboard/pendingdoc/PendingDocument";
import DocumentProgress from "../pages/dashboard/progress/DocumentProgress";
import Settings from "../pages/dashboard/settings/Settings";
import Header from "../shared/header/Header";
import Homepage from "../pages/homepage/homepage/Homepage";

import UploadDocument from "../pages/dashboard/uploaddocument/UploadDocument";
import AdminReview from "../pages/dashboard/admin/adminReview/adminReviewPage/AdminReview";
import EditProfile from "../pages/dashboard/editprofile/EditProfile";
import UsersHome from "../pages/dashboard/UserHome.jsx/UserHome";
import Details from "../pages/details/Details";

const router = createBrowserRouter([
  {
    path: "/header",
    element: <Header />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/details",
        element:<Details></Details>
      }
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
        path:"/dashboard/user",
        element:<UsersHome/>,
      },
      {
        path: "/dashboard/users",
        element: <UsersHome />,
      },
      {
        path: "/dashboard/my-details",
        element: <MyDetails />,
      },
      {
        path: "/dashboard/create_profile",
        element: <EditProfile />,
      },
      {
        path: "/dashboard/all_documents",
        element: <AllDocuments />,
      },
      {
        path: "/dashboard/chat",
        element: <Chatbox />,
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
        path: "/dashboard/admin_review",
        element: <AdminReview />,
      },
    ],
  },
]);

export default router;
