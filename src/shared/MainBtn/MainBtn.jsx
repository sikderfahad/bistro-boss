// import React from "react";
import { Link } from "react-router-dom";
import "./MainBtn.css";

const MainBtn = ({ text, textColor, border, lessPadding, textBase, to }) => {
  return (
    <Link to={to}>
      <button
        className={`btn-category bg-transparent ${
          border && border
        } border-black relative text-center rounded-lg border-b-[3px] ${
          lessPadding ? "py-[10px] px-[20px]" : "p-5"
        } `}
      >
        <span
          className={`z-40 ${textColor && textColor} uppercase relative ${
            textBase ? "text-base" : "text-xl"
          } font-medium`}
        >
          {text ? text : "View Full  Menu"}
        </span>
        <div className="btn-category-overlay z-0 bg-gray-900 absolute rounded-lg w-full "></div>
      </button>
    </Link>
  );
};

export default MainBtn;
