"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";
import { Order } from "../types";

type OrderType = {
  order: Order;
  addOrder: (orderNum: number) => void;
};

const defaultOrder: Order = { orderNum: 0 };

const OrderNumberContext = createContext<OrderType | undefined>(undefined);

export const OrderNumberContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [order, setOrderNum] = useState<Order>(defaultOrder);

  const addOrder = (orderNum: number) => {
    setOrderNum((prevRegister) => ({
      orderNum: prevRegister.orderNum + orderNum,
    }));
  };

  return (
    <OrderNumberContext.Provider value={{ order, addOrder }}>
      {children}
    </OrderNumberContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderNumberContext);
  if (!context) {
    throw new Error("Context Error");
  }
  return context;
};
