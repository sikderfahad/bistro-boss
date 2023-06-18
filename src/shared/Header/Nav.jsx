// import React from 'react';

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Nav = ({ item }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    if (item.path.includes("register") || item.path.includes("login")) {
      return false;
    }
  }
  return (
    <li>
      <NavLink
        to={item.path}
        className={({ isActive, isPending }) =>
          isActive
            ? "active text-[#EEFF25]"
            : isPending
            ? "pending"
            : "text-white"
        }
      >
        {item.label}
      </NavLink>
    </li>
  );
};

export default Nav;
