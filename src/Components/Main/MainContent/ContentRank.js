import React from "react";
import styled from "styled-components";
import CardBox from "../../Card.js/CardBox";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

const SEE_SORT_SUMMONERS = gql`
  query seeSortSummoners($from: Int!, $count: Int!) {
    seeSortSummoners(from: $from, count: $count) {
      name
      avatar
      broadcaster {
        broadId
        name
        avatar
        platform
      }
      tftData {
        tier
        rank
        points
      }
    }
  }
`;

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

export default ({ page }) => {
  const { data, loading } = useQuery(SEE_SORT_SUMMONERS, {
    variables: { from: (page - 1) * 10, count: 10 },
  });

  if (!loading) {
    // console.log(data);
  }

  return (
    <>
      <Opacity page={page} />
      <Wrapper page={page}>
        <Inner>
          <CardDiv>
            {!loading &&
              data &&
              data.seeSortSummoners &&
              data.seeSortSummoners.map((sum, index) => {
                const tier =
                  sum.tftData === null ? "UNRANKED" : sum.tftData.tier;
                const rank = sum.tftData === null ? "" : sum.tftData.rank;
                const points = sum.tftData === null ? "" : sum.tftData.point;
                return (
                  <CardBox
                    key={index}
                    rankText={(page - 1) * 10 + index + 1}
                    broadId={sum.broadcaster.broadId}
                    broadPlatform={sum.broadcaster.platform}
                    broadIcon={sum.broadcaster.avatar}
                    broadName={sum.broadcaster.name}
                    sumIcon={sum.avatar}
                    sumName={sum.name}
                    tierTier={tier}
                    tierRank={rank}
                    tierPoint={points}
                  />
                );
              })}
          </CardDiv>
        </Inner>
      </Wrapper>
    </>
  );
};
