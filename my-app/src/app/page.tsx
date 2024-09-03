"use client";
import React from "react";
import PizzaMenuComponent from "../../components/PizzaMenuComponent";
import styled from "styled-components";
import { PizzaMenu } from "../../constants";
import NewPizzaForm from "../../components/NewPizzaForm";

export default function page() {
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
          {PizzaMenu.map((item, i) => (
            <PizzaMenuComponent key={i} item={item} />
          ))}
        </div>
        <br />
        <NewPizzaForm />
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
