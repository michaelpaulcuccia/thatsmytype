"use client";
import React from "react";
import { Calendar } from "@progress/kendo-react-dateinputs";
import styled from "styled-components";

const Test = styled.div`
  background: blue;
  color: white;
`;

export default function page() {
  return (
    <div>
      <Calendar />
      <Test>Hello World</Test>
    </div>
  );
}
