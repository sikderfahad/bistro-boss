// import React from 'react';
import { useContext } from "react";
import "./Header.css";

import Nav from "./Nav";
import { AuthContext } from "../../provider/AuthProvider";
import { FaCartPlus, FaSignOutAlt } from "react-icons/fa";
import useCart from "../../custom/useCart";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart, , isLoading] = useCart();
  const navigate = useNavigate();
  const jumpMyCart = () => {
    navigate("/client-dashboard/my-cart");
  };
  // console.log(cart);
  const nav = [
    { path: "/", label: "Home" },
    { path: "/contact", label: "Contact us" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/admin-dashboard/home", label: "Admin" },
    { path: "/our-menu", label: "Our menu" },
    { path: "/our-shop", label: "Our shop" },
    { path: "/user/register", label: "Sign up" },
    { path: "/user/login", label: "Login" },
  ];

  const userLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <nav className=" header text-white" style={{ zIndex: "999" }}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="logo flex flex-col ">
            <h1>BISTRO BOSS</h1>
            <p>Restaurant</p>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 items-center md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              {nav.map((item, idx) => (
                <Nav item={item} key={idx}></Nav>
              ))}
              {user && (
                <li onClick={jumpMyCart}>
                  <div className="btn bg-transparent hover:text-gray-900 text-white outline-none border-none relative">
                    <FaCartPlus className="text-2xl "></FaCartPlus>

                    {cart && (
                      <div className="badge badge-secondary absolute -top-2 -right-4">
                        {!isLoading ? (
                          <>
                            {cart?.length || 0}
                            {cart?.length > 99 && "+"}
                          </>
                        ) : (
                          <div className="loading loading-spinner w-[1rem]"></div>
                        )}
                      </div>
                    )}
                  </div>
                </li>
              )}
              <li className="text-white font-bold animate-pulse duration-200">
                {user?.displayName && user.displayName}
              </li>
              {user && (
                <li
                  onClick={userLogOut}
                  className="p-3 cursor-pointer bg-transparent border hover:border-[#EEFF25] duration-200 hover:animate-ping rounded-full"
                >
                  <FaSignOutAlt className="text-2xl font-semibold text-red-500"></FaSignOutAlt>{" "}
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
