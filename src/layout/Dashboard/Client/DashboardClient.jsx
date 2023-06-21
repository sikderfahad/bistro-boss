// import React from 'react';

import { NavLink, Outlet } from "react-router-dom";
import { GrClose, GrMenu } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";
// import {} from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdBookmarkAdded, MdMarkEmailRead } from "react-icons/md";
import { HiShoppingBag } from "react-icons/hi";
import {
  FaCalendarAlt,
  FaWallet,
  FaCartArrowDown,
  FaRegCommentAlt,
} from "react-icons/fa";
import "./Dashboard.css";
import useCart from "../../../custom/useCart";

const cartMenuTop = [
  {
    icon: <AiFillHome></AiFillHome>,
    menuName: "user home",
    path: "/client-dashboard/home",
  },
  {
    icon: <FaCalendarAlt></FaCalendarAlt>,
    menuName: "reservation",
    path: "/client-dashboard/reservation",
  },
  {
    icon: <FaWallet></FaWallet>,
    menuName: "payment history",
    path: "/client-dashboard/payment-history",
  },
  {
    icon: <FaCartArrowDown></FaCartArrowDown>,
    menuName: "my cart",
    path: "/client-dashboard/my-cart",
  },
  {
    icon: <FaRegCommentAlt></FaRegCommentAlt>,
    menuName: "add review",
    path: "/client-dashboard/add-review",
  },
  {
    icon: <MdBookmarkAdded></MdBookmarkAdded>,
    menuName: "my booking",
    path: "/client-dashboard/my-booking",
  },
];

const cartMenuBottom = [
  {
    icon: <AiFillHome></AiFillHome>,
    menuName: "home",
    path: "/",
  },
  {
    icon: <GiHamburgerMenu></GiHamburgerMenu>,
    menuName: "menu",
    path: "/our-menu",
  },
  {
    icon: <HiShoppingBag></HiShoppingBag>,
    menuName: "shop",
    path: "/our-shop",
  },
  {
    icon: <MdMarkEmailRead></MdMarkEmailRead>,
    menuName: "contact",
    path: "/contact",
  },
];

const DashboardClient = () => {
  const [cart, , isLoading] = useCart();
  // refetch()

  return (
    <div className="bg-[#0a1929] text-white">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div
          className="drawer-content 
        
        "
        >
          {/* Page content here */}

          <div className="lg:hidden bg-black flex w-full p-2 justify-between items-center">
            <div className="logo flex flex-col ">
              <h1 style={{ fontSize: "20px" }} className="text-lg">
                BISTRO BOSS
              </h1>
              <p
                style={{ fontSize: "16px", marginTop: "-10px" }}
                className="text-base mt-0"
              >
                Restaurant
              </p>
            </div>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-square drawer-button text-white p-0"
            >
              <GrMenu className="text-white text-2xl"></GrMenu>
            </label>
          </div>

          <div className="p-4 lg:p-12">
            <Outlet></Outlet>
          </div>

          {/* Page content here */}
        </div>
        <div className="drawer-side sticky top-0 border-r-2 w-fit px-8 min-h-[100vh] bg-gradient-to-b from-blue-700 via-gray-800 to-[#0a1929]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu px-4 py-6 grid grid-cols-1 items-center  text-base-content">
            {/* Sidebar content here */}
            <div className="flex gap-4 justify-between items-center">
              {/* Logo */}
              <div className="logo w-fit flex flex-col ">
                <h1 className="">BISTRO BOSS</h1>
                <p>Restaurant</p>
              </div>
              <label
                htmlFor="my-drawer-2"
                className="btn btn-outline text-white drawer-button lg:hidden"
              >
                <span className="text-white">
                  <GrClose className="text-2xl"></GrClose>
                </span>
              </label>
            </div>

            {/* Menu Box */}
            <div className="mt-12">
              <ul className="flex flex-col justify-start gap-3">
                {cartMenuTop.map((menu, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={menu.path}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active font-bold flex items-center bg-black gap-3 uppercase text-[#c8c8c8]"
                          : "font-bold flex items-center gap-3 uppercase hover:bg-white text-white"
                      }
                    >
                      <span className="text-2xl">{menu.icon}</span>
                      <span
                        className={({ isActive }) =>
                          isActive ? "animate-pulse" : ""
                        }
                      >
                        {menu.menuName}
                      </span>
                    </NavLink>

                    {cart && menu.menuName === "my cart" && (
                      <div className="badge hover:bg-black hover:text-[#fff] w-[30px] h-[30px] flex items-center text-[#f000b8] bg-black badge-secondary absolute -top-4 -left-4">
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
                  </li>
                ))}
              </ul>
            </div>

            {/* Devider */}
            <hr className="my-6" />

            <div className="">
              <ul className="flex flex-col justify-start gap-3">
                {cartMenuBottom.map((menu, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={menu.path}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active font-bold flex items-center bg-black gap-3 uppercase text-[#c8c8c8]"
                          : "font-bold flex items-center gap-3 uppercase hover:bg-[#5f9ce5] text-white hover:text-white"
                      }
                    >
                      <span className="text-2xl">{menu.icon}</span>
                      <span>{menu.menuName}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;
