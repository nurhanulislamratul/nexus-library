import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import AddServices from "../pages/AddServices";
import ServicesDetails from "../pages/ServicesDetails";
import PurchaseConfirm from "../pages/PurchaseConfirm";
import ManageServices from "../pages/ManageServices";
import BookedService from "../pages/BookedService";
import AllServices from "../pages/AllServices";
import ServiceToDo from "../pages/ServiceToDo";
import UpdateService from "../pages/UpdateService";
import ChatBot from "../pages/ChatBot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
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
        path: "/services",
        element: <AllServices />,
      },
      {
        path: "/chatbot",
        element: <ChatBot />,
      },
      {
        path: "/add-service",
        element: (
          <PrivateRoute>
            <AddServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-service",
        element: (
          <PrivateRoute>
            <ManageServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/booked-services",
        element: (
          <PrivateRoute>
            <BookedService />
          </PrivateRoute>
        ),
      },
      {
        path: "/service-to-do",
        element: (
          <PrivateRoute>
            <ServiceToDo />
          </PrivateRoute>
        ),
      },
      {
        path: "/services-details/:id",
        element: (
          <PrivateRoute>
            <ServicesDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/services/${params.id}`),
      },
      {
        path: "/purchase/:id",
        element: (
          <PrivateRoute>
            <PurchaseConfirm />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/services/${params.id}`),
      },
      {
        path: "/update-service/:id",
        element: (
          <PrivateRoute>
            <UpdateService />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/services/${params.id}`),
      },
    ],
  },
]);

export default router;
