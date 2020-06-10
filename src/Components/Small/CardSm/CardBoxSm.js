import React from "react";
import styled from "styled-components";
import logo_twitch from "../../../Assets/Twitch/logo_twitch.png";
// import SetEmblem from "../../Common/SetEmblem";

const Wrapper = styled.div`
  width: 100%;
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
  @media only screen and (max-width: 575.98px) {
    max-width: 400px;
    height: 50px;
  }
  @media only screen and (min-width: 576px) {
    max-width: 400px;
    height: 50px;
  }
  @media only screen and (min-width: 768px) {
    max-width: 650px;
    height: 64px;
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
  display: flex;
  font-weight: 400;
  color: ${(props) =>
    props.searchIndex === props.rankText ? "lightgoldenrodyellow" : "white"};
  opacity: 1;
  transition: color 0.5s;
  @media only screen and (max-width: 575.98px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 16px;
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

const RankBox = styled.div`
  width: 8%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const RankText = styled.div`
  @media only screen and (max-width: 575.98px) {
    font-size: 11px;
    margin-left: 5px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 11px;
    margin-left: 5px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 14px;
    margin-left: 8px;
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
  @media only screen and (max-width: 575.98px) {
    width: 14px;
    height: 14px;
  }
  @media only screen and (min-width: 576px) {
    width: 14px;
    height: 14px;
  }
  @media only screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
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

const BroadIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  border: 1px solid white;
  border-radius: 100%;
  @media only screen and (max-width: 575.98px) {
    width: 30px;
    height: 30px;
    margin: 0px 4px;
  }
  @media only screen and (min-width: 576px) {
    width: 30px;
    height: 30px;
    margin: 0px 4px;
  }
  @media only screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    margin: 0px 6px;
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
  border: 1px solid white;
  @media only screen and (max-width: 575.98px) {
    width: 30px;
    height: 30px;
    margin-left: 4px;
  }
  @media only screen and (min-width: 576px) {
    width: 30px;
    height: 30px;
    margin-left: 4px;
  }
  @media only screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    margin: 0px 6px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* color: yellow; */
  @media only screen and (max-width: 575.98px) {
    margin: 0px 4px;
  }
  @media only screen and (min-width: 576px) {
    margin: 0px 4px;
  }
  @media only screen and (min-width: 768px) {
    margin: 0px 6px;
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

const SumNameText = styled.div`
  color: lightgoldenrodyellow;
`;

const TierBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 575.98px) {
    margin-top: 4px;
  }
  @media only screen and (min-width: 576px) {
    margin-top: 4px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 6px;
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

const TierText = styled.div`
  @media only screen and (max-width: 575.98px) {
    margin-right: 4px;
  }
  @media only screen and (min-width: 576px) {
    margin-right: 4px;
  }
  @media only screen and (min-width: 768px) {
    margin-right: 6px;
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

const TierPoint = styled.div`
  @media only screen and (max-width: 575.98px) {
    font-size: 11px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 11px;
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
