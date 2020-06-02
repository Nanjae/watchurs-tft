import React, { useState } from "react";
import styled from "styled-components";
import MainUnder from "./MainUnder/MainUnder";
import MainUpper from "./MainUpper/MainUpper";
import CustomAutosuggest from "../Common/Autosuggest";
import MainContent from "./MainContent/MainContent";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { setBroadList, getBroadList } from "../Common/BroadList";

const SEE_ALL_BROADCASTERS = gql`
  query seeAllBroadcasters {
    seeAllBroadcasters {
      broadId
      name
      avatar
      platform
    }
  }
`;

const SEE_SORT_SUMMONERS = gql`
  query seeSortSummoners {
    seeSortSummoners {
      summoner {
        name
        avatar
        broadcaster {
          broadId
          name
          avatar
          platform
        }
      }
      tier
      tierNum
      rank
      points
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 800px;
  justify-content: center;
  @media only screen and (max-width: 575.99px) {
  }
  @media only screen and (min-width: 576px) {
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
  margin-top: ${(props) => (props.dragNext > 0 ? 20 : 600)}px;
  margin-bottom: 30px;
  height: 50px;
  width: 600px;
  transition: margin-top 0.3s;
`;

const ScrollWhiteOpacity = styled.div`
  position: absolute;
  z-index: ${(props) => (props.scrollY >= 650 ? 400 : 0)};
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: ${(props) => (props.scrollY >= 650 ? 1 : 0)};
  transition: opacity 0.8s, z-index 0.3s;
`;

export default ({
  windowWidth,
  windowHeight,
  siteTheme,
  scrollY,
  handleVisitFalse,
}) => {
  const [dragNext, setDragNext] = useState(0);
  const countMax = Math.ceil(21 / 10);
  const { data: sumdata, loading: sumloading } = useQuery(SEE_SORT_SUMMONERS);
  const [searchIndex, setSearchIndex] = useState(0);

  const { data: broadData, loading: broadLoading } = useQuery(
    SEE_ALL_BROADCASTERS
  );

  if (!broadLoading && broadData && broadData.seeAllBroadcasters) {
    if (getBroadList().length === 0) {
      setBroadList(broadData);
    }
  }

  return (
    <Wrapper style={{ height: windowHeight }}>
      <ScrollWhiteOpacity scrollY={scrollY} />
      <MainUnder />
      <MainUpper
        countMax={countMax}
        dragNext={dragNext}
        setDragNext={setDragNext}
        siteTheme={siteTheme}
        handleVisitFalse={handleVisitFalse}
        windowWidth={windowWidth}
        data={sumdata}
        loading={sumloading}
        searchIndex={searchIndex}
      />
      <SearchBox dragNext={dragNext}>
        <CustomAutosuggest
          data={sumdata}
          loading={sumloading ? 1 : 0}
          setDragNext={setDragNext}
          setSearchIndex={setSearchIndex}
        />
      </SearchBox>
    </Wrapper>
  );
};
