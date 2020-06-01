import React from "react";
import styled, { keyframes, css } from "styled-components";
import logo_watchurs_dark from "../../../Assets/Logos/logo_watchurs_dark.png";
import logo_watchurs_light from "../../../Assets/Logos/logo_watchurs_light.png";
import icon_arrow_bottom from "../../../Assets/Icons/icon_arrow_bottom.png";
import icon_arrow_left from "../../../Assets/Icons/icon_arrow_left.png";

const HeaderDiv = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const HeaderLeftDiv = styled.div`
  width: 25%;
  height: 60px;
  margin-left: 20px;
`;

const HeaderLeftLogoDiv = styled.div`
  width: fit-content;
  padding: 5px;
  cursor: pointer;
`;

const HeaderLeftLogo = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 50px;
  height: 50px;
`;

const HeaderRightDiv = styled.div`
  width: 25%;
  height: 60px;
  margin-right: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const HeaderRightBox = styled.div`
  display: flex;
  height: 100%;
  margin-right: 20px;
  justify-content: flex-end;
  align-items: center;
`;

const HeaderRightText = styled.div`
  color: ${(props) => props.theme.fontMainColor};
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
`;

const BodyDiv = styled.div`
  height: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BodyLeftDiv = styled.div`
  width: 100px;
  margin-left: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const BodyLeftTopDiv = styled.div``;

const BodyLeftTopBox = styled.div`
  margin-bottom: 40px;
`;

const BodyLeftTopText = styled.div`
  writing-mode: vertical-lr;
  color: white;
  padding: 5px;
`;

const BodyLeftBottomDiv = styled.div`
  display: flex;
`;

const BodyLeftBottomBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 5px;
`;

const BodyLeftBottomText = styled.div`
  writing-mode: vertical-lr;
  color: white;
`;

const BodyLeftBottomLine = styled.div`
  height: 70px;
  margin-top: 15px;
`;

const arrowAnimation1 = keyframes`
  0% {
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  50%{
    opacity: 0.1;
  }
  75% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.1;
  }
`;

const arrowAnimation2 = keyframes`
   0% {
    opacity: 0.1;
  }
  25% {
    opacity: 1;
  }
  50%{
    opacity: 1;
  }
  75% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.1;
  }
`;

const arrowAnimation3 = keyframes`
   0% {
    opacity: 0.1;
  }
  25% {
    opacity: 0.1;
  }
  50%{
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
  }
`;

const arrowAnimation4 = keyframes`
  0% {
    opacity: 0.1;
  }
  25% {
    opacity: 0.1;
  }
  50%{
    opacity: 0.1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
  }
`;

const BodyLeftBottomArrow = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 20px;
  height: 20px;
  margin-top: -5px;
  transition: animation 0.5s;
  animation: ${(props) =>
    props.animationIndex === 1
      ? css`
          ${arrowAnimation1} 1.0s infinite running
        `
      : props.animationIndex === 2
      ? css`
          ${arrowAnimation2} 1.0s infinite running
        `
      : props.animationIndex === 3
      ? css`
          ${arrowAnimation3} 1.0s infinite running
        `
      : css`
          ${arrowAnimation4} 1.0s infinite running
        `};
`;

const BodyRightDiv = styled.div`
  width: 120px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const BodyRightScrollDiv = styled.div`
  margin-top: -80px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const BodyRightScrollText = styled.div`
  color: white;
  padding: 5px;
  margin-left: 20px;
  margin-bottom: 5px;
`;

const BodyRightScrollLine = styled.div`
  width: 100px;
  height: 2px;
  display: flex;
  justify-content: flex-end;
`;

const BodyRightScrollArrow = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 20px;
  height: 20px;
  margin-left: -5px;
  transition: animation 0.5s;
  animation: ${(props) =>
    props.animationIndex === 1
      ? css`
          ${arrowAnimation1} 1.0s infinite running
        `
      : props.animationIndex === 2
      ? css`
          ${arrowAnimation2} 1.0s infinite running
        `
      : props.animationIndex === 3
      ? css`
          ${arrowAnimation3} 1.0s infinite running
        `
      : css`
          ${arrowAnimation4} 1.0s infinite running
        `};
