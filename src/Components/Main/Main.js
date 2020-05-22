import React from "react";
import styled from "styled-components";
import MainUnder from "./MainUnder/MainUnder";
import MainUpper from "./MainUpper/MainUpper";

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
  return (
    <Wrapper style={{ height: windowHeight }}>
      <MainUnder />
      <MainUpper windowWidth={windowWidth} siteTheme={siteTheme} />
    </Wrapper>
  );
};
