"use client";
import React from "react";
import { useRegister } from "../../context/RegisterContext";
import styled from "styled-components";
import PizzaMenuView from "../../components/PizzaMenuView";
import PizzaOrderView from "../../components/PizzaOrderView";

export default function page() {
  const { register } = useRegister();
  let orderNumber: number = 0;

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
        <PizzaMenuView />
      </ItemBox>
      <ItemBox>
        <div>Register Total: ${register.amount}</div>
      </ItemBox>
      <ItemBox>
        Serving Order Number:{" "}
        {orderNumber === 0 ? "no orders yet" : orderNumber}
      </ItemBox>
      <ItemBox>
        <PizzaOrderView />
      </ItemBox>
    </Wrapper>
  );
}
