import React from "react";
import styled from "styled-components";
import { Calendar } from "@progress/kendo-react-dateinputs";

const Test = styled.div`
  background: blue;
  color: white;
`;

function App() {
  return (
    <div>
      <Calendar />
      <Test>Hello World</Test>
    </div>
  );
}

export default App;
