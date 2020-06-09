import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 575.99px) {
    color: white;
    background-color: ${(props) => props.theme.bgMainColor};
    height: fit-content;
  }
  @media only screen and (min-width: 576px) {
    background-color: ${(props) => props.theme.bgSubColor};
    height: fit-content;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    height: 850px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const AboutInner = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 575.99px) {
    width: 96%;
    height: fit-content;
  }
  @media only screen and (min-width: 576px) {
    width: 530px;
    height: fit-content;
  }
  @media only screen and (min-width: 768px) {
    width: 700px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    width: 1050px;
    height: 620px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const AboutTitleDiv = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
`;

const AboutTitleBgText = styled.div`
  position: absolute;
  font-weight: 900;
  opacity: 0.1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 575.99px) {
    justify-content: center;
    letter-spacing: -5px;
    height: 220px;
    width: 96%;
    font-size: 75px;
  }
  @media only screen and (min-width: 576px) {
    letter-spacing: -5px;
    height: 280px;
    width: 530px;
    font-size: 120px;
  }
  @media only screen and (min-width: 768px) {
    letter-spacing: -10px;
    height: 320px;
    width: 700px;
    font-size: 160px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    height: 300px;
    width: 1050px;
    font-size: 220px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const AboutTitleHeaderBox = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 30px;
  margin-bottom: 20px;
  font-weight: 700;
  @media only screen and (max-width: 575.99px) {
    opacity: 0.3;
    display: flex;
    justify-content: center;
    font-size: 18px;
  }
  @media only screen and (min-width: 576px) {
    color: crimson;
    opacity: 0.5;
    font-size: 20px;
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

const AboutTitleTextBox = styled.div`
  width: 100%;
  height: fit-content;
`;

const AboutTitleText = styled.div`
  width: 100%;
  height: fit-content;
  font-weight: 900;
  @media only screen and (max-width: 575.99px) {
    text-align: center;
    margin-bottom: 10px;
    font-size: 22px;
  }
  @media only screen and (min-width: 576px) {
    margin-bottom: 15px;
    font-size: 36px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 48px;
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

const AboutContentDiv = styled.div`
  width: 100%;
  @media only screen and (max-width: 575.99px) {
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  @media only screen and (min-width: 576px) {
    margin-top: 40px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    margin-top: 20px;
    height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const AboutContentLeftDiv = styled.div`
  height: fit-content;
  display: flex;
  @media only screen and (max-width: 575.99px) {
    margin-top: 30px;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  @media only screen and (min-width: 576px) {
    margin-top: 40px;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 80px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    margin-top: 50px;
    width: 350px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const AboutContentLeftFeatureTitle = styled.div`
  font-weight: 900;
  color: crimson;
  display: flex;
  @media only screen and (max-width: 575.99px) {
    margin-bottom: 30px;
    font-size: 22px;
    width: fit-content;
    justify-content: flex-start;
    margin-top: 0px;
  }
  @media only screen and (min-width: 576px) {
    margin-bottom: 30px;
    font-size: 24px;
    width: fit-content;
    justify-content: flex-start;
    margin-top: 0px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    width: 100%;
    justify-content: flex-start;
    margin-top: 10px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const AboutContentLeftFeatureText = styled.div`
  margin-bottom: 15px;
  font-weight: 500;
  @media only screen and (max-width: 575.99px) {
    font-size: 18px;
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

const AbountContentRightDiv = styled.div`
  height: 100%;
  @media only screen and (max-width: 575.99px) {
    margin-top: 30px;
    margin-bottom: 60px;
    width: 100%;
  }
  @media only screen and (min-width: 576px) {
    margin-top: 30px;
    margin-bottom: 60px;
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    width: 600px;
    margin-top: 50px;
    margin-bottom: 0px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const AbountContentRightText = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  height: fit-content;
  @media only screen and (max-width: 575.99px) {
    opacity: 0.6;
    font-size: 18px;
    line-height: 32px;
  }
  @media only screen and (min-width: 576px) {
    color: gray;
    line-height: 40px;
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

export default ({ windowWidth }) => {
  return (
    <>
      <AboutWrapper>
        <AboutInner>
          <AboutTitleDiv>
            <AboutTitleBgText>Watchurs</AboutTitleBgText>
            <AboutTitleHeaderBox>프로젝트 와쳐스 & TFT</AboutTitleHeaderBox>
            <AboutTitleTextBox>
              <AboutTitleText>여러분이 찾는 브로드캐스터의</AboutTitleText>
              <AboutTitleText>전략적 팀 전투 정보를 제공합니다.</AboutTitleText>
            </AboutTitleTextBox>
          </AboutTitleDiv>
          <AboutContentDiv>
            <AboutContentLeftDiv>
              <AboutContentLeftFeatureTitle>
                주요 기능
              </AboutContentLeftFeatureTitle>
              <AboutContentLeftFeatureText>
                브로드캐스터 닉네임 또는 ID로 검색
              </AboutContentLeftFeatureText>
              <AboutContentLeftFeatureText>
                브로드캐스터 간 랭크 순위 및 정보 조회
              </AboutContentLeftFeatureText>
              <AboutContentLeftFeatureText>
                소환사명 변경 시 자동 업데이트
              </AboutContentLeftFeatureText>
            </AboutContentLeftDiv>
            <AbountContentRightDiv>
              <AbountContentRightText>
                와쳐스는 WATCH YOURS의 줄임말로 당신의 것, 즉, 일상생활 속
                생겨나는 당신의 관심사에 대한 정보를 제공하기 위해
                만들어졌습니다. 각각의 정보들은 와쳐스라는 하나의 프로젝트
                속에서 다양한 스타일과 기술을 통해 만나보실 수 있습니다. 현재는
                브로드캐스터와 관련된 게임 정보 위주로 제작 중이며, 언젠가
                범위를 넓혀 사소하지만 가끔은 여러분의 관심을 끄는 정보들을
                한눈에 보여줄 수 있도록 기획 중입니다. 원하시는 정보나 아이디어,
                문의가 있으시면 사이트 하단의 이메일로 연락해주시면
                감사하겠습니다.
              </AbountContentRightText>
            </AbountContentRightDiv>
          </AboutContentDiv>
        </AboutInner>
      </AboutWrapper>
    </>
  );
};
