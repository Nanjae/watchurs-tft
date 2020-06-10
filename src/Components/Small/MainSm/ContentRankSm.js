import React, { useState } from "react";
import styled from "styled-components";
// import CardBox from "../../Card/CardBox";
// import Detail from "../../Detail/Detail";
import CardBoxSm from "../CardSm/CardBoxSm";
import DetailSm from "../DetailSm/DetailSm";
import Detail from "../../Detail/Detail";
import CardBox from "../../Card/CardBox";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  transform: translateX(${(props) => props.page * 100}%);
  justify-content: center;
  :focus {
    outline: 0;
  }
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
  display: flex;
  width: 98%;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 575.98px) {
    height: 640px;
  }
  @media only screen and (min-width: 576px) {
    height: 640px;
  }
  @media only screen and (min-width: 768px) {
    height: 800px;
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

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 575.98px) {
    height: 520px;
    margin-top: 100px;
    width: 100%;
  }
  @media only screen and (min-width: 576px) {
    height: 520px;
    margin-top: 100px;
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    height: 650px;
    margin-top: 130px;
    width: 100%;
  }
  @media only screen and (min-width: 992px) {
    position: relative;
    width: 900px;
    height: ${(props) =>
      props.page === props.countMax ? "fit-content" : "650px"};
    box-shadow: 0px 0px 8px 4px ${(props) => props.theme.bgMainColor};
    border-radius: 4px;
    color: white;
    transition: opacity 0.5s;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

export default ({
  page,
  dragNext,
  loading,
  data,
  searchIndex,
  countMax,
  clickCard,
  setClickCard,
  windowWidth,
}) => {
  const [onCard, setOnCard] = useState(0);

  return (
    <>
      <Wrapper
        page={page}
        tabIndex={"0"}
        onKeyUp={(event) => {
          if (event.key === "Escape") {
            setClickCard(0);
          }
        }}
      >
        {!loading && data && data.seeSortTFTSummoners && (
          <>
            {dragNext === page &&
              clickCard !== 0 &&
              (windowWidth >= 992 ? (
                <Detail
                  data={data}
                  clickCard={clickCard}
                  setClickCard={setClickCard}
                  windowWidth={windowWidth}
                />
              ) : (
                <DetailSm
                  data={data}
                  clickCard={clickCard}
                  setClickCard={setClickCard}
                  windowWidth={windowWidth}
                />
              ))}
          </>
        )}
        <Inner>
          <CardDiv
            style={clickCard !== 0 ? { opacity: 0 } : null}
            page={page}
            countMax={countMax}
          >
            {windowWidth >= 992
              ? data.seeSortTFTSummoners
                  .slice((page - 1) * 10, page * 10)
                  .map((sum, index) => {
                    return (
                      <CardBox
                        key={index}
                        rankText={(page - 1) * 10 + index + 1}
                        broadId={sum.tftSummoner.broadcaster.broadId}
                        broadPlatform={sum.tftSummoner.broadcaster.platform}
                        broadIcon={sum.tftSummoner.broadcaster.avatar}
                        broadName={sum.tftSummoner.broadcaster.name}
                        sumIcon={sum.tftSummoner.avatar}
                        sumName={sum.tftSummoner.name}
                        tierTier={sum.tier}
                        tierNum={sum.tierNum}
                        tierRank={sum.rank}
                        tierPoint={sum.points}
                        searchIndex={searchIndex}
                        onCard={onCard}
                        setOnCard={setOnCard}
                        clickCard={clickCard}
                        setClickCard={setClickCard}
                        page={page}
                        dragNext={dragNext}
                      />
                    );
                  })
              : data.seeSortTFTSummoners
                  .slice((page - 1) * 10, page * 10)
                  .map((sum, index) => {
                    return (
                      <CardBoxSm
                        key={index}
                        rankText={(page - 1) * 10 + index + 1}
                        broadId={sum.tftSummoner.broadcaster.broadId}
                        broadPlatform={sum.tftSummoner.broadcaster.platform}
                        broadIcon={sum.tftSummoner.broadcaster.avatar}
                        broadName={sum.tftSummoner.broadcaster.name}
                        sumIcon={sum.tftSummoner.avatar}
                        sumName={sum.tftSummoner.name}
                        tierTier={sum.tier}
                        tierNum={sum.tierNum}
                        tierRank={sum.rank}
                        tierPoint={sum.points}
                        searchIndex={searchIndex}
                        onCard={onCard}
                        setOnCard={setOnCard}
                        clickCard={clickCard}
                        setClickCard={setClickCard}
                        page={page}
                        dragNext={dragNext}
                      />
                    );
                  })}
          </CardDiv>
        </Inner>
        {/* </>
        )} */}
      </Wrapper>
    </>
  );
};
