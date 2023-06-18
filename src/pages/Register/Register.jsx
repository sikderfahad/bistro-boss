// import React from 'react';
import authenticateBg from "../../assets/others/authentication.png";
import authenticateImg from "../../assets/others/authentication.gif";
import OtherLogin from "../../shared/OtherLogin/OtherLogin";

const Register = () => {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundImage: `url(${authenticateBg})` }}
    >
      <div
        style={{ boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }}
        className="relative border rounded-xl px-[145px] py-[50px] max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center"
      >
        <div className=" ">
          <h1 className="text-4xl font-semibold text-center mb-14">Sign Up</h1>
          <form className="flex flex-col">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <button
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
            >
              Sign Up
            </button>
            <OtherLogin signup={true}></OtherLogin>
          </form>
        </div>
        <div>
          <img
            className="w-full h-full rounded-lg"
            src={authenticateImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
