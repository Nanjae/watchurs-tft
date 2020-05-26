import React from "react";
import styled from "styled-components";
import UpperSide from "./UpperSide";
import { useDrag } from "react-use-gesture";

const Wrapper = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
  min-height: 800px;
  display: flex;
  @media only screen and (max-width: 575.99px) {
  }
  @media only screen and (min-width: 576px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const Inner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default ({ countMax, dragNext, setDragNext, siteTheme }) => {
  const bind = useDrag(({ down, movement: [mx] }) => {
    if (!down && mx < -30) {
      setDragNext(dragNext < countMax ? dragNext + 1 : 0);
    } else if (!down && mx > 30) {
      setDragNext(dragNext > 0 ? dragNext - 1 : 0);
    }
  });
  return (
    <Wrapper {...bind()}>
      <Inner>
        <UpperSide dragNext={dragNext} siteTheme={siteTheme} />
      </Inner>
    </Wrapper>
  );
};
