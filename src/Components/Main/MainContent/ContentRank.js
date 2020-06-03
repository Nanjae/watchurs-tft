import React from "react";
import styled from "styled-components";
import CardBox from "../../Card/CardBox";
import { BlockLoading } from "react-loadingg";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 800px;
  background-color: rgba(0, 0, 0, 0.3);
  transform: translateX(${(props) => props.page * 100}%);
  justify-content: center;
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
  height: ${(props) =>
    props.page === props.countMax ? "fit-content" : "650px"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(0, 0, 0, 0.8); */
  box-shadow: 0px 0px 8px 4px ${(props) => props.theme.bgMainColor};
  border-radius: 4px;
  color: white;
`;

export default ({ page, loading, data, searchIndex, countMax }) => {
  // console.log(data);
  // console.log(loading);
  return (
    <>
      <Wrapper page={page}>
        <Inner>
          <CardDiv page={page} countMax={countMax}>
            {!loading && data && data.seeSortTFTSummoners ? (
              data.seeSortTFTSummoners
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
                    />
                  );
                })
            ) : (
              <BlockLoading style={{ position: "relative" }} size={"large"} />
            )}
          </CardDiv>
        </Inner>
      </Wrapper>
    </>
  );
};
