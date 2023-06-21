// import React from 'react';
import notFoundBg from "../../assets/icon/404.gif";
import MainBtn from "../../shared/MainBtn/MainBtn";

const NotFoundPage = () => {
  return (
    <div className="min-w-full min-h-screen flex items-center justify-center">
      <div className="text-center">
        <img src={notFoundBg} alt="" />
        <MainBtn to={"/"} text={"← BACK TO HOME"}></MainBtn>
      </div>
    </div>
  );
};

export default NotFoundPage;
