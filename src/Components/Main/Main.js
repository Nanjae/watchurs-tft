import React, { useState } from "react";
import styled from "styled-components";
import MainUnder from "./MainUnder/MainUnder";
import MainUpper from "./MainUpper/MainUpper";
import MainContent from "./MainContent/MainContent";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 700px;
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

export default ({ windowWidth, windowHeight, siteTheme }) => {
  const [dragNext, setDragNext] = useState(0);

  return (
    <Wrapper style={{ height: windowHeight }}>
      <MainUnder />
      <MainUpper
        dragNext={dragNext}
        setDragNext={setDragNext}
        windowWidth={windowWidth}
        windowHeight={windowHeight}
        siteTheme={siteTheme}
      />
      <MainContent dragNext={dragNext} windowWidth={windowWidth} />
    </Wrapper>
  );
};
