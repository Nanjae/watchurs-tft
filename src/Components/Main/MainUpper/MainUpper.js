import React from "react";
import styled from "styled-components";
import UpperSide from "./UpperSide";
import CustomAutosuggest from "../../Common/Autosuggest";
import { useDrag } from "react-use-gesture";

const Wrapper = styled.div`
  position: fixed;
  z-index: 50;
  width: 100%;
  height: 100%;
  min-height: 700px;
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SearchDiv = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  top: ${(props) => (props.dragNext > 0 ? 0 : props.windowHeight / 2 + 50)}px;
  transition: top 0.5s;
`;

const SearchBox = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  height: 50px;
  width: 600px;
`;

export default ({
  dragNext,
  setDragNext,
  windowWidth,
  windowHeight,
  siteTheme,
}) => {
  const bind = useDrag(({ down, movement: [mx] }) => {
    if (!down && mx < -30) {
      setDragNext(dragNext < 3 ? dragNext + 1 : 0);
    } else if (!down && mx > 30) {
      setDragNext(dragNext > 0 && dragNext - 1);
    }
  });

  return (
    <Wrapper {...bind()}>
      <Inner>
        <UpperSide siteTheme={siteTheme} />
        <SearchDiv dragNext={dragNext} windowHeight={windowHeight}>
          <SearchBox>
            <CustomAutosuggest />
          </SearchBox>
        </SearchDiv>
      </Inner>
    </Wrapper>
  );
};
