import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";
import Auth from "../pages/Auth/Auth";
import AdminHome from "../pages/dashboard/admin/adminHomePage/adminHomePage/AdminHome";
import DataTable from "../pages/dashboard/dataTable/DataTable";
import Chatbox from "../pages/dashboard/chat/Chatbox";
import DocumentProgress from "../pages/dashboard/progress/DocumentProgress";
import Settings from "../pages/dashboard/settings/Settings";
import Header from "../shared/header/header/Header";
import Homepage from "../pages/homepage/homepage/Homepage";
import UploadDocument from "../pages/dashboard/uploaddocument/UploadDocument";
import AdminReview from "../pages/dashboard/admin/adminReview/adminReviewPage/AdminReview";
import EditProfile from "../pages/dashboard/editprofile/EditProfile";
import UsersHome from "../pages/dashboard/UserHome.jsx/UserHome";
import AboutUs from "../pages/aboutus/AboutUs";
import FAQ from "../pages/faq/FAQ";
import SeeDetails from "../pages/dashboard/UserHome.jsx/SeeDetails";
import UsersEditeRoute from "../pages/dashboard/UserHome.jsx/UsersEditeRoute";


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
        path: "/about_us",
        element: <AboutUs />,
      },
      {
        path: "/faq",
        element: <FAQ />,
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
        path: "/dashboard/user",
        element: <UsersHome />,
      },
      {
        path: "/dashboard/create_profile",
        element: <EditProfile />,
      },
      {
        path: "/dashboard/pending_application",
        element: <DataTable />,
      },
      {
        path: "/dashboard/approved_application",
        element: <DataTable />,
      },
      {
        path: "/dashboard/rejected_application",
        element: <DataTable />,
      },
      {
        path: "/dashboard/chat",
        element: <Chatbox />,
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
        path: "/dashboard/admin_review/:id",
        element: <AdminReview />,
        loader: ({ params }) => fetch(`http://localhost:5000/pending_applications/${params.id}`)
      },
      {
        path: "/dashboard/seedetails",
        element:<SeeDetails></SeeDetails>
      },
      {
        path: "/dashboard/edit_profile",
        element:<DocumentProgress></DocumentProgress>
      }, 
      {
        path: "/dashboard/users_edit_profile",
        element:<UsersEditeRoute></UsersEditeRoute>
      }
    ],
  },
]);

export default router;
