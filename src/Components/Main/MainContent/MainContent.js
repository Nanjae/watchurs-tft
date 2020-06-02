import React from "react";
import styled from "styled-components";
import ContentRank from "./ContentRank";
import Intro from "../../Intro/Intro";

const Wrapper = styled.div`
  position: absolute;
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

export default ({
  countMax,
  windowWidth,
  dragNext,
  data,
  loading,
  searchIndex,
}) => {
  const countMaxArray = new Array(countMax).fill("0");

  return (
    <>
      <Wrapper>
        <Inner dragNext={dragNext}>
          <Intro windowWidth={windowWidth} />
          {countMaxArray.map((_, index) => {
            return (
              <ContentRank
                key={index}
                page={index + 1}
                loading={loading}
                data={data}
                searchIndex={searchIndex}
                countMax={countMax}
              />
            );
          })}
        </Inner>
      </Wrapper>
    </>
  );
};
