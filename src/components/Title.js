import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #ff005790;
  color: #fff;
  padding: 10px;
  font-size: 20px;
`;

function Title({ children }) {
  return <Container>{children}</Container>;
}

export default Title;
