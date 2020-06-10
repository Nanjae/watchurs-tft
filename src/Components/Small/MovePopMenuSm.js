import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  z-index: 200;
  background-color: ${(props) => props.theme.bgMainColor};
  width: fit-content;
  height: fit-content;
  display: flex;
  @media only screen and (max-width: 575.98px) {
    top: 56px;
    right: 0px;
  }
  @media only screen and (min-width: 576px) {
    top: 56px;
    right: 0px;
  }
  @media only screen and (min-width: 768px) {
    top: 70px;
    right: 0px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
  /* border-top-left-radius: 12px;
  border-bottom-right-radius: 12px; */
`;

const Inner = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  color: white;
  @media only screen and (max-width: 575.98px) {
    margin: 5px 10px;
  }
  @media only screen and (min-width: 576px) {
    margin: 5px 10px;
  }
  @media only screen and (min-width: 768px) {
    margin: 8px 16px;
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

const MenuBox = styled.div`
  cursor: pointer;
  :not(:first-child) {
    margin-top: 5px;
  }
  @media only screen and (max-width: 575.98px) {
    font-size: 16px;
    padding: 4px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 16px;
    padding: 4px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    padding: 5px;
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

export default ({ setDragNext, setMovePop, countMax, setClickCard }) => {
  const popMenuCount = Math.ceil(countMax / 5);
  const popMenuArray = new Array(popMenuCount);
  for (let i = 0; i < popMenuCount; i++) {
    popMenuArray[i] = i * 5 + 1;
  }

  return (
    <>
      <Wrapper>
        <Inner>
          <MenuBox
            onClick={() => {
              setClickCard(0);
              setDragNext(0);
              setMovePop(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            HOME
          </MenuBox>
          {popMenuArray.length > 0 &&
            popMenuArray.map((pop, index) => {
              return (
                <MenuBox
                  key={index}
                  onClick={() => {
                    setClickCard(0);
                    setDragNext(pop);
                    setMovePop(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  RANK #{(pop - 1) * 10 + 1} ~
                </MenuBox>
              );
            })}
        </Inner>
      </Wrapper>
    </>
  );
};
