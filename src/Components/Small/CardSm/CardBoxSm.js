import React from "react";
import styled from "styled-components";
import logo_twitch from "../../../Assets/Twitch/logo_twitch.png";
// import SetEmblem from "../../Common/SetEmblem";

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  height: 50px;
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
  transition: background-color 0.5s, cursor 0.5s;
  cursor: ${(props) => (props.clickCard === 0 ? "pointer" : "unset")};
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  font-size: 12px;
  font-weight: 400;
  color: ${(props) =>
    props.searchIndex === props.rankText ? "lightgoldenrodyellow" : "white"};
  opacity: 1;
  transition: color 0.5s;
`;

const RankBox = styled.div`
  width: 8%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const RankText = styled.div`
  font-size: 11px;
  margin-left: 5px;
`;

const BroadBox = styled.div`
  width: 46%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const BroadPlatform = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 14px;
  height: 14px;
  margin-left: 4px;
`;

const BroadIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 30px;
  height: 30px;
  border: 1px solid white;
  margin: 0px 4px;
  border-radius: 100%;
`;

const BroadName = styled.div``;

const SumBox = styled.div`
  width: 46%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SumIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 30px;
  height: 30px;
  border: 1px solid white;
  margin-left: 4px;
`;

const SumNameBox = styled.div`
  margin: 0px 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* color: yellow; */
`;

const SumNameText = styled.div`
  color: lightgoldenrodyellow;
`;

const TierBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 4px;
`;

const TierText = styled.div`
  margin-right: 4px;
`;

const TierPoint = styled.div`
  font-size: 11px;
`;

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
  onCard,
  setOnCard,
  clickCard,
  setClickCard,
  page,
  dragNext,
}) => {
  const logo_platform = broadPlatform === "TWITCH" ? logo_twitch : null;
  // const fixedBroadIcon = broadIcon.replace("300x300", "70x70");

  // const tierIcon = SetEmblem(tierNum);

  return (
    <>
      <Wrapper
        onMouseEnter={() => {
          setOnCard(rankText);
        }}
        onMouseLeave={() => {
          setOnCard(0);
        }}
        onClick={() => {
          if (clickCard === 0 && page === dragNext) {
            setClickCard(rankText);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        clickCard={clickCard}
        searchIndex={searchIndex}
        rankText={rankText}
        style={onCard === rankText ? { backgroundColor: "magenta" } : null}
      >
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
            <SumNameBox>
              <SumNameText>{sumName}</SumNameText>
              {tierTier === "UNRANKED" ? (
                <TierBox>
                  <TierText>{tierTier}</TierText>
                </TierBox>
              ) : (
                <TierBox>
                  <TierText>
                    {tierTier} {tierRank}
                  </TierText>
                  <TierPoint>
                    {tierPoint === "" ? null : `(${tierPoint}pt)`}
                  </TierPoint>
                </TierBox>
              )}
            </SumNameBox>
          </SumBox>
          {/* 
            
              <TierIcon url={tierIcon} />
              
            </TierBox>
           */}
        </Inner>
      </Wrapper>
    </>
  );
};
