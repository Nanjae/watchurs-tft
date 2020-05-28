import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TopDiv = styled.div`
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
  font-size: 28px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: fit-content;
`;

const MainTitle = styled.div`
  font-family: "Londrina Solid", sans-serif;
  font-size: 130px;
  color: #e8293b;
  width: fit-content;
  margin-right: 40px;
`;

const SubTitle = styled.div`
  font-family: "Londrina Solid", sans-serif;
  font-size: 130px;
  color: lightgoldenrodyellow;
  margin-top: -40px;
  width: fit-content;
`;

const MoreBox = styled.div`
  margin-top: 40px;
  width: 560px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MoreLine = styled.div`
  width: 60px;
  height: 2px;
  background-color: white;
  margin-right: 20px;
`;

const MoreMainText = styled.div`
  color: white;
  font-size: 24px;
`;

export default ({ windowWidth }) => {
  return (
    <>
      <Wrapper>
        <TopDiv style={{ width: windowWidth - 180 }}>
          <TopBox>
            <TopMainText>전략적 팀 전투 with 와쳐스</TopMainText>
          </TopBox>
          <TitleBox>
            <MainTitle>Teamfight</MainTitle>
            <SubTitle>Tactics</SubTitle>
          </TitleBox>
          <MoreBox>
            <MoreLine />
            <MoreMainText>SEE MORE</MoreMainText>
          </MoreBox>
        </TopDiv>
      </Wrapper>
    </>
  );
};
