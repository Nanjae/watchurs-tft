import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  z-index: 200;
  top: 56px;
  right: 0px;
  background-color: ${(props) => props.theme.bgMainColor};
  width: fit-content;
  height: fit-content;
  display: flex;
  /* border-top-left-radius: 12px;
  border-bottom-right-radius: 12px; */
`;

const Inner = styled.div`
  display: flex;
  width: 100%;
  margin: 5px 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  color: white;
`;

const MenuBox = styled.div`
  font-size: 16px;
  padding: 4px;
  cursor: pointer;
  :not(:first-child) {
    margin-top: 5px;
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
