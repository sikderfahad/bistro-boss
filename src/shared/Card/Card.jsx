// import React from 'react';
import { Link } from "react-router-dom";
import MainBtn from "../MainBtn/MainBtn";

const Card = ({ menu }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow">
      <div className=" bg-white ">
        <a href="#">
          <img className="rounded-t-lg w-full" src={menu.image} alt="" />
        </a>
        <div className="p-5 text-center">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {menu.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {menu.recipe}
          </p>
          <Link>
            <MainBtn
              text={"add to cart"}
              textColor={"text-yellow-400"}
              border={"border-yellow-400"}
              textBase={true}
              lessPadding={true}
            ></MainBtn>
          </Link>
        </div>
      </div>
    </div>

    // <div className="border border-gray-200 rounded-lg shadow">
    //   <div className="bg-white max-w-sm ">
    //     <div className="">
    //       <img
    //         className="rounded-t-lg rounded-b-none w-full h-[300px]"
    //         src={menu.image}
    //         alt=""
    //       />
    //     </div>
    //     <div className="p-8 text-center bg-[#F3F3F3]">
    //       <h3 className="text-[#151515] text-2xl font-semibold">{menu.name}</h3>
    //       <p className="mt-2 mb-6">{menu.recipe}</p>
    //       <MainBtn
    //         text={"add to cart"}
    //         textColor={"text-yellow-400"}
    //         border={"border-yellow-400"}
    //       ></MainBtn>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Card;
