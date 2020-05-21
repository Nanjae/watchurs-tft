import React from "react";
import styled from "styled-components";
import logo_watchurs_dark from "../../../Assets/Logos/logo_watchurs_dark.png";
import logo_watchurs_light from "../../../Assets/Logos/logo_watchurs_light.png";

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

const HeaderLeftBox = styled.div`
  display: flex;
  height: 100%;
  margin-left: 10px;
  justify-content: flex-start;
  align-items: center;
`;

const HeaderLeftText = styled.div`
  color: ${(props) => props.theme.fontMainColor};
  font-size: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
`;

const HeaderCenterDiv = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderCenterLogoDiv = styled.div`
  padding: 5px;
  margin-top: 10px;
  cursor: pointer;
`;

const HeaderCenterLogo = styled.div`
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
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 30px;
`;

const BodyLeftDiv = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const BodyLeftTopDiv = styled.div`
  margin-top: 40px;
`;

const BodyLeftTopBox = styled.div`
  margin-top: 40px;
`;

const BodyLeftTopText = styled.div`
  writing-mode: vertical-lr;
  color: #eec39a;
  /*darkkhaki*/
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

const BodyCenterDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const BodyCenterTopBox = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

const BodyCenterTopMainText = styled.div`
  color: white;
  font-size: 24px;
`;

const BodyCenterTitleBox = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: fit-content;
`;

const BodyCenterMainTitle = styled.div`
  font-family: "Londrina Solid", sans-serif;
  font-size: 130px;
  color: #e8293b;
  width: fit-content;
`;

const BodyCenterSubTitle = styled.div`
  font-family: "Londrina Solid", sans-serif;
  font-size: 130px;
  color: lightgoldenrodyellow;
  margin-top: -40px;
  margin-right: -25px;
  width: fit-content;
`;

const BodyCenterBottomBox = styled.div`
  margin-left: 370px;
  margin-top: 60px;
  display: flex;
  align-items: center;
  /* opacity: 0.7; */
`;

const BodyCenterBottomLine = styled.div`
  width: 60px;
  height: 2px;
  background-color: white;
  margin-right: 20px;
`;

const BodyCenterBottomMainText = styled.div`
  color: white;
  font-size: 24px;
`;

const BodyRightDiv = styled.div`
  /* background-color: gray; */
  width: 80px;
  height: 100%;
`;

export default ({ windowWidth, siteTheme }) => {
  const logo_watchurs = siteTheme ? logo_watchurs_light : logo_watchurs_dark;
  return (
    <Wrapper>
      <Inner>
        <HeaderDiv>
          <HeaderLeftDiv>
            <HeaderLeftBox>
              <HeaderLeftText>디렉션</HeaderLeftText>
            </HeaderLeftBox>
          </HeaderLeftDiv>
          <HeaderCenterDiv>
            <HeaderCenterLogoDiv>
              <HeaderCenterLogo url={logo_watchurs} />
            </HeaderCenterLogoDiv>
          </HeaderCenterDiv>
          <HeaderRightDiv>
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
          <BodyCenterDiv style={{ width: windowWidth - 180 }}>
            <BodyCenterTopBox>
              <BodyCenterTopMainText>
                전략적 팀 전투 with 와쳐스
              </BodyCenterTopMainText>
            </BodyCenterTopBox>
            <BodyCenterTitleBox>
              <BodyCenterMainTitle>Teamfight</BodyCenterMainTitle>
              <BodyCenterSubTitle>Tactics</BodyCenterSubTitle>
            </BodyCenterTitleBox>
            <BodyCenterBottomBox>
              <BodyCenterBottomLine />
              <BodyCenterBottomMainText>SEE MORE</BodyCenterBottomMainText>
            </BodyCenterBottomBox>
          </BodyCenterDiv>
          <BodyRightDiv></BodyRightDiv>
        </BodyDiv>
      </Inner>
    </Wrapper>
  );
};
