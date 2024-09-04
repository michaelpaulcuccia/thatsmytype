"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";
import { Register } from "../types";

type RegisterType = {
  register: Register;
  addMoney: (amount: number) => void;
};

const defaultRegister: Register = { amount: 100 };

const RegisterContext = createContext<RegisterType | undefined>(undefined);

export const RegisterContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [register, setRegister] = useState<Register>(defaultRegister);

  const addMoney = (amount: number) => {
    setRegister((prevRegister) => ({
      amount: prevRegister.amount + amount,
    }));
  };

  return (
    <RegisterContext.Provider value={{ register, addMoney }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => {
  const context = useContext(RegisterContext);
  if (!context) {
    throw new Error("Context Error");
  }
  return context;
};