`;

const BodyRightLineDiv = styled.div``;

const BodyRightLineBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30px;
  justify-content: space-between;
  align-items: flex-start;
`;

const BodyRightLineText = styled.div`
  margin-left: 20px;

  color: white;
  transition: opacity 0.5s;
`;

const BodyRightLine = styled.div`
  margin-left: 20px;
  background-color: white;
  height: 2px;
  width: 100px;
  transition: opacity 0.5s, width 0.5s, height 0.5s;
`;

export default ({ siteTheme, dragNext }) => {
  const logo_watchurs = siteTheme ? logo_watchurs_light : logo_watchurs_dark;

  return (
    <>
      <HeaderDiv>
        <HeaderLeftDiv>
          <HeaderLeftLogoDiv>
            <HeaderLeftLogo url={logo_watchurs} />
          </HeaderLeftLogoDiv>
        </HeaderLeftDiv>
        <HeaderRightDiv>
          <HeaderRightBox>
            <HeaderRightText>도움말</HeaderRightText>
          </HeaderRightBox>
          <HeaderRightBox>
            <HeaderRightText>메뉴</HeaderRightText>
          </HeaderRightBox>
        </HeaderRightDiv>
      </HeaderDiv>
      <BodyDiv>
        <BodyLeftDiv>
          <BodyLeftTopDiv>
            <BodyLeftTopBox>
              <BodyLeftTopText>WATCHURS?</BodyLeftTopText>
            </BodyLeftTopBox>
            <BodyLeftTopBox>
              <BodyLeftTopText>페이스북</BodyLeftTopText>
            </BodyLeftTopBox>
          </BodyLeftTopDiv>
          <BodyLeftBottomDiv>
            <BodyLeftBottomBox>
              <BodyLeftBottomText>스크롤</BodyLeftBottomText>
              <BodyLeftBottomLine>
                <BodyLeftBottomArrow
                  animationIndex={1}
                  url={icon_arrow_bottom}
                />
                <BodyLeftBottomArrow
                  animationIndex={2}
                  url={icon_arrow_bottom}
                />
                <BodyLeftBottomArrow
                  animationIndex={3}
                  url={icon_arrow_bottom}
                />
                <BodyLeftBottomArrow
                  animationIndex={4}
                  url={icon_arrow_bottom}
                />
              </BodyLeftBottomLine>
            </BodyLeftBottomBox>
          </BodyLeftBottomDiv>
        </BodyLeftDiv>
        <BodyRightDiv>
          <BodyRightScrollDiv>
            <BodyRightScrollText>드래그</BodyRightScrollText>
            <BodyRightScrollLine>
              <BodyRightScrollArrow animationIndex={4} url={icon_arrow_left} />
              <BodyRightScrollArrow animationIndex={3} url={icon_arrow_left} />
              <BodyRightScrollArrow animationIndex={2} url={icon_arrow_left} />
              <BodyRightScrollArrow animationIndex={1} url={icon_arrow_left} />
            </BodyRightScrollLine>
          </BodyRightScrollDiv>
          <BodyRightLineDiv>
            <BodyRightLineBox>
              <BodyRightLineText
                style={dragNext === 0 ? null : { opacity: 0.2 }}
              >
                HOME
              </BodyRightLineText>
              <BodyRightLine
                style={
                  dragNext === 0 ? null : { opacity: 0.2, width: 50, height: 1 }
                }
              />
            </BodyRightLineBox>
            <BodyRightLineBox>
              <BodyRightLineText style={dragNext > 0 ? null : { opacity: 0.2 }}>
                RANK
              </BodyRightLineText>
              <BodyRightLine
                style={
                  dragNext > 0 ? null : { opacity: 0.2, width: 50, height: 1 }
                }
              />
            </BodyRightLineBox>
          </BodyRightLineDiv>
        </BodyRightDiv>
      </BodyDiv>
    </>
  );
};
