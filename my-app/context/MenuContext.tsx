"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";
import { PizzaMenuItem } from "../types";

type MenuContextType = {
  pizzaMenu: PizzaMenuItem[];
  addPizza: (newPizza: PizzaMenuItem) => void;
};
const defaultPizzaMenu: PizzaMenuItem[] = [
  { name: "Margherita", price: 14 },
  { name: "Meat Lovers", price: 21 },
  { name: "Veggie", price: 17 },
];

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [pizzaMenu, setPizzaMenu] = useState<PizzaMenuItem[]>(defaultPizzaMenu);

  const addPizza = (newPizza: PizzaMenuItem) => {
    setPizzaMenu((prevMenu) => [...prevMenu, newPizza]);
  };

  return (
    <MenuContext.Provider value={{ pizzaMenu, addPizza }}>
      {children}
    </MenuContext.Provider>
  );
};

export const usePizzaMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("Context Error");
  }
  return context;
};
