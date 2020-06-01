import React from "react";
import styled from "styled-components";
import logo_twitch from "../../Assets/Twitch/logo_twitch.png";
import SetEmblem from "../Common/SetEmblem";

const CardBox = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  opacity: 0.9;
  background-color: ${(props) =>
    props.searchIndex === props.rankText
      ? "crimson"
      : props.rankText % 2 === 1
      ? props.theme.bgMainColor
      : props.theme.bgFooterColor};
  :first-child {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  :last-child {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  transition: background-color 0.5s;
`;

const CardInner = styled.div`
  width: 890x;
  margin: 5px;
  display: flex;
  font-size: 18px;
  font-weight: 400;
  color: ${(props) =>
    props.searchIndex === props.rankText ? "lightgoldenrodyellow" : "white"};
  opacity: 1;
  transition: color 0.5s;
`;

const CardRankBox = styled.div`
  width: 70px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CardRankText = styled.div`
  margin-left: 5px;
`;

const CardBroadBox = styled.div`
  width: 270px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CardBroadPlatform = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

const CardBroadIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 32px;
  height: 32px;
  /* border: 1px solid white; */
  border-radius: 100%;
  margin: 0px 8px;
`;

const CardBroadName = styled.div``;

const CardSumBox = styled.div`
  width: 250px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CardSumIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 32px;
  height: 32px;
  /* border: 1px solid white; */
  /* border-radius: 100%; */
  margin-left: 5px;
`;

const CardSumName = styled.div`
  margin: 0px 8px;
  /* color: orangered; */
`;

const CardTierBox = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CardTierIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 40px;
  height: 40px;
  margin-left: 5px;
`;

const CardTierText = styled.div`
  margin-left: 8px;
  margin-right: 5px;
`;

const CardTierPoint = styled.div``;

export default ({
  rankText,
  broadId,
  broadPlatform,
  broadIcon,
  broadName,
  sumIcon,
  sumName,
  tierTier,
  tierNum,
  tierRank,
  tierPoint,
  searchIndex,
}) => {
  const logo_platform = broadPlatform === "TWITCH" ? logo_twitch : null;
  // const fixedBroadIcon = broadIcon.replace("300x300", "70x70");

  const tierIcon = SetEmblem(tierNum);

  return (
    <>
      <CardBox searchIndex={searchIndex} rankText={rankText}>
        <CardInner searchIndex={searchIndex} rankText={rankText}>
          <CardRankBox>
            <CardRankText>#{rankText}</CardRankText>
          </CardRankBox>
          <CardBroadBox>
            <CardBroadPlatform url={logo_platform} />
            <CardBroadIcon url={broadIcon} />
            <CardBroadName>{broadName}</CardBroadName>
          </CardBroadBox>
          <CardSumBox>
            <CardSumIcon url={sumIcon} />
            <CardSumName>{sumName}</CardSumName>
          </CardSumBox>
          {tierTier === "UNRANKED" ? (
            <CardTierBox>
              <CardTierIcon url={tierIcon} />
              <CardTierText>{tierTier}</CardTierText>
            </CardTierBox>
          ) : (
            <CardTierBox>
              <CardTierIcon url={tierIcon} />
              <CardTierText>
                {tierTier} {tierRank}
              </CardTierText>
              <CardTierPoint>
                {tierPoint === "" ? null : `(${tierPoint}pt)`}
              </CardTierPoint>
            </CardTierBox>
          )}
        </CardInner>
      </CardBox>
    </>
  );
};
