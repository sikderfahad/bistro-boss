// import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const {
    isLoading,
    refetch,
    // isError,
    data: cart = [],
    // error,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:3000/carts?email=${user?.email}`
      );
      return res.json();
    },
  });
  //   console.log(cart);
  return [cart, refetch, isLoading];
};

export default useCart;
