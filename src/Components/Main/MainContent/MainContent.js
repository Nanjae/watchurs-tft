import React, { useState } from "react";
import styled from "styled-components";
import ContentHome from "./ContentHome";
import ContentRank from "./ContentRank";

const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  min-height: 700px;
  overflow-x: hidden;
`;

const Inner = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  transform: translateX(${(props) => props.dragNext * -100}%);
  transition: transform 0.5s;
`;

export default ({ dragNext, windowWidth }) => {
  return (
    <>
      <Wrapper>
        <Inner dragNext={dragNext}>
          <ContentHome windowWidth={windowWidth} />
          <ContentRank page={1} />
          <ContentRank page={2} />
          <ContentRank page={3} />
        </Inner>
      </Wrapper>
    </>
  );
};
