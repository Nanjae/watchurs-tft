import React from "react";
import styled from "styled-components";
import CardBox from "../../Card.js/CardBox";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 800px;
  transform: translateX(${(props) => props.page * 100}%);
  justify-content: center;
`;

const Opacity = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 800px;
  background-color: ${(props) =>
    props.page % 2 === 1
      ? props.theme.fontSubColor
      : props.theme.bgFooterColor};
  transform: translateX(${(props) => props.page * 100}%);
  opacity: 0.5;
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
  width: 900px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0px 0px 8px 4px ${(props) => props.theme.bgMainColor};
  border-radius: 4px;
`;

export default ({ page, loading, data, searchIndex }) => {
  // console.log(data);
  return (
    <>
      <Opacity page={page} />
      <Wrapper page={page}>
        <Inner>
          <CardDiv>
            {!loading &&
              data &&
              data.seeSortSummoners &&
              data.seeSortSummoners
                .slice((page - 1) * 10, page * 10)
                .map((sum, index) => {
                  return (
                    <CardBox
                      key={index}
                      rankText={(page - 1) * 10 + index + 1}
                      broadId={sum.summoner.broadcaster.broadId}
                      broadPlatform={sum.summoner.broadcaster.platform}
                      broadIcon={sum.summoner.broadcaster.avatar}
                      broadName={sum.summoner.broadcaster.name}
                      sumIcon={sum.summoner.avatar}
                      sumName={sum.summoner.name}
                      tierTier={sum.tier}
                      tierNum={sum.tierNum}
                      tierRank={sum.rank}
                      tierPoint={sum.points}
                      searchIndex={searchIndex}
                    />
                  );
                })}
          </CardDiv>
        </Inner>
      </Wrapper>
    </>
  );
};
