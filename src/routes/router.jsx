import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/homepage/Home";
import DashboardLayout from "../layout/DashboardLayout";
import MyDetails from "../pages/dashboard/mydetails/MyDetails";
import DashboardSummary from "../pages/dashboard/dasboardsummary/DashboardSummary";
import AllDocuments from "../pages/dashboard/alldocuments/AllDocuments";
import PendingDocument from "../pages/dashboard/pendingdoc/PendingDocument";
import UploadDocument from "../pages/dashboard/uploaddocument/UploadDocument";
import DocumentProgress from "../pages/dashboard/progress/DocumentProgress";
import Settings from "../pages/dashboard/settings/Settings";
import PassportApplicationForm from "../Sections/PassportApplicationForm";
import EditProfile from "../pages/dashboard/mydetails/Editprofile"
import Auth from "../pages/Auth/Auth";
import AdminHome from "../pages/dashboard/admin/adminHomePage/AdminHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        element: <DashboardSummary />,
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
        path: "/dashboard/pending_documents",
        element: <PendingDocument />,
      },
      {
        path: "/dashboard/upload",
        element: <UploadDocument />,
      },
      {
        path: "/dashboard/pending_documents",
        element: <PendingDocument />,
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
      }
    ],
  },
]);

export default router;
