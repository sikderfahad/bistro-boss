// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import {
  FaCalendarAlt,
  FaCartArrowDown,
  FaStar,
  FaWallet,
} from "react-icons/fa";

const ClientData = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 rounded-lg"
      style={{ boxShadow: "rgb(173 164 164) 0px 0px 15px" }}
    >
      <div
        className="bg-[#D1A054] flex flex-col items-center rounded-tl-lg rounded-bl-lg p-24"
        // style={{ boxShadow: "-5px 5px 10px #d1a054" }}
      >
        <div className="w-[200px] bg-[#0a1929] flex flex-col items-center  h-[200px] rounded-full ">
          <img
            className="w-full rounded-full h-full"
            src={user?.photoURL && user.photoURL}
            alt=""
          />
        </div>
        <h1 className="mt-12 uppercase text-gray-900 text-3xl font-semibold text-center">
          {user?.displayName && user.displayName}
        </h1>
      </div>

      <div
        className="bg-[#FEF9C3] rounded-tr-lg rounded-br-lg uppercase flex flex-col p-24"
        // style={{ boxShadow: "5px -5px 10px #FEF9C3" }}
      >
        <h1 className="text-4xl font-semibold text-start text-gray-900">
          your activities
        </h1>
        <div className="uppercase text-2xl font-semibold mt-8 flex flex-col gap-2">
          <h1 className="flex items-center gap-2 text-[#0088FE] ">
            <FaCartArrowDown></FaCartArrowDown> orders
          </h1>
          <h1 className="flex items-center gap-2 text-[#00C4A1] ">
            <FaStar></FaStar> reviews
          </h1>
          <h1 className="flex items-center gap-2 text-[#FFBB28] ">
            <FaCalendarAlt></FaCalendarAlt> bookings
          </h1>
          <h1 className="flex items-center gap-2 text-[#FF8042] ">
            <FaWallet></FaWallet> payment
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ClientData;
