import React, { useState } from "react";
import styled from "styled-components";
import MainUnder from "./MainUnder/MainUnder";
import MainUpper from "./MainUpper/MainUpper";
import MainContent from "./MainContent/MainContent";

import CustomAutosuggest from "../Common/Autosuggest";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 700px;
  justify-content: center;
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

const SearchBox = styled.div`
  position: fixed;
  z-index: 150;
  margin-top: ${(props) =>
    props.dragNext > 0 || props.scrollY > 580 ? 20 : 600 - props.scrollY}px;
  margin-bottom: 30px;
  height: 50px;
  width: 600px;
  transition: margin-top 0.3s;
`;
export default ({ windowWidth, windowHeight, siteTheme, scrollY }) => {
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
        scrollY={scrollY}
      />
      <MainContent dragNext={dragNext} windowWidth={windowWidth} />
      <SearchBox dragNext={dragNext} scrollY={scrollY}>
        <CustomAutosuggest />
      </SearchBox>
    </Wrapper>
  );
};
