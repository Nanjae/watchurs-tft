import React from "react";
import styled from "styled-components";
// import ContentRank from "./ContentRank";
import IntroSm from "../IntroSm";
import ContentRankSm from "./ContentRankSm";

const Wrapper = styled.div`
  position: absolute;
  height: 640px;
  width: 100%;
  min-height: 640px;
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
