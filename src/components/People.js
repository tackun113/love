import React from "react";
import styled from "styled-components";
import { getAge } from "../help";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  color: white;
  margin-bottom: 40px;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  aspect-ratio: 1/1;
`;
const Avatar = styled.img`
  border: 2px solid #fff;
  border-radius: 50%;
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const Name = styled.div`
  font-size: 22px;
  margin: 3px 0;
`;

const Info = styled.div`
  display: flex;
  gap: 5px;
`;
const Old = styled.div`
  font-size: 15px;
  background-color: #ff0057;
  padding: 5px 10px;
  border-radius: 50px;
`;
const Zodiac = styled.div`
  font-size: 15px;
  background-color: #51abf0;
  padding: 5px 10px;
  border-radius: 50px;
`;

function People({ name, image, birthday, sex, zodiac }) {
  return (
    <Container>
      <Image>
        <Avatar src={image} />
      </Image>
      <Name>{name}</Name>
      {/* <Info>
        <Old>{getAge(birthday)}</Old>
        <Zodiac>{zodiac}</Zodiac>
      </Info> */}
    </Container>
  );
}

export default People;
