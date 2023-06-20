// import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import MainBtn from "../MainBtn/MainBtn";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastMsgSuc } from "../../components/Toast/ToastMsg";
import Swal from "sweetalert2";
import useCart from "../../custom/useCart";

const Card = ({ menu }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();
  // console.log(refetch);

  const handledCart = () => {
    if (user) {
      const orderItem = { foodItem: menu, email: user.email };
      fetch("http://localhost:3000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();

            ToastMsgSuc(`'${menu.name}' add to your cart!`);
          }
        });
    } else {
      Swal.fire({
        title: "Login now?",
        text: "You have to login to order!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location.pathname } });
        }
      });
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
  );
};

export default Card;
