// import React from 'react';
import { FaUsers } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";

const AdminHome = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold uppercase">hi, welcome back!</h1>
      <p>This is home page</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* First Card */}

        <div
          className="text-white p-12 rounded-lg flex items-center gap-6"
          style={{
            background: "linear-gradient(90deg, #BB34F5 0%, #FCDBFF 100%)",
          }}
        >
          <GiWallet className="text-5xl"></GiWallet>
          <div>
            <h1 className="text-4xl font-bold ">1000</h1>
            <p className="text-2xl">Revenue</p>
          </div>
        </div>

        {/* Second Card */}
        <div
          className="text-white p-12 rounded-lg flex items-center gap-6"
          style={{
            background: "linear-gradient(90deg, #D3A256 0%, #FDE8C0 100%)",
          }}
        >
          <FaUsers className="text-5xl"></FaUsers>

          <div>
            <h1 className="text-4xl font-bold ">1500</h1>
            <p className="text-2xl">Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
