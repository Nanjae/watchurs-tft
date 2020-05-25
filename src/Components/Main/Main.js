import React, { useState } from "react";
import styled from "styled-components";
import MainUnder from "./MainUnder/MainUnder";
import MainUpper from "./MainUpper/MainUpper";
import CustomAutosuggest from "../Common/Autosuggest";
import MainContent from "./MainContent/MainContent";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 800px;
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
  position: absolute;
  z-index: 150;
  margin-top: ${(props) => (props.dragNext > 0 ? 20 : 600)}px;
  margin-bottom: 30px;
  height: 50px;
  width: 600px;
  transition: margin-top 0.3s;
`;
export default ({ windowWidth, windowHeight, siteTheme }) => {
  const [dragNext, setDragNext] = useState(0);

  return (
    <Wrapper style={{ height: windowHeight }}>
      <MainUnder />
      <MainUpper
        dragNext={dragNext}
        setDragNext={setDragNext}
        siteTheme={siteTheme}
      />
      <MainContent windowWidth={windowWidth} dragNext={dragNext} />
      <SearchBox dragNext={dragNext}>
        <CustomAutosuggest />
      </SearchBox>
    </Wrapper>
  );
};
