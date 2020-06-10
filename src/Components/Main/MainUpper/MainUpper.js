import React from "react";
import styled from "styled-components";
import UpperSide from "./UpperSide";
import { useDrag } from "react-use-gesture";
import MainContent from "../MainContent/MainContent";
import MainContentSm from "../../Small/MainSm/MainContentSm";
import UpperSideSm from "../../Small/MainSm/UpperSideSm";
import MovePopMenuSm from "../../Small/MovePopMenuSm";

const Wrapper = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  display: flex;
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
    height: 100%;
    min-height: 800px;
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

export default ({
  countMax,
  dragNext,
  setDragNext,
  siteTheme,
  handleVisitFalse,
  windowWidth,
  data,
  loading,
  searchIndex,
  clickCard,
  setClickCard,
  movePop,
  setMovePop,
}) => {
  const bind = useDrag(({ down, movement: [mx] }) => {
    if (clickCard === 0) {
      if (!down && mx < -30) {
        setDragNext(dragNext < countMax ? dragNext + 1 : 0);
      } else if (!down && mx > 30) {
        setDragNext(dragNext > 0 ? dragNext - 1 : 0);
      }
    }
  });
  return (
    <Wrapper {...bind()}>
      {windowWidth >= 1200 ? (
        <>
          <Inner>
            <UpperSide
              dragNext={dragNext}
              setDragNext={setDragNext}
              countMax={countMax}
              siteTheme={siteTheme}
              handleVisitFalse={handleVisitFalse}
              clickCard={clickCard}
              setClickCard={setClickCard}
              movePop={movePop}
              setMovePop={setMovePop}
            />
            <MainContent
              countMax={countMax}
              windowWidth={windowWidth}
              dragNext={dragNext}
              data={data}
              loading={loading ? 1 : 0}
              searchIndex={searchIndex}
              clickCard={clickCard}
              setClickCard={setClickCard}
            />
          </Inner>
        </>
      ) : (
        <>
          <Inner>
            {movePop && countMax !== 0 && (
              <MovePopMenuSm
                setDragNext={setDragNext}
                setMovePop={setMovePop}
                countMax={countMax}
                setClickCard={setClickCard}
              />
            )}
            <UpperSideSm
              dragNext={dragNext}
              setDragNext={setDragNext}
              countMax={countMax}
              siteTheme={siteTheme}
              handleVisitFalse={handleVisitFalse}
              clickCard={clickCard}
              setClickCard={setClickCard}
            />
            <MainContentSm
              countMax={countMax}
              windowWidth={windowWidth}
              dragNext={dragNext}
              data={data}
              loading={loading ? 1 : 0}
              searchIndex={searchIndex}
              clickCard={clickCard}
              setClickCard={setClickCard}
            />
          </Inner>
        </>
      )}
    </Wrapper>
  );
};
