import React from "react";
import styled from "styled-components";
import HeartFill from "./HeartFill";

const Container = styled.div`
  transition: all 1 linear;
  position: relative;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackGround = styled.div`
  width: 100%;
  height: 100%;

  transform: rotate(5deg);
`;

const TextCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Text = styled.div`
  font-size: 24px;
  color: #fff;
  transform: translateY(-7px);
`;

function HeartText({ text, rotate }) {
  return (
    <Container rotate={rotate}>
      <BackGround>
        <HeartFill />
      </BackGround>

      <TextCover>
        <Text>{text}</Text>
      </TextCover>
    </Container>
  );
}

export default HeartText;
