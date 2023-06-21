// import React from 'react';

import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastMsgSuc } from "../../components/Toast/ToastMsg";

const OtherLogin = ({ login, signup, from }) => {
  const { googleUser } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(from);

  const handledGoogleLogin = () => {
    googleUser()
      .then((res) => {
        const user = res.user;

        console.log(user);

        const saveUser = {
          name: user.displayName,
          email: user.email,
          role: "user",
        };
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            ToastMsgSuc("User login success!");
            navigate(from);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="text-center">
      {signup && (
        <p className="text-[#D1A054] mt-8 text-xl ">
          Already registered?{" "}
          <Link className="hover:underline font-medium" to={"/login"}>
            Go to log in
          </Link>
        </p>
      )}

      {login && (
        <p className="text-[#D1A054] mt-8 text-xl ">
          New here?{" "}
          <Link className="hover:underline font-medium" to={"/register"}>
            Create a New Account
          </Link>
        </p>
      )}

      <p className="text-[#444444] mt-6 text-xl font-medium">
        Or sign {login ? "in" : "up"} with
      </p>

      <div className="flex justify-center gap-[50px] mt-6">
        <Link>
          <div className="w-[50px] flex items-center justify-center h-[50px] rounded-full border border-[#444444] ">
            <FaFacebookF className="text-2xl"></FaFacebookF>
          </div>
        </Link>

        <Link>
          <div
            onClick={handledGoogleLogin}
            className="w-[50px] flex items-center justify-center h-[50px] rounded-full border border-[#444444] "
          >
            <FaGoogle className="text-2xl"></FaGoogle>
          </div>
        </Link>

        <Link>
          <div className="w-[50px] flex items-center justify-center h-[50px] rounded-full border border-[#444444] ">
            <FaGithub className="text-2xl"></FaGithub>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OtherLogin;
