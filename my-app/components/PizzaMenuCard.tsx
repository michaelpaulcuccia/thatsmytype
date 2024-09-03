import React, { useEffect } from "react";
import { Card, CardHeader, CardBody } from "@progress/kendo-react-layout";
import { PizzaMenuItem } from "../types";

interface MenuProps {
  item: PizzaMenuItem;
}

const PizzaMenuCard: React.FC<MenuProps> = ({ item }) => {
  useEffect(() => {}, [item]);

  return (
    <>
      <Card
        style={{
          width: 260,
          boxShadow: "0 0 4px 0 rgba(0, 0, 0, .1)",
          marginTop: "15px",
        }}
      >
        <CardHeader className="k-hbox" style={{ background: "transparent" }}>
          PIZZA: {item.name}
        </CardHeader>
        <CardBody>PRICE: ${item.price}</CardBody>
      </Card>
    </>
  );
};

export default PizzaMenuCard;
