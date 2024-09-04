import React from "react";
import { usePizzaMenu } from "../context/MenuContext";
import { useRegister } from "../context/RegisterContext";

export default function PizzaOrderView() {
  const { pizzaMenu } = usePizzaMenu();
  const { addMoney } = useRegister();

  function placeOrder(pizzaName: string) {
    const selectedPizza = pizzaMenu.find((pizza) => pizza.name === pizzaName);

    if (selectedPizza) {
      const newOrder = { id: 1, pizza: selectedPizza, status: "ordered" };
      addMoney(selectedPizza.price);
      alert(JSON.stringify(newOrder, null, 2));
    } else {
      alert("Pizza not found. Please select a valid pizza.");
    }
  }

  return (
    <div>
      <h2>Pizza Order View</h2>
      <br />
      {pizzaMenu.map((item, i) => (
        <div
          key={i}
          onClick={() => placeOrder(item.name)}
          style={{ marginBottom: "8px", cursor: "pointer" }}
        >
          {item.name}: ${item.price}
        </div>
      ))}
    </div>
  );
}
