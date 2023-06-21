import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home/Home";
import Test from "../pages/Test/Test";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop/OurShop";
import Register from "../pages/Register/Register";
import Authenticate from "../layout/Authenticate/Authenticate";
import Login from "../pages/Login/Login";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Contact from "../pages/Contact/Contact";
import AddItems from "../pages/Admin/AddItems/AddItems";
import AdminHome from "../pages/Admin/AdminHome/AdminHome/AdminHome";
import DashboardAdmin from "../layout/Dashboard/Admin/DashboardAdmin";
import DashboardClient from "../layout/Dashboard/Client/DashboardClient";
import ClientHome from "../pages/Client/ClientHome/ClientHome/ClientHome";
import NotFound from "../layout/NotFound/NotFound";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import MyCart from "../pages/Client/MyCart/MyCart/MyCart";
import AllUsers from "../pages/Admin/AllUsers/AllUsers/AllUsers";

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
    ],
  },

  // User Layour
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
    element: <DashboardAdmin></DashboardAdmin>,
    children: [
      {
        path: "home",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "add-items",
        element: <AddItems></AddItems>,
      },
      {
        path: "all-users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },

  // 4O4 Page
  {
    path: "/",
    element: <NotFound></NotFound>,
    children: [
      {
        path: "*",
        element: <NotFoundPage></NotFoundPage>,
      },
    ],
  },

  // Client Dashboard Layout
  {
    path: "client-dashboard",
    element: <DashboardClient></DashboardClient>,
    children: [
      {
        path: "home",
        element: <ClientHome></ClientHome>,
      },
      {
        path: "add-items",
        element: <AddItems></AddItems>,
      },
      {
        path: "my-cart",
        element: <MyCart></MyCart>,
      },
    ],
  },
]);
