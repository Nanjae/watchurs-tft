import React from "react";
import styled from "styled-components";
import logo_twitch from "../../Assets/Twitch/logo_twitch.png";

const CardBox = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  opacity: 0.9;
  background-color: ${(props) =>
    props.rankText % 2 === 1
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
`;

const CardInner = styled.div`
  width: 890x;
  margin: 5px;
  display: flex;
  font-size: 20px;
  font-weight: 400;
  color: white;
  opacity: 1;
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
  border: 1px solid white;
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
  border: 1px solid white;
  border-radius: 100%;
  margin-left: 5px;
`;

const CardSumName = styled.div`
  margin: 0px 8px;
`;

const CardTierBox = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CardTierIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 32px;
  height: 32px;
  border: 1px solid white;
  border-radius: 100%;
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
  tierRank,
  tierPoint,
}) => {
  const logo_platform = broadPlatform === "TWITCH" ? logo_twitch : null;
  const fixedBroadIcon = broadIcon.replace("300x300", "70x70");

  return (
    <>
      <CardBox className={broadId} rankText={rankText}>
        <CardInner>
          <CardRankBox>
            <CardRankText>#{rankText}</CardRankText>
          </CardRankBox>
          <CardBroadBox>
            <CardBroadPlatform url={logo_platform} />
            <CardBroadIcon url={fixedBroadIcon} />
            <CardBroadName>{broadName}</CardBroadName>
          </CardBroadBox>
          <CardSumBox>
            <CardSumIcon url={sumIcon} />
            <CardSumName>{sumName}</CardSumName>
          </CardSumBox>
          {tierTier === "UNRANKED" ? (
            <CardTierBox>
              <CardTierIcon />
              <CardTierText>{tierTier}</CardTierText>
            </CardTierBox>
          ) : (
            <CardTierBox>
              <CardTierIcon />
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
