import React from "react";
import styled from "styled-components";
import heart from "../assets/images/heart.svg";
import People from "./People";

import darling from "../assets/images/darling.jpeg";
import me from "../assets/images/me.jpeg";

const Container = styled.div`
  display: flex;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Side = styled.div`
  flex: 1;
  padding: 0 10px;
`;

const Central = styled.div``;

const Heart = styled.img`
  width: 30px;
`;

function YouAndMe() {
  return (
    <Container>
      <Side>
        <People
          image={me}
          name={"Minh Tiến"}
          birthday={"12/12/2001"}
          zodiac={"Nhân Mã"}
        ></People>
      </Side>
      <Central>
        <Heart src={heart} className={"heart"} />
      </Central>
      <Side>
        <People
          image={darling}
          name={"Ái Nhi"}
          birthday={"11/22/2000"}
          zodiac={"Nhân Mã"}
        ></People>
      </Side>
    </Container>
  );
}

export default YouAndMe;
