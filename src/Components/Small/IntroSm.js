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
  padding-top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopBox = styled.div`
  margin-bottom: 10px;
  width: fit-content;
  display: flex;
  align-items: center;
`;

const TopMainText = styled.div`
  color: white;
  font-size: 18px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: fit-content;
`;

const MainTitle = styled.div`
  font-family: "Londrina Solid", sans-serif;
  font-size: 75px;
  color: crimson;
  width: fit-content;
  margin-right: 40px;
`;

const SubTitle = styled.div`
  font-family: "Londrina Solid", sans-serif;
  font-size: 75px;
  color: lightgoldenrodyellow;
  margin-top: -30px;
  width: fit-content;
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
