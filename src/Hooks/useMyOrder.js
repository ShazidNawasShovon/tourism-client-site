import { useState } from "react";

const useMyOrder = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [myOrders, setMyOrders] = useState([]);
  return {
    allOrders,
    setAllOrders,
    myOrders,
    setMyOrders,
  };
};

export default useMyOrder;
