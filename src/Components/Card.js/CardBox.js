import React from "react";
import styled from "styled-components";
import logo_twitch from "../../Assets/Twitch/logo_twitch.png";
import SetEmblem from "../Common/SetEmblem";

const Wrapper = styled.div`
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

const Inner = styled.div`
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

const RankBox = styled.div`
  width: 70px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const RankText = styled.div`
  margin-left: 5px;
`;

const BroadBox = styled.div`
  width: 270px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const BroadPlatform = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

const BroadIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 32px;
  height: 32px;
  /* border: 1px solid white; */
  border-radius: 100%;
  margin: 0px 8px;
`;

const BroadName = styled.div``;

const SumBox = styled.div`
  width: 250px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SumIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 32px;
  height: 32px;
  /* border: 1px solid white; */
  /* border-radius: 100%; */
  margin-left: 5px;
`;

const SumName = styled.div`
  margin: 0px 8px;
  /* color: orangered; */
`;

const TierBox = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TierIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 40px;
  height: 40px;
  margin-left: 5px;
`;

const TierText = styled.div`
  margin-left: 8px;
  margin-right: 5px;
`;

const TierPoint = styled.div``;

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
      <Wrapper searchIndex={searchIndex} rankText={rankText}>
        <Inner searchIndex={searchIndex} rankText={rankText}>
          <RankBox>
            <RankText>#{rankText}</RankText>
          </RankBox>
          <BroadBox>
            <BroadPlatform url={logo_platform} />
            <BroadIcon url={broadIcon} />
            <BroadName>{broadName}</BroadName>
          </BroadBox>
          <SumBox>
            <SumIcon url={sumIcon} />
            <SumName>{sumName}</SumName>
          </SumBox>
          {tierTier === "UNRANKED" ? (
            <TierBox>
              <TierIcon url={tierIcon} />
              <TierText>{tierTier}</TierText>
            </TierBox>
          ) : (
            <TierBox>
              <TierIcon url={tierIcon} />
              <TierText>
                {tierTier} {tierRank}
              </TierText>
              <TierPoint>
                {tierPoint === "" ? null : `(${tierPoint}pt)`}
              </TierPoint>
            </TierBox>
          )}
        </Inner>
      </Wrapper>
    </>
  );
};
