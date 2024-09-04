import React from "react";
import { usePizzaMenu } from "../context/MenuContext";

export default function PizzaOrderView() {
  const { pizzaMenu } = usePizzaMenu();

  function placeOrder(pizzaName: string) {
    const selectedPizza = pizzaMenu.find((pizza) => pizza.name === pizzaName);
    //get access to orderNumber
    const newOrder = { id: 1, pizza: selectedPizza, status: "ordered" };
    //update register
    //return newOrder;
    alert(JSON.stringify(newOrder, null, 2));
  }

  return (
    <div>
      <h2>Pizza Order View</h2>
      <br />
      {pizzaMenu.map((item, i) => (
        <div
          key={i}
          onClick={() => placeOrder(item.name)}
          style={{ marginBottom: "8px" }}
        >
          {item.name}: ${item.price}
        </div>
      ))}
    </div>
  );
}
