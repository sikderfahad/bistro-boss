// import React from 'react';

import Cover from "../../shared/Cover/Cover";
import menuCover from "../../assets/menu/banner3.jpg";
import CategoryMenu from "../../shared/CategoryMenu/CategoryMenu";
import Title from "../../shared/Title/Title";
import MainBtn from "../../shared/MainBtn/MainBtn";
import desertCover from "../../assets/menu/dessert-bg.jpeg";
import pizzaCover from "../../assets/menu/pizza-bg.jpg";
import saladCover from "../../assets/menu/salad-bg.jpg";
import soupCover from "../../assets/menu/soup-bg.jpg";
import { useTitle } from "../../custom/useTitle";

const OurMenu = () => {
  useTitle("Menu");
  return (
    <div>
      {/* Page Cover */}
      <div>
        <Cover
          title={"OUR MENU"}
          subTitle={"WOULD YOU LIKE TO TRY A DISH!"}
          contentBg={"bg-[#15151599]"}
          round={true}
          fullScreen={true}
          parallaxBg={menuCover}
        ></Cover>
      </div>

      {/* Offered Food */}
      <div className="max-w-screen-xl mx-auto mt-32">
        <Title title={"---Don't miss---"} subTitle={"TODAY'S OFFER"}></Title>
        <CategoryMenu type={"offered"}></CategoryMenu>
        <div className="text-center my-6">
          <MainBtn
            to={`/our-shop/${"offered"}`}
            text={"ORDER YOUR FAVOURITE FOOD"}
          ></MainBtn>
        </div>
      </div>

      {/* Dessert Cover */}
      <div className="mt-12">
        <Cover
          parallaxBg={desertCover}
          title={"Dessert"}
          contentBg={"bg-[#15151599]"}
          round={true}
        ></Cover>
      </div>

      {/* Desserts Food */}
      <div className="max-w-screen-xl mx-auto mt-32">
        <CategoryMenu type={"dessert"}></CategoryMenu>
        <div className="text-center my-6">
          <MainBtn
            to={`/our-shop/${"desserts"}`}
            text={"ORDER YOUR FAVOURITE FOOD"}
          ></MainBtn>
        </div>
      </div>

      {/* Pizza Cover */}
      <div className="mt-12">
        <Cover
          parallaxBg={pizzaCover}
          title={"Pizza"}
          contentBg={"bg-[#15151599]"}
          round={true}
        ></Cover>
      </div>

      {/* Pizza Food */}
      <div className="max-w-screen-xl mx-auto mt-32">
        <CategoryMenu type={"pizza"}></CategoryMenu>
        <div className="text-center my-6">
          <MainBtn
            to={`/our-shop/${"pizza"}`}
            text={"ORDER YOUR FAVOURITE FOOD"}
          ></MainBtn>
        </div>
      </div>

      {/* Salad Cover */}
      <div className="mt-12">
        <Cover
          parallaxBg={saladCover}
          title={"Salad"}
          contentBg={"bg-[#15151599]"}
          round={true}
        ></Cover>
      </div>

      {/* Salad Food */}
      <div className="max-w-screen-xl mx-auto mt-32">
        <CategoryMenu type={"salad"}></CategoryMenu>
        <div className="text-center my-6">
          <MainBtn
            to={`/our-shop/${"salad"}`}
            text={"ORDER YOUR FAVOURITE FOOD"}
          ></MainBtn>
        </div>
      </div>

      {/* Soups Cover */}
      <div className="mt-12">
        <Cover
          parallaxBg={soupCover}
          title={"Soups"}
          contentBg={"bg-[#15151599]"}
          round={true}
        ></Cover>
      </div>

      {/* Soups Food */}
      <div className="max-w-screen-xl mx-auto mt-32">
        <CategoryMenu type={"soup"}></CategoryMenu>
        <div className="text-center my-6">
          <MainBtn
            to={`/our-shop/${"soups"}`}
            text={"ORDER YOUR FAVOURITE FOOD"}
          ></MainBtn>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
