import React, { useState } from "react";
import styled from "styled-components";
import icon_detail_close_base from "../../../Assets/Icons/icon_detail_close_base.png";
import icon_detail_close_focus from "../../../Assets/Icons/icon_detail_close_focus.png";
import logo_twitch from "../../../Assets/Twitch/logo_twitch.png";
import { PieChart } from "react-minimal-pie-chart";
import SetEmblem from "../../Common/SetEmblem";
import AdBox from "../../Common/AdBox";

const Wrapper = styled.div`
  position: absolute;
  z-index: 200;
  width: 100%;
  z-index: ${(props) => (props.clickCard === 0 ? 0 : 50)};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.clickCard === 0 ? 0 : 1)};
  transition: opacity 0.5s;
  color: white;
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
  width: 100%;
  height: 100%;
  transition: background-color 0.5s, width 0.5s, height 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentInner = styled.div`
  position: relative;
  z-index: 200;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
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

const TopDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  @media only screen and (max-width: 575.98px) {
    height: 90px;
    padding-top: 70px;
  }
  @media only screen and (min-width: 576px) {
    height: 90px;
    padding-top: 70px;
  }
  @media only screen and (min-width: 768px) {
    height: 110px;
    padding-top: 90px;
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

const BroadAvatar = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  border: 1px solid white;
  /* border-radius: 50%; */
  margin: 0px 10px;
  @media only screen and (max-width: 575.98px) {
    width: 88px;
    height: 88px;
  }
  @media only screen and (min-width: 576px) {
    width: 88px;
    height: 88px;
  }
  @media only screen and (min-width: 768px) {
    width: 108px;
    height: 108px;
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

const BroadInfoBox = styled.div`
  width: ${(props) => props.windowWidth - 138}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 4px 0px;
  @media only screen and (max-width: 575.98px) {
    height: 82px;
  }
  @media only screen and (min-width: 576px) {
    height: 82px;
  }
  @media only screen and (min-width: 768px) {
    height: 102px;
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

const BroadInfoTopDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BroadInfoTopBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const BroadRanking = styled.div`
  color: white;
  background-color: crimson;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  @media only screen and (max-width: 575.98px) {
    padding: 2px 4px;
    font-size: 12px;
  }
  @media only screen and (min-width: 576px) {
    padding: 2px 4px;
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) {
    padding: 3px 6px;
    font-size: 14px;
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

const BroadPlatformBox = styled.div`
  color: white;
  background-color: ${(props) => props.theme.twitchColor};
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-top: 4px;
  @media only screen and (max-width: 575.98px) {
    padding: 2px 4px;
  }
  @media only screen and (min-width: 576px) {
    padding: 2px 4px;
  }
  @media only screen and (min-width: 768px) {
    padding: 3px 6px;
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

const BroadPlatformIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  margin-right: 4px;
  @media only screen and (max-width: 575.98px) {
    width: 12px;
    height: 12px;
  }
  @media only screen and (min-width: 576px) {
    width: 12px;
    height: 12px;
  }
  @media only screen and (min-width: 768px) {
    width: 14px;
    height: 14px;
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

const BroadPlatformText = styled.div`
  @media only screen and (max-width: 575.98px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 14px;
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

const CloseBox = styled.div`
  height: fit-content;
  /* border: 1px solid; */
  /* border-color: white; */
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: border-color 0.3s;
  padding: 4px 8px;
  margin-top: -8px;
`;

const CloseIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  transition: background-image 0.3s;
  @media only screen and (max-width: 575.98px) {
    width: 28px;
    height: 28px;
  }
  @media only screen and (min-width: 576px) {
    width: 28px;
    height: 28px;
  }
  @media only screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
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

const BroadInfoBottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BroadNameBox = styled.div`
  display: flex;
  align-items: center;
`;

const BroadNameText = styled.div`
  margin-right: 4px;
  @media only screen and (max-width: 575.98px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 24px;
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

const BroadIdText = styled.div`
  @media only screen and (max-width: 575.98px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 20px;
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

// const BroadSumCount = styled.div`
//   border: 1px solid white;
//   width: fit-content;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 2px 4px;
//   border-radius: 4px;
//   font-size: 12px;
// `;

const CenterDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 575.98px) {
    height: 340px;
  }
  @media only screen and (min-width: 576px) {
    height: 340px;
  }
  @media only screen and (min-width: 768px) {
    height: 470px;
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

// const SumMainDiv = styled.div`
//   width: 100%;
//   height: 420px;
//   display: flex;
//   justify-content: space-between;
// `;

const SumMainLeftDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SumInfoDiv = styled.div`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media only screen and (max-width: 575.98px) {
    width: 320px;
  }
  @media only screen and (min-width: 576px) {
    width: 320px;
  }
  @media only screen and (min-width: 768px) {
    width: 728px;
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

const SumInfoBox = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-end;
  @media only screen and (max-width: 575.98px) {
    height: 70px;
  }
  @media only screen and (min-width: 576px) {
    height: 70px;
  }
  @media only screen and (min-width: 768px) {
    height: 90px;
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

const SumAvatar = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  @media only screen and (max-width: 575.98px) {
    width: 68px;
    height: 68px;
  }
  @media only screen and (min-width: 576px) {
    width: 68px;
    height: 68px;
  }
  @media only screen and (min-width: 768px) {
    width: 88px;
    height: 88px;
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

const SumLevel = styled.div`
  background-color: white;
  color: black;
  @media only screen and (max-width: 575.98px) {
    font-size: 12px;
    padding: 2px 4px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 12px;
    padding: 2px 4px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 14px;
    padding: 3px 6px;
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

const SumNameBox = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media only screen and (max-width: 575.98px) {
    width: 240px;
  }
  @media only screen and (min-width: 576px) {
    width: 240px;
  }
  @media only screen and (min-width: 768px) {
    width: 628px;
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

const SumName = styled.div`
  margin-bottom: 8px;
  @media only screen and (max-width: 575.98px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 24px;
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

const SumUpdate = styled.div`
  width: 100%;
  margin: 4px 0px;
  color: darkgray;
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 575.98px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 14px;
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

const TierDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 575.98px) {
    width: 320px;
    height: 120px;
  }
  @media only screen and (min-width: 576px) {
    width: 320px;
    height: 120px;
  }
  @media only screen and (min-width: 768px) {
    width: 728px;
    height: 170px;
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

const TierBg = styled.div`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  opacity: 0.6;
  @media only screen and (max-width: 575.98px) {
    height: 110px;
    margin: 5px 0px;
  }
  @media only screen and (min-width: 576px) {
    height: 110px;
    margin: 5px 0px;
  }
  @media only screen and (min-width: 768px) {
    height: 160px;
    margin: 5px 0px;
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

const TierBox = styled.div`
  width: 100%;
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 575.98px) {
    height: 120px;
    font-size: 24px;
  }
  @media only screen and (min-width: 576px) {
    height: 120px;
    font-size: 24px;
  }
  @media only screen and (min-width: 768px) {
    height: 170px;
    font-size: 32px;
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

const TierText = styled.div``;

const RankText = styled.div`
  @media only screen and (max-width: 575.98px) {
    margin-left: 8px;
    margin-right: 8px;
  }
  @media only screen and (min-width: 576px) {
    margin-left: 8px;
    margin-right: 8px;
  }
  @media only screen and (min-width: 768px) {
    margin-left: 10px;
    margin-right: 10px;
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

const PointText = styled.div``;

const RefreshBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  @media only screen and (max-width: 575.98px) {
    height: 20px;
    font-size: 11px;
  }
  @media only screen and (min-width: 576px) {
    height: 20px;
    font-size: 11px;
  }
  @media only screen and (min-width: 768px) {
    height: 30px;
    font-size: 14px;
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

const SumMainRightDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SumWinDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 575.98px) {
    height: 90px;
    font-size: 16px;
    margin: 5px 0px;
  }
  @media only screen and (min-width: 576px) {
    height: 90px;
    font-size: 16px;
    margin: 5px 0px;
  }
  @media only screen and (min-width: 768px) {
    height: 130px;
    font-size: 18px;
    margin: 10px 0px;
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

const WinRateDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 575.98px) {
    width: 90px;
  }
  @media only screen and (min-width: 576px) {
    width: 90px;
  }
  @media only screen and (min-width: 768px) {
    width: 130px;
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

const WinTotalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WinTotalText = styled.div`
  text-align: center;
  @media only screen and (max-width: 575.98px) {
    width: 80px;
  }
  @media only screen and (min-width: 576px) {
    width: 80px;
  }
  @media only screen and (min-width: 768px) {
    width: 110px;
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

// const BottomAdDiv = styled.div`
//   width: 100%;
//   height: 100px;
//   display: flex;
//   justify-content: center;
//   padding: 15px 0px;
// `;

const CenterAdDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0px;
  @media only screen and (max-width: 575.98px) {
    width: 100%;
    height: 100px;
  }
  @media only screen and (min-width: 576px) {
    width: 100%;
    height: 100px;
  }
  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 90px;
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

export default ({ data, clickCard, setClickCard, windowWidth }) => {
  const [enter, setEnter] = useState(0);

  let icon_detail_close =
    enter !== 0 ? icon_detail_close_focus : icon_detail_close_base;

  const summoner = data.seeSortTFTSummoners[clickCard - 1];

  let updatedTime = "";

  if (clickCard !== 0) {
    const updatedAt = new Date(summoner.updatedAt);
    const year = updatedAt.getFullYear().toString().slice(2);
    const month = (updatedAt.getMonth() + 1).toString().padStart(2, "0");
    const date = updatedAt.getDate().toString().padStart(2, "0");
    const hours = updatedAt.getHours().toString().padStart(2, "0");
    const minutes = updatedAt.getMinutes().toString().padStart(2, "0");
    updatedTime = `${year}-${month}-${date} ${hours}:${minutes}`;
  }

  return (
    <>
      <Wrapper clickCard={clickCard}>
        <Inner clickCard={clickCard}>
          <ContentInner>
            {clickCard !== 0 && (
              <>
                <TopDiv>
                  <BroadAvatar url={summoner.tftSummoner.broadcaster.avatar} />
                  <BroadInfoBox windowWidth={windowWidth}>
                    <BroadInfoTopDiv>
                      <BroadInfoTopBox>
                        <BroadRanking>전체 {clickCard}위</BroadRanking>
                        <BroadPlatformBox>
                          <BroadPlatformIcon url={logo_twitch} />
                          <BroadPlatformText>트위치</BroadPlatformText>
                        </BroadPlatformBox>
                      </BroadInfoTopBox>
                      <CloseBox
                        onMouseEnter={() => {
                          setEnter(1);
                        }}
                        onMouseLeave={() => {
                          setEnter(0);
                        }}
                        onClick={() => {
                          setClickCard(0);
                          setEnter(0);
                        }}
                      >
                        <CloseIcon url={icon_detail_close} />
                      </CloseBox>
                    </BroadInfoTopDiv>
                    <BroadInfoBottomDiv>
                      <BroadNameBox>
                        <BroadNameText>
                          {summoner.tftSummoner.broadcaster.name}
                        </BroadNameText>
                        <BroadIdText>
                          ({summoner.tftSummoner.broadcaster.broadId})
                        </BroadIdText>
                      </BroadNameBox>
                    </BroadInfoBottomDiv>
                  </BroadInfoBox>
                </TopDiv>
                <CenterAdDiv>
                  {windowWidth >= 768 ? (
                    <AdBox
                      adTitle={"TFT_728x90"}
                      adWidth={728}
                      adHeight={90}
                      adSrc={
                        "https://tab2.clickmon.co.kr/pop/wp_ad_728.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1065774%7C%5E%7CAdver_M_1046207&rt_ad_id_code=RTA_106389&mon_rf=REFERRER_URL"
                      }
                      fontSize={20}
                    />
                  ) : (
                    <AdBox
                      adTitle={"TFT_320x100_M"}
                      adWidth={320}
                      adHeight={100}
                      adSrc={
                        "https://mtab.clickmon.co.kr/pop/wp_m_320_100.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1065774%7C%5E%7CAdver_M_1046207&rt_ad_id_code=RTA_106393&mon_rf=REFERRER_URL"
                      }
                      fontSize={12}
                    />
                  )}
                </CenterAdDiv>
                <CenterDiv>
                  <SumMainLeftDiv>
                    <SumInfoDiv>
                      <SumInfoBox>
                        <SumAvatar url={summoner.tftSummoner.avatar}>
                          <SumLevel>{summoner.tftSummoner.level}</SumLevel>
                        </SumAvatar>
                        <SumNameBox>
                          <SumName>{summoner.tftSummoner.name}</SumName>
                          <SumUpdate>최종 업데이트 : {updatedTime}</SumUpdate>
                        </SumNameBox>
                      </SumInfoBox>
                    </SumInfoDiv>
                    <TierDiv>
                      <TierBg
                        url={() => {
                          return SetEmblem(summoner.tierNum);
                        }}
                      />
                      <TierBox>
                        <TierText>{summoner.tier}</TierText>
                        {summoner.tier !== "UNRANKED" && (
                          <RankText>{summoner.rank}</RankText>
                        )}
                        {summoner.tier !== "UNRANKED" && (
                          <PointText>({summoner.points}LP)</PointText>
                        )}
                      </TierBox>
                    </TierDiv>
                  </SumMainLeftDiv>
                  <SumMainRightDiv>
                    <SumWinDiv>
                      <WinTotalBox>
                        <WinTotalText
                          style={{ color: "yellow", marginBottom: 10 }}
                        >
                          TOP 1
                        </WinTotalText>
                        <WinTotalText>{summoner.wins + 0}승</WinTotalText>
                      </WinTotalBox>
                      <WinRateDiv>
                        <PieChart
                          animate={true}
                          animationDuration={500}
                          animationEasing="ease-out"
                          center={[50, 50]}
                          data={[
                            {
                              color: "crimson",
                              title: "TOP 1",
                              value: summoner.wins,
                              key: 0,
                            },
                            {
                              color: "#6A2135",
                              title: "Others",
                              value: summoner.losses,
                              key: 1,
                            },
                          ]}
                          label={({ dataEntry }) => {
                            if (dataEntry.key === 0)
                              return Math.round(dataEntry.percentage) + "%";
                            else return null;
                          }}
                          labelStyle={{
                            fontSize: 16,
                            fontWeight: "bold",
                            fill: "white",
                          }}
                          labelPosition={0}
                          lengthAngle={360}
                          lineWidth={30}
                          onClick={undefined}
                          onMouseOut={undefined}
                          onMouseOver={undefined}
                          paddingAngle={4}
                          radius={50}
                          rounded={false}
                          startAngle={180}
                          viewBoxSize={[100, 100]}
                          style={{
                            height: windowWidth >= 768 ? 120 : 80,
                            width: windowWidth >= 768 ? 120 : 80,
                            margin: windowWidth >= 768 ? "0px 8px" : "0px 4px",
                          }}
                        />
                      </WinRateDiv>
                      <WinTotalBox>
                        <WinTotalText
                          style={{ color: "crimson", marginBottom: 10 }}
                        >
                          플레이 수
                        </WinTotalText>
                        <WinTotalText>
                          {summoner.wins + summoner.losses}전
                        </WinTotalText>
                      </WinTotalBox>
                    </SumWinDiv>
                    <RefreshBox>
                      * 소환사 정보는 주기적으로 자동 업데이트됩니다.
                    </RefreshBox>
                  </SumMainRightDiv>
                </CenterDiv>
              </>
            )}
          </ContentInner>
        </Inner>
      </Wrapper>
    </>
  );
};
