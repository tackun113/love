import React from "react";
import styled from "styled-components";
import HeartText from "./HeartText";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

const Content = styled.div`
  display: flex;

  width: 100%;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  padding: 10px 40px;
`;

const Col = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  color: #fff;
`;

const RowNew = styled.div`
  display: flex;
  width: 50%;
  gap: 10px;
`;

const Text = styled.div`
  color: #fff;
  font-size: 20px;
`;

function Tab2({ days, hours, minutes, seconds }) {
  return (
    <Container>
      <Content>
        <Row>
          <Col>
            <HeartText text={days}></HeartText>
            <Text>Ngày</Text>
          </Col>
          <Col>
            <HeartText text={hours}></HeartText>
            <Text>Giờ</Text>
          </Col>
          <Col>
            <HeartText text={minutes}></HeartText>
            <Text>Phút</Text>
          </Col>
          <Col>
            <HeartText text={seconds}></HeartText>
            <Text>Giây</Text>
          </Col>
        </Row>
        <Row>
          <Col>11/05/2022</Col>
          <RowNew>
            <Col>
              <HeartText text={"21"}></HeartText>
              <Text>Giờ</Text>
            </Col>
            <Col>
              <HeartText text={"00"}></HeartText>
              <Text>Phút</Text>
            </Col>
          </RowNew>
        </Row>
      </Content>
    </Container>
  );
}

export default Tab2;
