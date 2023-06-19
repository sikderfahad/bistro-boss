// import React from 'react';
import authenticateBg from "../../assets/others/authentication.png";
import authenticateImg from "../../assets/others/authentication.gif";
import OtherLogin from "../../shared/OtherLogin/OtherLogin";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
  // LoadCanvasTemplateNoReload,
} from "react-simple-captcha";
import { useEffect } from "react";
import { ToastMsgError, ToastMsgSuc } from "../../components/Toast/ToastMsg";

const Login = () => {
  const location = useLocation();
  const from = location?.state?.from ? location.state.from : "/";
  const navigete = useNavigate();

  const { login } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const [isDisabled, setIsDisabled] = useState(true);

  const checkCaptcha = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      let user_captcha = document.getElementById("user_captcha_input").value;
      if (validateCaptcha(user_captcha) === true) {
        setIsDisabled(false);
        ToastMsgSuc("Captcha Matched");
        loadCaptchaEnginge(6);
        document.getElementById("user_captcha_input").value = "";
      } else {
        document.getElementById("user_captcha_input").value = "";
        return ToastMsgError("Captcha Does Not Match");
      }
    }
  };

  const handledUserLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigete(from);
        form.reset();
        ToastMsgSuc("Your login Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });

    console.log(email, password);
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundImage: `url(${authenticateBg})` }}
    >
      <div
        style={{ boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }}
        className="relative border rounded-xl px-[145px] py-[50px] max-w-screen-xl mx-auto flex flex-col md:flex-row-reverse gap-32 items-center"
      >
        <div className="w-1/2">
          <h1 className="text-4xl font-semibold text-center mb-14">Login</h1>
          <form onSubmit={handledUserLogin} className="flex flex-col">
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
                placeholder="Your password"
                required
              />
            </div>

            <div className="mb-6">
              <LoadCanvasTemplate></LoadCanvasTemplate>
            </div>

            <div className="mb-6">
              <input
                onKeyUp={checkCaptcha}
                placeholder="Enter Captcha Value"
                id="user_captcha_input"
                name="user_captcha_input"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <button
              disabled={isDisabled}
              id="btnLogin"
              type="submit"
              className={`text-white ${
                isDisabled ? "cursor-not-allowed" : "cursor-pointer"
              }  bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center`}
            >
              Login
            </button>
            <OtherLogin login={true}></OtherLogin>
          </form>
        </div>
        <div className="w-1/2">
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

export default Login;
