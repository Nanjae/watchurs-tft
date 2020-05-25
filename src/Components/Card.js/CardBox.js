import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0px 0px 4px 1px white;
  border-radius: 4px;
  display: flex;
`;

const CardInner = styled.div`
  width: 790px;
  height: 50px;
  margin: 5px;
  display: flex;
  font-size: 20px;
  font-weight: 400;
  color: white;
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
  width: 250px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CardBroadIcon = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid white;
  border-radius: 100%;
  margin: 0px 5px;
  background-image: ${(props) => props.url};
  background-size: cover;
  background-position: center;
`;

const CardBroadName = styled.div``;

const CardSumBox = styled.div`
  width: 250px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CardSumIcon = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid white;
  border-radius: 100%;
  margin: 0px 5px;
  background-image: ${(props) => props.url};
  background-size: cover;
  background-position: center;
`;

const CardSumName = styled.div``;

const CardTierBox = styled.div`
  width: 310px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CardTierIcon = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid white;
  border-radius: 100%;
  margin: 0px 5px;
  background-image: ${(props) => props.url};
  background-size: cover;
  background-position: center;
`;

const CardTierText = styled.div`
  margin-right: 5px;
`;

const CardTierPoint = styled.div``;

export default ({
  rankText,
  broadIcon,
  broadName,
  sumIcon,
  sumName,
  tierText,
  tierNum,
  tierPoint,
}) => {
  return (
    <>
      <CardBox>
        <CardInner>
          <CardRankBox>
            <CardRankText>#{rankText}</CardRankText>
          </CardRankBox>
          <CardBroadBox>
            <CardBroadIcon url={broadIcon} />
            <CardBroadName>{broadName}</CardBroadName>
          </CardBroadBox>
          <CardSumBox>
            <CardSumIcon url={sumIcon} />
            <CardSumName>{sumName}</CardSumName>
          </CardSumBox>
          <CardTierBox>
            <CardTierIcon />
            <CardTierText>
              {tierText} {tierNum}
            </CardTierText>
            <CardTierPoint>({tierPoint}pt)</CardTierPoint>
          </CardTierBox>
        </CardInner>
      </CardBox>
    </>
  );
};
