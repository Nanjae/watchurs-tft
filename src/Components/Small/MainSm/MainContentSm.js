import React from "react";
import styled from "styled-components";
// import ContentRank from "./ContentRank";
import IntroSm from "../IntroSm";
import ContentRankSm from "./ContentRankSm";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  overflow-x: hidden;
  @media only screen and (max-width: 575.98px) {
    height: 640px;
    min-height: 640px;
  }
  @media only screen and (min-width: 576px) {
    height: 640px;
    min-height: 640px;
  }
  @media only screen and (min-width: 768px) {
    height: 800px;
    min-height: 800px;
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
  clickCard,
  setClickCard,
}) => {
  const countMaxArray = new Array(countMax).fill("0");

  return (
    <>
      <Wrapper>
        <Inner dragNext={dragNext}>
          <IntroSm windowWidth={windowWidth} />
          {countMaxArray.map((_, index) => {
            return (
              <ContentRankSm
                key={index}
                page={index + 1}
                dragNext={dragNext}
                loading={loading}
                data={data}
                searchIndex={searchIndex}
                countMax={countMax}
                clickCard={clickCard}
                setClickCard={setClickCard}
                windowWidth={windowWidth}
              />
            );
          })}
        </Inner>
      </Wrapper>
    </>
  );
};
