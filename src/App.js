import "./App.css";
import styled from "styled-components";
import bg from "./assets/images/bg.jpeg";
import Content from "./components/Content";
import { useState } from "react";

const Container = styled.div`
  background-color: #ff0057;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  /* height: -webkit-fill-available; */

  position: relative;
`;

const Background = styled.img`
  width: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const Mark = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: #00000050;
  z-index: 2;
`;

const CoverContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 3;
`;

function App() {
  return (
    <Container>
      <Background src={bg}></Background>
      <Mark></Mark>
      <CoverContent>
        <Content />
      </CoverContent>
    </Container>
  );
}

export default App;
