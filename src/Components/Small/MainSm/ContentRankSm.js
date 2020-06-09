import React, { useState } from "react";
import styled from "styled-components";
import CardBox from "../../Card/CardBox";
import Detail from "../../Detail/Detail";
import CardBoxSm from "../CardSm/CardBoxSm";
import DetailSm from "../DetailSm/DetailSm";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 640px;
  min-height: 640px;
  background-color: rgba(0, 0, 0, 0.3);
  transform: translateX(${(props) => props.page * 100}%);
  justify-content: center;
  :focus {
    outline: 0;
  }
`;

const Inner = styled.div`
  display: flex;
  height: 640px;
  width: 98%;
  justify-content: center;
  align-items: center;
`;

const CardDiv = styled.div`
  width: 100%;
  height: 520px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
            {dragNext === page && clickCard !== 0 && (
              <DetailSm
                data={data}
                clickCard={clickCard}
                setClickCard={setClickCard}
                windowWidth={windowWidth}
              />
            )}
          </>
        )}
        <Inner>
          <CardDiv page={page} countMax={countMax}>
            {data.seeSortTFTSummoners
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
