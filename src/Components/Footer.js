import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ThemeDark from "../Styles/ThemeDark";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bgFooterColor};
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  width: 90%;
  margin: 80px 30px 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 575.99px) {
    height: fit-content;
  }
  @media only screen and (min-width: 576px) {
    height: 350px;
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

const TopDiv = styled.div`
  display: flex;
  @media only screen and (max-width: 575.99px) {
    width: fit-content;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    height: 500px;
  }
  @media only screen and (min-width: 576px) {
    width: 100%;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: row;
    height: 70%;
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

const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 575.99px) {
    width: fit-content;
    align-items: flex-start;
    height: 245px;
    :not(:first-child) {
      margin-left: 0px;
    }
  }
  @media only screen and (min-width: 576px) {
    width: 280px;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
    :not(:first-child) {
      margin-left: 80px;
    }
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

const TopMainTextBox = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const TopMainText = styled.div`
  color: ${(props) => props.theme.fontFooterColor};
  font-size: 24px;
  font-weight: 700;
  :not(:first-child) {
    margin-top: 5px;
  }
`;

const TopSubTextBox = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const TopSubText = styled.div`
  color: ${(props) => props.theme.fontFooterColor};
  font-size: 18px;
  font-weight: 300;
  display: flex;
  align-items: center;
  height: 25%;
  width: fit-content;
  transition: color 0.3s;
`;

const BottomDiv = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-between;
`;

const BottomLeftBox = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  @media only screen and (max-width: 575.99px) {
    justify-content: center;
  }
  @media only screen and (min-width: 576px) {
    justify-content: flex-start;
    align-items: flex-end;
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

const BottomText = styled.div`
  color: ${(props) => props.theme.lineSubColor};
  text-align: center;
  @media only screen and (max-width: 575.99px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 16px;
    line-height: 20px;
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

const BottomRightBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  @media only screen and (max-width: 575.99px) {
    justify-content: center;
  }
  @media only screen and (min-width: 576px) {
    justify-content: flex-end;
    align-items: flex-end;
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

export default () => {
  const [textEnter, setTextEnter] = useState(0);

  return (
    <>
      <Wrapper>
        <Inner>
          <TopDiv>
            <TopBox>
              <TopMainTextBox>
                <TopMainText>Contact to</TopMainText>
                <TopMainText>:: WATCHURS</TopMainText>
              </TopMainTextBox>
              <TopSubTextBox>
                <TopSubText>개발 : 난재(Nanjae)</TopSubText>
                <TopSubText
                  onMouseEnter={() => {
                    setTextEnter(1);
                  }}
                  onMouseLeave={() => {
                    setTextEnter(0);
                  }}
                  style={
                    textEnter === 1
                      ? { color: ThemeDark.highlightColor, cursor: "pointer" }
                      : { cursor: "pointer" }
                  }
                >
                  dev.nanjae@gmail.com
                </TopSubText>
                <TopSubText
                  onClick={() => {
                    window.open(`https://watchurs.com`);
                  }}
                  onMouseEnter={() => {
                    setTextEnter(4);
                  }}
                  onMouseLeave={() => {
                    setTextEnter(0);
                  }}
                  style={
                    textEnter === 4
                      ? { color: ThemeDark.highlightColor, cursor: "pointer" }
                      : { cursor: "pointer" }
                  }
                >
                  프로젝트 와쳐스란?
                </TopSubText>
              </TopSubTextBox>
            </TopBox>
            <TopBox>
              <TopMainTextBox>
                <TopMainText>Services</TopMainText>
                <TopMainText>:: Broadcaster</TopMainText>
              </TopMainTextBox>
              <TopSubTextBox>
                <TopSubText
                  onMouseEnter={() => {
                    setTextEnter(2);
                  }}
                  onMouseLeave={() => {
                    setTextEnter(0);
                  }}
                  style={
                    textEnter === 2
                      ? {
                          color: "crimson",
                          cursor: "pointer",
                          transition: "null",
                        }
                      : { cursor: "pointer", transition: "null" }
                  }
                >
                  {textEnter === 2 ? "준비중입니다." : "리그 오브 레전드_LOL"}
                </TopSubText>
                <TopSubText
                  onClick={() => {
                    window.open(`https://tft.watchurs.com`);
                  }}
                  onMouseEnter={() => {
                    setTextEnter(3);
                  }}
                  onMouseLeave={() => {
                    setTextEnter(0);
                  }}
                  style={
                    textEnter === 3
                      ? { color: ThemeDark.highlightColor, cursor: "pointer" }
                      : { cursor: "pointer" }
                  }
                >
                  전략적 팀 전투_TFT
                </TopSubText>
              </TopSubTextBox>
            </TopBox>
          </TopDiv>
          <BottomDiv>
            <BottomLeftBox>
              <BottomText>
                WATCHURS isn't endorsed by Riot Games and doesn't reflect the
                views or opinions of Riot Games or anyone officially involved in
                producing or managing Riot Games properties. Riot Games, and all
                associated properties are trademarks or registered trademarks of
                Riot Games, Inc.
              </BottomText>
            </BottomLeftBox>
            <BottomRightBox>
              <BottomText>© 2020 WATCHURS. All rights reserved.</BottomText>
            </BottomRightBox>
          </BottomDiv>
        </Inner>
      </Wrapper>
    </>
  );
};