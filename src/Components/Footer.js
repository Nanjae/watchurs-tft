import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ThemeDark from "../Styles/ThemeDark";
import icon_clipboard_before from "../Assets/Icons/icon_clipboard_before.png";
import icon_clipboard_after from "../Assets/Icons/icon_clipboard_after.png";
import icon_clipboard_enter from "../Assets/Icons/icon_clipboard_enter.png";

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

const CommonIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 18px;
  height: 18px;
  transition: background-image 0.3s;
`;

const TopDiv = styled.div`
  display: flex;
  @media only screen and (max-width: 575.99px) {
    width: fit-content;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    height: fit-content;
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
    height: 200px;
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
  height: 25%;
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
  height: 75%;
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

const CopyEmailBox = styled.div`
  height: 25%;
  display: flex;
  align-items: center;
`;

const BottomDiv = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  @media only screen and (max-width: 575.99px) {
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and (min-width: 576px) {
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
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

const BottomLeftBox = styled.div`
  height: 100%;
  display: flex;
  @media only screen and (max-width: 575.99px) {
    width: 100%;
    justify-content: center;
    align-items: flex-end;
  }
  @media only screen and (min-width: 576px) {
    width: 100%;
    justify-content: center;
    align-items: flex-end;
  }
  @media only screen and (min-width: 768px) {
    width: 65%;
    justify-content: flex-start;
    align-items: flex-end;
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
    font-size: 15px;
    line-height: 20px;
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
  height: 100%;
  display: flex;
  @media only screen and (max-width: 575.99px) {
    margin-top: 15px;
    width: 100%;
    justify-content: center;
    align-items: flex-end;
  }
  @media only screen and (min-width: 576px) {
    margin-top: 15px;
    width: 100%;
    justify-content: center;
    align-items: flex-end;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 0px;
    width: 30%;
    justify-content: flex-end;
    align-items: flex-end;
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
  const [copied, setCopied] = useState(false);
  const icon_clipboard = copied
    ? icon_clipboard_after
    : textEnter === 1
    ? icon_clipboard_enter
    : icon_clipboard_before;

  return (
    <>
      <Wrapper>
        <Inner>
          <TopDiv>
            <TopBox>
              <TopMainTextBox>
                <TopMainText>Contact</TopMainText>
              </TopMainTextBox>
              <TopSubTextBox>
                <TopSubText>개발 : 난재(Nanjae)</TopSubText>
                <CopyEmailBox
                  onMouseEnter={() => {
                    setTextEnter(1);
                  }}
                  onMouseLeave={() => {
                    setTextEnter(0);
                  }}
                  onClick={() => {
                    if (!copied) {
                      navigator.clipboard.writeText("dev.nanjae@gmail.com");
                      setCopied(true);
                      setTimeout(() => {
                        setCopied(false);
                      }, 2000);
                    }
                  }}
                >
                  <TopSubText
                    style={
                      copied
                        ? { color: "crimson", cursor: "auto" }
                        : textEnter === 1
                        ? { color: ThemeDark.highlightColor, cursor: "pointer" }
                        : { cursor: "pointer" }
                    }
                  >
                    {copied ? "복사완료" : "dev.nanjae@gmail.com"}
                  </TopSubText>
                  <CommonIcon
                    url={icon_clipboard}
                    style={
                      copied
                        ? { cursor: "auto", marginLeft: 5 }
                        : { cursor: "pointer", marginLeft: 5 }
                    }
                  />
                </CopyEmailBox>
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
                <TopMainText>Projects</TopMainText>
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
                          width: 166,
                        }
                      : { cursor: "pointer", transition: "null", width: 166 }
                  }
                >
                  {textEnter === 2
                    ? "준비 중입니다 (_ _)v"
                    : "리그 오브 레전드_LOL"}
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
