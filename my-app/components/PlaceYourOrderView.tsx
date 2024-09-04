import React from "react";
import { usePizzaMenu } from "../context/MenuContext";
import { useRegister } from "../context/RegisterContext";
import { useOrder } from "../context/OrderNumberContext";

export default function PlaceYourOrderView() {
  const { pizzaMenu } = usePizzaMenu();
  const { addMoney } = useRegister();
  const { order, addOrder } = useOrder();

  function placeOrder(pizzaName: string) {
    const selectedPizza = pizzaMenu.find((pizza) => pizza.name === pizzaName);

    if (selectedPizza) {
      const newOrder = {
        yourOrderNumber: 1,
        pizza: selectedPizza,
        status: "ordered",
      };
      addMoney(selectedPizza.price);
      addOrder(newOrder.yourOrderNumber);
      newOrder.yourOrderNumber = order.orderNum + 1;
      alert(JSON.stringify(newOrder, null, 2));
    } else {
      alert("Pizza not found. Please select a valid pizza.");
    }
  }

  return (
    <div>
      <h2>Place Your Order View</h2>
      <p style={{ textAlign: "center" }}>click an item to order</p>
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
