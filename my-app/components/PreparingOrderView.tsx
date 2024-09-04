import React from "react";
import { useOrder } from "../context/OrderNumberContext";

export default function PreparingOrderView() {
  const { order } = useOrder();

  return (
    <div>
      <h2>Now Preparing Order:</h2>
      <br />
      <div>{order.orderNum}</div>
    </div>
  );
}
