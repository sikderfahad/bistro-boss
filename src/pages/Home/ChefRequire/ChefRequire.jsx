// import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../../../shared/Title/Title";
import { Pagination } from "swiper";
import useCategory from "../../../custom/useCategory";
import Card from "../../../shared/Card/Card";

const ChefRequire = () => {
  const [food] = useCategory();
  const menuCat = food.filter((item) => item.category === "salad");

  return (
    <div>
      <Title title={"---Should Try---"} subTitle={"CHEF RECOMMENDS"}></Title>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        // onProgress={true}
        // onSlidechange={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {menuCat.map((item, idx) => (
          <SwiperSlide className="swiper-slider" key={idx}>
            <Card menu={item}></Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ChefRequire;
