import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/homepage/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import DashboardLayout from "../layout/DashboardLayout";
import NewApplication from "../pages/dashboard/newapplicattion/NewApplication";
import DashboardSummary from "../pages/dashboard/dasboardsummary/DashboardSummary";
import AllDocuments from "../pages/dashboard/alldocuments/AllDocuments";
import PendingDocument from "../pages/dashboard/pendingdoc/PendingDocument";
import UploadDocument from "../pages/dashboard/uploaddocument/UploadDocument";
import DocumentProgress from "../pages/dashboard/progress/DocumentProgress";
import Settings from "../pages/dashboard/settings/Settings";
import PassportApplicationForm from "../Sections/PassportApplicationForm";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/apply",
        element: <PassportApplicationForm></PassportApplicationForm>
      }
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
        path: "/dashboard/new_application",
        element:<NewApplication/>
      },
      {
        path: "/dashboard/all_documents",
        element:<AllDocuments/>
      },
      {
        path: "/dashboard/pending_documents",
        element:<PendingDocument/>
      },
      {
        path: "/dashboard/upload",
        element:<UploadDocument/>
      },
      {
        path: "/dashboard/pending_documents",
        element:<PendingDocument/>
      },
      {
        path:"/dashboard/progress",
        element:<DocumentProgress/>,
      },
      {
        path:"/dashboard/settings",
        element:<Settings/>,
      },
      

    ],
  },
]);

export default router;
