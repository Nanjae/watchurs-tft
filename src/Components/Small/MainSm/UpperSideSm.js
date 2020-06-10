import React from "react";
import styled from "styled-components";
import icon_arrow_left from "../../../Assets/Icons/icon_arrow_left.png";
import icon_arrow_right from "../../../Assets/Icons/icon_arrow_right.png";

const BodyLeftDiv = styled.div`
  position: absolute;
  z-index: 100;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
  cursor: pointer;
  @media only screen and (max-width: 575.98px) {
    width: 40px;
    height: 640px;
  }
  @media only screen and (min-width: 576px) {
    width: 40px;
    height: 640px;
  }
  @media only screen and (min-width: 768px) {
    width: 60px;
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

const ArrowIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 575.98px) {
    width: 20px;
    height: 20px;
    margin-top: 90px;
    transform: scaleY(3);
  }
  @media only screen and (min-width: 576px) {
    width: 20px;
    height: 20px;
    margin-top: 90px;
    transform: scaleY(3);
  }
  @media only screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
    margin-top: 140px;
    transform: scaleY(3);
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

const BodyRightDiv = styled.div`
  position: absolute;
  z-index: 100;
  top: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
  cursor: pointer;
  @media only screen and (max-width: 575.98px) {
    width: 40px;
    height: 640px;
  }
  @media only screen and (min-width: 576px) {
    width: 40px;
    height: 640px;
  }
  @media only screen and (min-width: 768px) {
    width: 60px;
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

export default ({
  siteTheme,
  dragNext,
  setDragNext,
  handleVisitFalse,
  clickCard,
  setClickCard,
  countMax,
}) => {
  return (
    <>
      {dragNext !== 0 && clickCard === 0 && (
        <BodyLeftDiv
          style={dragNext === 0 ? { opacity: 0.8 } : { opacity: 0.3 }}
          onClick={() => {
            setDragNext(dragNext > 0 ? dragNext - 1 : 0);
          }}
        >
          <ArrowIcon url={icon_arrow_left} />
        </BodyLeftDiv>
      )}
      {clickCard === 0 && (
        <BodyRightDiv
          style={dragNext === 0 ? { opacity: 0.8 } : { opacity: 0.3 }}
          onClick={() => {
            countMax !== 0 &&
              setDragNext(dragNext < countMax ? dragNext + 1 : 0);
          }}
        >
          <ArrowIcon url={icon_arrow_right} />
        </BodyRightDiv>
      )}
    </>
  );
};
