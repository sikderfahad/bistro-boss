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
        path: "/our-shop/:category",
        element: (
          <PrivateRoute>
            <OurShop></OurShop>,
          </PrivateRoute>
        ),
      },
      {
        path: "/our-shop",
        element: (
          <PrivateRoute>
            <OurShop></OurShop>,
          </PrivateRoute>
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
    path: "/",
    element: <Authenticate></Authenticate>,
    children: [
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
