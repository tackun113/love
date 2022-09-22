import { dblClick } from "@testing-library/user-event/dist/click";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Tab from "./Tab";
import Title from "./Title";
import YouAndMe from "./YouAndMe";
import { db } from "../service/firebase";
import { getDatabase, ref, onValue } from "firebase/database";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TitleCover = styled.div``;

const TabCover = styled.div`
  /* background: #123; */
  flex: 1;
`;

const YouAndMeCover = styled.div`
  /* background-color: #432; */
`;

const Indicate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Dot = styled.div`
  transition: all 0.2 linear;
  width: 5px;
  height: 5px;
  background-color: #fff;
  border-radius: 100px;
`;

function Content() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [title, setTitle] = useState("");

  const [index, setIndex] = useState(0);

  const refresh = (countDownDate) => {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var _days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var _hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var _minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var _seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setDays(_days);
    setHours(_hours);
    setMinutes(_minutes);
    setSeconds(_seconds);

    return distance;
  };

  useEffect(() => {
    const starCountRef = ref(db, "message");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setTitle(data);
    });

    var countDownDate = new Date("May 11, 2027 0:0:0").getTime();
    refresh(countDownDate);

    var x = setInterval(function () {
      const distance = refresh(countDownDate);
      if (distance < 0) {
        clearInterval(x);
      }

      return () => {
        clearInterval(x);
      };
    }, 1000);
  }, []);

  const onChangeIndex = (index) => {
    setIndex(index);
  };

  return (
    <Container>
      <TitleCover>
        <Title>{title}</Title>
      </TitleCover>
      <TabCover>
        <Tab
          onChangeIndex={onChangeIndex}
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        ></Tab>
      </TabCover>
      <Indicate>
        <Dot
          style={{
            opacity: index === 0 ? "1" : ".3",
          }}
        ></Dot>
        <Dot
          style={{
            opacity: index === 1 ? "1" : ".3",
          }}
        ></Dot>
      </Indicate>

      <YouAndMeCover>
        <YouAndMe></YouAndMe>
      </YouAndMeCover>
    </Container>
  );
}

export default Content;
