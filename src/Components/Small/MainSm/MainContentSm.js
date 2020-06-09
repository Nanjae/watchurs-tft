import React from "react";
import styled from "styled-components";
// import ContentRank from "./ContentRank";
import IntroSm from "../IntroSm";

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
  clickCard,
  setClickCard,
}) => {
  const countMaxArray = new Array(countMax).fill("0");

  return (
    <>
      <Wrapper>
        <Inner dragNext={dragNext}>
          <IntroSm windowWidth={windowWidth} />
          {/* {countMaxArray.map((_, index) => {
            return (
              <ContentRank
                key={index}
                page={index + 1}
                dragNext={dragNext}
                loading={loading}
                data={data}
                searchIndex={searchIndex}
                countMax={countMax}
                clickCard={clickCard}
                setClickCard={setClickCard}
              />
            );
          })} */}
        </Inner>
      </Wrapper>
    </>
  );
};
