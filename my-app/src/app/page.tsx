"use client";
import React from "react";
import styled from "styled-components";

export default function page() {
  type MenuItem = {
    name: string;
    price: number;
  };

  const menu: MenuItem[] = [
    { name: "Margherita", price: 14 },
    { name: "Meat Lovers", price: 21 },
    { name: "Veggie", price: 17 },
  ];

  let cashInRegister: number = 100;
  let orderNumber: number = 0;
  const orderQueue = [];

  const Wrapper = styled.div`
    display: flex;
    padding: 24px;
    grid-gap: 36px;
  `;

  const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    padding: 8px;
  `;

  return (
    <Wrapper>
      <ItemBox>
        <h2 style={{ marginBottom: "6px" }}>Menu</h2>
        <div>
          {menu.map((item, i) => (
            <li key={i} style={{ marginBottom: "6px" }}>
              {item.name}: ${item.price}
            </li>
          ))}
        </div>
      </ItemBox>
      <ItemBox>
        <div>Register Total: ${cashInRegister}</div>
      </ItemBox>
      <ItemBox>
        Serving Order Number:{" "}
        {orderNumber === 0 ? "no orders yet" : orderNumber}
      </ItemBox>
    </Wrapper>
  );
}
