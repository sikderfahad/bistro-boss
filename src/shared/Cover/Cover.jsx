// import React from 'react';

import MainBtn from "../MainBtn/MainBtn";

const Cover = ({
  title,
  subTitle,
  contentBg,
  parallaxBg,
  round,
  fullScreen,
}) => {
  return (
    <div
      className={`hero p-[100px] bg-fixed bg-center ${
        fullScreen && "min-h-screen"
      }`}
      style={{
        backgroundImage: `url(${parallaxBg})`,
        backdropFilter: "blur(2px)",
      }}
    >
      <div className={`${!parallaxBg && "hero-overlay bg-opacity-60"}`}></div>
      <div className="hero-content text-center text-neutral-content">
        <div
          className={`p-[100px] ${contentBg ? contentBg : "bg-white"} ${
            round && "rounded-xl"
          }`}
        >
          <h1
            className={`mb-5 text-5xl uppercase font-bold ${
              contentBg ? "text-white" : "text-black"
            }`}
          >
            {title}
          </h1>
          <p className={`mb-5 ${contentBg ? "text-white" : "text-black"} `}>
            {subTitle
              ? subTitle
              : "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
          </p>
          <MainBtn text={"text-white"} border={"border-white"}></MainBtn>
        </div>
      </div>
    </div>
  );
};

export default Cover;
