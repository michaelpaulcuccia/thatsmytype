"use client";
import React from "react";
import { useRegister } from "../../context/RegisterContext";
import styled from "styled-components";
import AdminView from "../../components/AdminView";
import PlaceYourOrderView from "../../components/PlaceYourOrderView";
import PreparingOrderView from "../../components/PreparingOrderView";

export default function page() {
  const { register } = useRegister();

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
        <AdminView />
      </ItemBox>
      <ItemBox>
        <h2>In-Line Register View</h2>
        <br />
        <div>Register Total: ${register.amount}</div>
      </ItemBox>
      <ItemBox>
        <PlaceYourOrderView />
      </ItemBox>
      <ItemBox>
        <PreparingOrderView />
      </ItemBox>
    </Wrapper>
  );
}
