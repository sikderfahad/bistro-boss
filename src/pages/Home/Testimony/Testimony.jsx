// import React from 'react';
import "./Testimony.css";
import Rating from "react-rating";
import { Carousel } from "react-responsive-carousel";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Title from "../../../shared/Title/Title";
import { useState } from "react";
import { useEffect } from "react";

const Testimony = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div className="max-w-screen-xl  mx-auto">
      <Title
        title={"---What Our Clients Say---"}
        subTitle={"TESTIMONIALS"}
      ></Title>
      <Carousel
        autoPlay="true"
        infiniteLoop={true}
        swipeScrollTolerance={100}
        useKeyboardArrows={true}
        autoFocus={true}
        emulateTouch={true}
        showIndicators={false}
        showStatus={false}
        dynamicHeight={true}
        showThumbs={false}
      >
        {review.map((item) => (
          <div key={item._id} className=" px-32 py-16">
            <div>
              <Rating
                className="text-4xl"
                placeholderRating={item.rating}
                readonly
                emptySymbol={<FaStar className="text-[#A1A1A1]"></FaStar>}
                placeholderSymbol={
                  <FaStar className="text-yellow-400"></FaStar>
                }
                fullSymbol={<FaStar className="text-yellow-400"></FaStar>}
              />
            </div>
            <div className="mx-auto w-fit my-12">
              <FaQuoteLeft className="text-[100px]"></FaQuoteLeft>
            </div>
            <p className="text-xl text-[#A1A1A1]">{item.details}</p>
            <h1 className="text-yellow-500 font-semibold text-2xl mt-4">
              {item.name}
            </h1>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimony;
