import React from "react";
import styled from "styled-components";
import logo_watchurs_dark from "../../../Assets/Logos/logo_watchurs_dark.png";
import logo_watchurs_light from "../../../Assets/Logos/logo_watchurs_light.png";
import CustomAutosuggest from "../../Common/Autosuggest";

const Wrapper = styled.div`
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeaderDiv = styled.div`
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
  font-size: 24px;
  font-weight: 500;
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
  margin-left: 30px;
`;

const BodyLeftDiv = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const BodyLeftTopDiv = styled.div``;

const BodyLeftTopBox = styled.div`
  margin-bottom: 40px;
`;

const BodyLeftTopText = styled.div`
  writing-mode: vertical-lr;
  color: #eec39a;
  font-size: 24px;
  padding: 5px;
`;

const BodyLeftBottomDiv = styled.div``;

const BodyLeftBottomBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyLeftBottomText = styled.div`
  writing-mode: vertical-lr;
  color: white;
  font-size: 24px;
  padding: 5px;
`;

const BodyLeftBottomLine = styled.div`
  width: 1px;
  height: 70px;
  margin-top: 10px;
  background-color: white;
`;

const BodyRightDiv = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  margin-left: 50px;
  font-size: 24px;
  color: white;
`;

const BodyRightLine = styled.div`
  margin-left: 50px;
  background-color: white;
  height: 1px;
  width: 100px;
`;

const BodyRightScrollDiv = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const BodyRightScrollText = styled.div`
  font-size: 24px;
  color: white;
  padding: 5px;
`;

const BodyRightScrollLine = styled.div`
  width: 70px;
  height: 1px;
  background-color: white;
  margin-left: 10px;
`;

const BodyContentWrapper = styled.div`
  position: absolute;
  height: 520px;
  width: 100%;
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const BodyContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyContentTopBox = styled.div`
  margin-bottom: 10px;
  width: fit-content;
  display: flex;
  align-items: center;
`;

const BodyContentTopMainText = styled.div`
  color: white;
  font-size: 28px;
`;

const BodyContentTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: fit-content;
`;

const BodyContentMainTitle = styled.div`
  font-family: "Londrina Solid", sans-serif;
  font-size: 130px;
  color: magenta;
  width: fit-content;
  margin-right: 40px;
`;

const BodyContentSubTitle = styled.div`
  font-family: "Londrina Solid", sans-serif;
  font-size: 130px;
  color: lightgoldenrodyellow;
  margin-top: -40px;
  width: fit-content;
`;

const BodyContentMoreBox = styled.div`
  margin-top: 40px;
  width: 560px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const BodyContentMoreLine = styled.div`
  width: 60px;
  height: 2px;
  background-color: white;
  margin-right: 20px;
`;

const BodyContentMoreMainText = styled.div`
  color: white;
  font-size: 24px;
`;

const BodyContentSearchDiv = styled.div`
  margin-bottom: 30px;
  height: fit-content;
  display: flex;
  justify-content: center;
`;

const BodyContentSearchBox = styled.div`
  height: 80px;
  width: 600px;
`;

export default ({ windowWidth, siteTheme }) => {
  const logo_watchurs = siteTheme ? logo_watchurs_light : logo_watchurs_dark;
  return (
    <Wrapper>
      <Inner>
        <HeaderDiv>
          <HeaderLeftDiv>
            <HeaderLeftLogoDiv>
              <HeaderLeftLogo url={logo_watchurs} />
            </HeaderLeftLogoDiv>
          </HeaderLeftDiv>
          <HeaderRightDiv>
            <HeaderRightBox>
              <HeaderRightText>디렉션</HeaderRightText>
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
                <BodyLeftTopText>와쳐스?</BodyLeftTopText>
              </BodyLeftTopBox>
              <BodyLeftTopBox>
                <BodyLeftTopText>페이스북</BodyLeftTopText>
              </BodyLeftTopBox>
            </BodyLeftTopDiv>
            <BodyLeftBottomDiv>
              <BodyLeftBottomBox>
                <BodyLeftBottomText>스크롤</BodyLeftBottomText>
                <BodyLeftBottomLine />
              </BodyLeftBottomBox>
            </BodyLeftBottomDiv>
          </BodyLeftDiv>
          <BodyRightDiv>
            <BodyRightLineDiv>
              <BodyRightLineBox>
                <BodyRightLineText>HOME</BodyRightLineText>
                <BodyRightLine />
              </BodyRightLineBox>
              <BodyRightLineBox>
                <BodyRightLineText style={{ opacity: 0.2 }}>
                  RANK
                </BodyRightLineText>
                <BodyRightLine style={{ opacity: 0.2, width: 50 }} />
              </BodyRightLineBox>
            </BodyRightLineDiv>
            <BodyRightScrollDiv>
              <BodyRightScrollText>스크롤</BodyRightScrollText>
              <BodyRightScrollLine />
            </BodyRightScrollDiv>
          </BodyRightDiv>
        </BodyDiv>
        <BodyContentWrapper>
          <BodyContentDiv style={{ width: windowWidth - 180 }}>
            <BodyContentTopBox>
              <BodyContentTopMainText>
                전략적 팀 전투 with 와쳐스
              </BodyContentTopMainText>
            </BodyContentTopBox>
            <BodyContentTitleBox>
              <BodyContentMainTitle>Teamfight</BodyContentMainTitle>
              <BodyContentSubTitle>Tactics</BodyContentSubTitle>
            </BodyContentTitleBox>
            <BodyContentMoreBox>
              <BodyContentMoreLine />
              <BodyContentMoreMainText>SEE MORE</BodyContentMoreMainText>
            </BodyContentMoreBox>
          </BodyContentDiv>
          <BodyContentSearchDiv>
            <BodyContentSearchBox>
              <CustomAutosuggest />
            </BodyContentSearchBox>
          </BodyContentSearchDiv>
        </BodyContentWrapper>
      </Inner>
    </Wrapper>
  );
};
