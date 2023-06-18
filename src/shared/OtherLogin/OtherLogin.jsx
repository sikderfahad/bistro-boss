// import React from 'react';

import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const OtherLogin = ({ login, signup }) => {
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
          <div className="w-[50px] flex items-center justify-center h-[50px] rounded-full border border-[#444444] ">
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
