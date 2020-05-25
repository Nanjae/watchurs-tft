import React from "react";
import styled from "styled-components";
import ContentRank from "./ContentRank";
import Intro from "../../Intro/Intro";

const Wrapper = styled.div`
  position: absolute;
  z-index: 50;
  height: 100%;
  width: 100%;
  min-height: 800px;
  overflow-x: hidden;
`;

const Inner = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  transform: translateX(${(props) => props.dragNext * -100}%);
  transition: transform 0.5s;
`;

export default ({ windowWidth, dragNext }) => {
  return (
    <>
      <Wrapper>
        <Inner dragNext={dragNext}>
          <Intro windowWidth={windowWidth} />
          <ContentRank page={1} />
          <ContentRank page={2} />
          <ContentRank page={3} />
        </Inner>
      </Wrapper>
    </>
  );
};
