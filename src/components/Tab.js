import React from "react";
import SwipeableViews from "react-swipeable-views";
import styled from "styled-components";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

const Container = styled.div`
  height: 100%;
  width: 100%;

  & > div {
    height: 100%;
  }
`;

const TabItem = styled.div`
  width: 100%;
  height: 100%;
`;

function Tab({ days, hours, minutes, seconds, onChangeIndex }) {
  return (
    <Container>
      <SwipeableViews
        onChangeIndex={onChangeIndex}
        containerStyle={{ width: "100%", height: "100%" }}
      >
        <TabItem>
          <Tab1 days={days} />
        </TabItem>
        <TabItem>
          <Tab2 days={days} hours={hours} minutes={minutes} seconds={seconds} />
        </TabItem>
      </SwipeableViews>
    </Container>
  );
}

export default Tab;
