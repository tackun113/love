import React from "react";
import styled from "styled-components";
import Heart from "./Heart";
import HeartOutline from "./HeartOutline";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  width: 90%;
  position: relative;
`;

const DayCover = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-direction: column;
`;

const Day = styled.div`
  color: #fff;
  font-size: 70px;
  font-weight: bold;
`;

const Text = styled.div`
  color: #fff;
  font-size: 40px;
`;

function Tab1({ days }) {
  return (
    <Container>
      <Image>
        <HeartOutline />
        <DayCover>
          <Text>Còn</Text>
          <Day>{days}</Day>
          <Text>Ngày</Text>
        </DayCover>
      </Image>
    </Container>
  );
}

export default Tab1;
