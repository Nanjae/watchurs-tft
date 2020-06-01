import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 850px;
  background-color: ${(props) => props.theme.bgSubColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutInner = styled.div`
  width: 1050px;
  height: 600px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AboutTitleDiv = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
`;

const AboutTitleBgText = styled.div`
  position: absolute;
  width: 1050px;
  height: 300px;
  font-size: 220px;
  font-weight: 900;
  letter-spacing: -10px;
  opacity: 0.05;
  display: flex;
  align-items: center;
`;

const AboutTitleHeaderBox = styled.div`
  width: 100%;
  height: fit-content;
  color: crimson;
  opacity: 0.5;
  margin-top: 30px;
  margin-bottom: 20px;
  font-weight: 700;
`;

const AboutTitleTextBox = styled.div`
  width: 100%;
  height: fit-content;
`;

const AboutTitleText = styled.div`
  width: 100%;
  height: fit-content;
  font-size: 48px;
  font-weight: 900;
  margin-bottom: 15px;
`;

const AboutContentDiv = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-between;
`;

const AboutContentLeftDiv = styled.div`
  width: 350px;
  height: fit-content;
  margin-top: 50px;
`;

const AboutContentLeftFeatureTitle = styled.div`
  font-size: 24px;
  font-weight: 900;
  color: crimson;
  margin-bottom: 40px;
`;

const AboutContentLeftFeatureText = styled.div`
  margin-bottom: 20px;
  font-weight: 500;
`;

const AbountContentRightDiv = styled.div`
  width: 600px;
  height: 100%;
  margin-top: 50px;
`;

const AbountContentRightText = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  height: fit-content;
  line-height: 40px;
  color: gray;
`;

export default () => {
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
                브로드캐스터 소환사명 자동 업데이트
              </AboutContentLeftFeatureText>
              <AboutContentLeftFeatureText>
                브로드캐스터 랭크 정보 및 승률 조회
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
