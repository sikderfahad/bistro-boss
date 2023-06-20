// import React from 'react';

import { NavLink, Outlet } from "react-router-dom";
import { GrClose, GrMenu } from "react-icons/gr";
import { ImSpoonKnife } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdMarkEmailRead } from "react-icons/md";
import { HiShoppingBag } from "react-icons/hi";
import { FaBook, FaListUl, FaUsers } from "react-icons/fa";
import "./Dashboard.css";

const cartMenuTop = [
  {
    icon: <AiFillHome></AiFillHome>,
    menuName: "admin home",
    path: "/admin-dashboard/home",
  },
  {
    icon: <ImSpoonKnife></ImSpoonKnife>,
    menuName: "add items",
    path: "/admin-dashboard/add-items",
  },
  {
    icon: <FaListUl></FaListUl>,
    menuName: "manage items",
    path: "/admin-dashboard/manage-items",
  },
  {
    icon: <FaBook></FaBook>,
    menuName: "manage bookings",
    path: "/admin-dashboard/manage-bookings",
  },
  {
    icon: <FaUsers></FaUsers>,
    menuName: "all users",
    path: "/admin-dashboard/all-users",
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

const Dashboard = () => {
  return (
    <div>
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
        <div className="drawer-side w-80 min-h-full bg-gradient-to-b from-red-500 via-pink-500 to-yellow-500">
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
                          ? "active font-bold flex items-center gap-3 uppercase text-[#c8c8c8]"
                          : "font-bold flex items-center gap-3 uppercase text-white"
                      }
                    >
                      <span className="text-2xl">{menu.icon}</span>
                      <span>{menu.menuName}</span>
                    </NavLink>
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
                          ? "active"
                          : "font-bold flex items-center gap-3 uppercase text-white"
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

export default Dashboard;
