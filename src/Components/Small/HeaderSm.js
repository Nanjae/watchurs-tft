import React from "react";
import styled from "styled-components";
import logo_watchurs_dark from "../../Assets/Logos/logo_watchurs_dark.png";
import icon_arrow_bottom from "../../Assets/Icons/icon_arrow_bottom.png";
import MovePopMenuSm from "./MovePopMenuSm";

const Wrapper = styled.div`
  position: fixed;
  z-index: 300;
  width: 100%;
  background-color: ${(props) => props.theme.bgMainColor};
  box-shadow: 0px 1px 20px 1px rgba(255, 255, 255, 0.1);
  display: flex;
  @media only screen and (max-width: 575.98px) {
    height: 56px;
  }
  @media only screen and (min-width: 576px) {
    height: 56px;
  }
  @media only screen and (min-width: 768px) {
    height: 70px;
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
  /* background-color: white; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 575.98px) {
    margin: 8px 10px;
  }
  @media only screen and (min-width: 576px) {
    margin: 8px 10px;
  }
  @media only screen and (min-width: 768px) {
    margin: 10px 15px;
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

const LogoBox = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  font-size: 16px;
  cursor: pointer;
  @media only screen and (max-width: 575.98px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 18px;
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

const LogoIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 575.98px) {
    width: 40px;
    height: 40px;
    margin-right: 4px;
  }
  @media only screen and (min-width: 576px) {
    width: 40px;
    height: 40px;
    margin-right: 4px;
  }
  @media only screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
    margin-right: 5px;
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

const HeaderText = styled.div`
  color: white;
`;

const MovePopBox = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  cursor: pointer;
  @media only screen and (max-width: 575.98px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 18px;
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

const MoveIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 575.98px) {
    width: 16px;
    height: 16px;
    margin-left: 4px;
  }
  @media only screen and (min-width: 576px) {
    width: 16px;
    height: 16px;
    margin-left: 4px;
  }
  @media only screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
    margin-left: 5px;
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

//들어갈 내용 : 로고 , 빠른 이동,

export default ({
  setDragNext,
  countMax,
  setClickCard,
  movePop,
  setMovePop,
}) => {
  return (
    <Wrapper>
      {movePop && countMax !== 0 && (
        <MovePopMenuSm
          setDragNext={setDragNext}
          setMovePop={setMovePop}
          countMax={countMax}
          setClickCard={setClickCard}
        />
      )}
      <Inner>
        <LogoBox
          onClick={() => {
            window.location.reload();
          }}
        >
          <LogoIcon url={logo_watchurs_dark} />
          <HeaderText>와쳐스 : TFT</HeaderText>
        </LogoBox>
        <MovePopBox
          style={
            countMax !== 0
              ? null
              : {
                  opacity: 0.5,
                }
          }
          onClick={() => {
            countMax !== 0 && setMovePop(!movePop);
          }}
        >
          <HeaderText>빠른 이동</HeaderText>
          <MoveIcon url={icon_arrow_bottom} />
        </MovePopBox>
      </Inner>
    </Wrapper>
  );
};
