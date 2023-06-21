// import React from 'react';

import CategoryMenu from "../../../shared/CategoryMenu/CategoryMenu";
import Cover from "../../../shared/Cover/Cover";
import Carousel from "../Carousel/Carousel";
import ChefRequire from "../ChefRequire/ChefRequire";
import Contact from "../Contact/Contact";
import OurMenu from "../OurMenu/OurMenu";
import SwiperHome from "../Swiper/SwiperHome";
import Testimony from "../Testimony/Testimony";
import homeCover from "../../../assets/home/chef-service.jpg";
import Title from "../../../shared/Title/Title";
import MainBtn from "../../../shared/MainBtn/MainBtn";
import { useTitle } from "../../../custom/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Carousel></Carousel>

      <div className="max-w-screen-xl mx-auto">
        <div className="mt-24 ">
          <SwiperHome></SwiperHome>
        </div>

        <div className="my-12">
          <Cover
            title={"Bistro Boss"}
            subTitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
            }
            round={true}
            parallaxBg={homeCover}
          ></Cover>
        </div>

        <div className="my-20">
          <Title
            title={"---Check it out---"}
            subTitle={"FROM OUR MENU"}
          ></Title>
          <CategoryMenu type={"popular"}></CategoryMenu>
          <div className="text-center">
            <MainBtn></MainBtn>
          </div>
        </div>

        <div className="my-20">
          <Contact></Contact>
        </div>

        <div className="my-20">
          <ChefRequire></ChefRequire>
        </div>
      </div>

      <div>
        <OurMenu></OurMenu>
      </div>

      <div className="mt-32">
        <Testimony></Testimony>
      </div>
    </div>
  );
};

export default Home;
