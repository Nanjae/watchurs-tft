import React, { useState } from "react";
import styled from "styled-components";
import CardBox from "../../Card/CardBox";
import Detail from "../../Detail/Detail";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 800px;
  background-color: rgba(0, 0, 0, 0.3);
  transform: translateX(${(props) => props.page * 100}%);
  justify-content: center;
  :focus {
    outline: 0;
  }
`;

const Inner = styled.div`
  margin-top: 80px;
  margin-left: 120px;
  margin-right: 120px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const CardDiv = styled.div`
  position: relative;
  width: 900px;
  height: ${(props) =>
    props.page === props.countMax ? "fit-content" : "650px"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 8px 4px ${(props) => props.theme.bgMainColor};
  border-radius: 4px;
  color: white;
  transition: opacity 0.5s;
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
            {dragNext === page && (
              <Detail
                data={data}
                clickCard={clickCard}
                setClickCard={setClickCard}
              />
            )}
            <Inner>
              <CardDiv
                style={clickCard !== 0 ? { opacity: 0 } : null}
                page={page}
                countMax={countMax}
              >
                {data.seeSortTFTSummoners
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
                  })}
              </CardDiv>
            </Inner>
          </>
        )}
      </Wrapper>
    </>
  );
};
