import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TopDiv = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 575.98px) {
    padding-top: 180px;
  }
  @media only screen and (min-width: 576px) {
    padding-top: 180px;
  }
  @media only screen and (min-width: 768px) {
    padding-top: 200px;
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

const TopBox = styled.div`
  margin-bottom: 10px;
  width: fit-content;
  display: flex;
  align-items: center;
`;

const TopMainText = styled.div`
  color: white;
  @media only screen and (max-width: 575.98px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 24px;
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

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: fit-content;
`;

const MainTitle = styled.div`
  font-family: "Londrina Solid", sans-serif;
  color: crimson;
  width: fit-content;
  margin-right: 40px;
  @media only screen and (max-width: 575.98px) {
    font-size: 75px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 75px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 110px;
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

const SubTitle = styled.div`
  font-family: "Londrina Solid", sans-serif;
  color: lightgoldenrodyellow;
  margin-top: -30px;
  width: fit-content;
  @media only screen and (max-width: 575.98px) {
    font-size: 75px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 75px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 110px;
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

export default ({ windowWidth }) => {
  return (
    <>
      <Wrapper>
        <TopDiv>
          <TopBox>
            <TopMainText>전략적 팀 전투 with 와쳐스</TopMainText>
          </TopBox>
          <TitleBox>
            <MainTitle>Teamfight</MainTitle>
            <SubTitle>Tactics</SubTitle>
          </TitleBox>
        </TopDiv>
      </Wrapper>
    </>
  );
};
