import React, { useState } from "react";
import styled from "styled-components";
import MainUnder from "./MainUnder/MainUnder";
import MainUpper from "./MainUpper/MainUpper";
import CustomAutosuggest from "../Common/Autosuggest";
import CustomAutosuggestSm from "../Small/AutosuggestSm";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { setBroadList, getBroadList } from "../Common/BroadList";
import HeaderSm from "../Small/HeaderSm";

const SEE_ALL_BROADCASTERS = gql`
  query seeAllBroadcasters {
    seeAllBroadcasters {
      broadId
      name
      avatar
      platform
      tftSummoners {
        name
      }
    }
  }
`;

const SEE_SORT_TFT_SUMMONERS = gql`
  query seeSortTFTSummoners {
    seeSortTFTSummoners {
      tftSummoner {
        name
        avatar
        level
        broadcaster {
          broadId
          name
          avatar
          platform
          countSumPerBroad
        }
      }
      tier
      tierNum
      rank
      points
      wins
      losses
      updatedAt
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 575.99px) {
    min-height: 600px;
  }
  @media only screen and (min-width: 576px) {
    min-height: 800px;
  }
  @media only screen and (min-width: 768px) {
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

const SearchBox = styled.div`
  position: absolute;
  z-index: 200;
  margin-bottom: 30px;
  height: 50px;
  width: 600px;
  transition: margin-top 0.3s;
  @media only screen and (max-width: 575.99px) {
    margin-top: ${(props) => (props.dragNext > 0 ? 60 : 400)}px;
    width: 90%;
  }
  @media only screen and (min-width: 576px) {
    margin-top: ${(props) => (props.dragNext > 0 ? 20 : 600)}px;
    width: 600px;
  }
  @media only screen and (min-width: 768px) {
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

const ScrollWhiteOpacity = styled.div`
  position: absolute;
  z-index: ${(props) => (props.scrollY >= 650 ? 400 : 0)};
  width: 100%;
  height: 100%;
  min-height: 800px;
  background-color: white;
  opacity: ${(props) => (props.scrollY >= 650 ? 1 : 0)};
  transition: opacity 0.8s, z-index 0.3s;
`;

export default ({
  dragNext,
  setDragNext,
  windowWidth,
  windowHeight,
  siteTheme,
  scrollY,
  handleVisitFalse,
  clickCard,
  setClickCard,
}) => {
  const [countMax, setCountMax] = useState(0);

  const { data: sumData, loading: sumLoading } = useQuery(
    SEE_SORT_TFT_SUMMONERS
  );
  const [searchIndex, setSearchIndex] = useState(0);

  const { data: broadData, loading: broadLoading } = useQuery(
    SEE_ALL_BROADCASTERS
  );

  if (!sumLoading && sumData && sumData.seeSortTFTSummoners) {
    if (countMax === 0) {
      setCountMax(Math.ceil(sumData.seeSortTFTSummoners.length / 10));
    }
  }

  if (!broadLoading && broadData && broadData.seeAllBroadcasters) {
    if (getBroadList().length === 0) {
      setBroadList(broadData);
    }
  }

  return (
    <Wrapper style={{ height: windowHeight }}>
      {windowWidth >= 1200 ? (
        <>
          <ScrollWhiteOpacity scrollY={scrollY} />
          <MainUnder />
          <MainUpper
            countMax={countMax}
            dragNext={dragNext}
            setDragNext={setDragNext}
            siteTheme={siteTheme}
            handleVisitFalse={handleVisitFalse}
            windowWidth={windowWidth}
            data={sumData}
            loading={sumLoading}
            searchIndex={searchIndex}
            clickCard={clickCard}
            setClickCard={setClickCard}
          />
          <SearchBox dragNext={dragNext}>
            <CustomAutosuggest
              countMax={countMax}
              data={sumData}
              loading={sumLoading ? 1 : 0}
              setDragNext={setDragNext}
              setSearchIndex={setSearchIndex}
              setClickCard={setClickCard}
            />
          </SearchBox>
        </>
      ) : (
        <>
          <HeaderSm />
          <MainUnder />
          <MainUpper
            countMax={countMax}
            dragNext={dragNext}
            setDragNext={setDragNext}
            siteTheme={siteTheme}
            handleVisitFalse={handleVisitFalse}
            windowWidth={windowWidth}
            data={sumData}
            loading={sumLoading}
            searchIndex={searchIndex}
            clickCard={clickCard}
            setClickCard={setClickCard}
          />
          <SearchBox dragNext={dragNext}>
            <CustomAutosuggestSm
              countMax={countMax}
              data={sumData}
              loading={sumLoading ? 1 : 0}
              setDragNext={setDragNext}
              setSearchIndex={setSearchIndex}
              setClickCard={setClickCard}
            />
          </SearchBox>
        </>
      )}
    </Wrapper>
  );
};
