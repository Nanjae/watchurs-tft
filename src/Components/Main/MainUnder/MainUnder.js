import React from "react";
import styled from "styled-components";
import bg01 from "../../../Assets/Images/bg01.jpg";

const Wrapper = styled.div`
  position: absolute;
  z-index: -10;
  width: 100%;
  height: 100%;
  display: flex;
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

const Inner = styled.div`
  width: 100%;
  height: 100%;
`;

const ImageDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const ImageOpacity = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.bgMainColor};
  width: 100%;
  height: 100%;
  opacity: 0.4;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position-x: left;
  background-position-y: center;
`;

export default () => {
  return (
    <Wrapper>
      <Inner>
        <ImageDiv>
          <ImageOpacity />
          <Image url={bg01} />
        </ImageDiv>
      </Inner>
    </Wrapper>
  );
};
