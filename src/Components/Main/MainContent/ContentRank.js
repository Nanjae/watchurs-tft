import React, { useState } from "react";
import styled from "styled-components";
import CardBox from "../../Card/CardBox";
import icon_detail_close from "../../../Assets/Icons/icon_detail_close.png";

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

const DetailWarpper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: ${(props) => (props.clickCard === 0 ? 0 : 50)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailDiv = styled.div`
  width: ${(props) => (props.clickCard === 0 ? "0%" : "100%")};
  height: ${(props) => (props.clickCard === 0 ? "0%" : "100%")};
  background-color: black;
  opacity: ${(props) => (props.clickCard === 0 ? 0 : 0.8)};
  transition: opacity 0.5s, width 0.5s, height 0.5s;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const DetailCloseBox = styled.div`
  width: 100px;
  height: 40px;
  margin-bottom: 20px;
  border: 4px solid white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const DetailCloseText = styled.div`
  margin-right: 5px;
  color: white;
`;

const DetailCloseIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 20px;
  height: 20px;
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

  // console.log(data);
  // console.log(loading);

  return (
    <>
      <Wrapper page={page}>
        <DetailWarpper clickCard={clickCard}>
          <DetailDiv clickCard={clickCard}>
            <DetailCloseBox
              onClick={() => {
                setClickCard(0);
              }}
            >
              <DetailCloseText>나가기</DetailCloseText>
              <DetailCloseIcon url={icon_detail_close} />
            </DetailCloseBox>
          </DetailDiv>
        </DetailWarpper>
        <Inner>
          <CardDiv
            style={clickCard !== 0 ? { opacity: 0 } : null}
            page={page}
            countMax={countMax}
          >
            {!loading &&
              data &&
              data.seeSortTFTSummoners &&
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
      </Wrapper>
    </>
  );
};
