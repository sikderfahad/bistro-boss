// import React from 'react';
import { Link } from "react-router-dom";
import MainBtn from "../MainBtn/MainBtn";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Card = ({ menu }) => {
  const { user } = useContext(AuthContext);

  const handledCart = () => {
    if (user) {
      fetch("http://localhost:3000/cart")
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            // Swal.fire({
            //   position: "top-end",
            //   icon: "success",
            //   title: "Your work has been saved",
            //   showConfirmButton: false,
            //   timer: 1500,
            // });
          }
        });
    } else {
      // Swal.fire({
      //   title: "Are you sure?",
      //   text: "You won't be able to revert this!",
      //   icon: "warning",
      //   showCancelButton: true,
      //   confirmButtonColor: "#3085d6",
      //   cancelButtonColor: "#d33",
      //   confirmButtonText: "Yes, delete it!",
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     Swal.fire("Deleted!", "Your file has been deleted.", "success");
      //     console.log(menu._id);
      //   }
      // });
    }
  };
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
          <Link onClick={handledCart}>
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
