import React from "react";
import styled from "styled-components";
import icon_arrow_left from "../../../Assets/Icons/icon_arrow_left.png";
import icon_arrow_right from "../../../Assets/Icons/icon_arrow_right.png";

const BodyLeftDiv = styled.div`
  position: absolute;
  z-index: 100;
  top: 0px;
  left: 10px;
  width: 20px;
  height: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
`;

const ArrowIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 20px;
  height: 20px;
  margin-top: 90px;
  transform: scaleY(3);
`;

const BodyRightDiv = styled.div`
  position: absolute;
  z-index: 100;
  top: 0px;
  right: 10px;
  width: 20px;
  height: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
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
      <BodyRightDiv
        style={dragNext === 0 ? { opacity: 0.8 } : { opacity: 0.3 }}
        onClick={() => {
          countMax !== 0 && setDragNext(dragNext < countMax ? dragNext + 1 : 0);
        }}
      >
        <ArrowIcon url={icon_arrow_right} />
      </BodyRightDiv>
    </>
  );
};
