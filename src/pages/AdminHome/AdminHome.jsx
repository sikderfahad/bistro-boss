// import React from 'react';
import { FaUsers } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { TbChefHat } from "react-icons/tb";
import { MdLocalShipping } from "react-icons/md";

const AdminHome = () => {
  const totalCount = [
    {
      background: "linear-gradient(90deg, #BB34F5 0%, #102032 100%)",
      icon: <GiWallet></GiWallet>,
      name: "Revenue",
      count: 1000,
    },
    {
      background: "linear-gradient(90deg, #D3A256 0%, #102032 100%)",
      icon: <FaUsers></FaUsers>,
      name: "Customers",
      count: 1500,
    },
    {
      background: "linear-gradient(90deg, #FE4880 0%, #102032 100%)",
      icon: <TbChefHat></TbChefHat>,
      name: "Products",
      count: 103,
    },
    {
      background: "linear-gradient(90deg, #6AAEFF 0%, #102032 100%)",
      icon: <MdLocalShipping></MdLocalShipping>,
      name: "Orders",
      count: 500,
    },
  ];
  return (
    <div>
      <h1 className="text-3xl font-semibold uppercase">hi, welcome back!</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {/* First Card */}

        {totalCount.map((item, idx) => (
          <div
            key={idx}
            className="text-white p-12 rounded-lg flex items-center gap-6"
            style={{
              background: item.background,
            }}
          >
            <span className="text-5xl"> {item.icon}</span>
            <div>
              <h1 className="text-4xl font-bold ">{item.count}</h1>
              <p className="text-2xl capitalize">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminHome;
