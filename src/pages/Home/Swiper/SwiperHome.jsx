// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./SwiperHome.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

import swiper1 from "../../../assets/home/slide1.jpg";
import swiper2 from "../../../assets/home/slide2.jpg";
import swiper3 from "../../../assets/home/slide3.jpg";
import swiper4 from "../../../assets/home/slide4.jpg";
import swiper5 from "../../../assets/home/slide5.jpg";
import Title from "../../../shared/Title/Title";

const SwiperHome = () => {
  const swiperImgBox = [
    { img: swiper1, label: "SALADS" },
    { img: swiper2, label: "SOUPS" },
    { img: swiper3, label: "PIZZAS" },
    { img: swiper4, label: "DESSERTS" },
    { img: swiper5, label: "LUNCH" },
  ];

  return (
    <div className=" my-10 mx-auto">
      <Title
        title={"---From 11:00am to 10:00pm---"}
        subTitle={"ORDER ONLINE"}
      ></Title>
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
        {swiperImgBox.map((item, idx) => (
          <SwiperSlide className="swiper-slider" key={idx}>
            <img className="w-full relative" src={item.img} alt="" />
            <h3 className="absolute swiper-title bottom-[20px] z-20 left-0 right-0 mx-auto text-center text-3xl text-white">
              {item.label}
            </h3>
            <div className="swiper-overlay z-10"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperHome;

{
  /* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */
}
