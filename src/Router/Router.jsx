import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home/Home";
import Test from "../pages/Test/Test";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop/OurShop";
import Register from "../pages/Register/Register";
import Authenticate from "../layout/Authenticate/Authenticate";
import Login from "../pages/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../layout/Dashboard/Dashboard";
import AdminHome from "../pages/AdminHome/AdminHome";
import AddItems from "../pages/AddItems/AddItems";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/our-menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/our-shop/:category",
        element: (
          <OurShop></OurShop>
          // <PrivateRoute>
          // </PrivateRoute>
        ),
      },
      {
        path: "/our-shop",
        element: (
          <OurShop></OurShop>
          // <PrivateRoute>
          // </PrivateRoute>
        ),
      },

      {
        path: "/test",
        element: <Test></Test>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },

  {
    path: "user",
    element: <Authenticate></Authenticate>,
    children: [
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },

  // Admin Dashboard Layout
  {
    path: "admin-dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "home",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "add-items",
        element: <AddItems></AddItems>,
      },
    ],
  },
]);
