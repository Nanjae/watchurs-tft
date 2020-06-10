import React from "react";
import styled from "styled-components";
import logo_watchurs_dark from "../../Assets/Logos/logo_watchurs_dark.png";
import icon_arrow_bottom from "../../Assets/Icons/icon_arrow_bottom.png";
import MovePopMenuSm from "./MovePopMenuSm";

const Wrapper = styled.div`
  position: fixed;
  z-index: 300;
  height: 56px;
  width: 100%;
  background-color: ${(props) => props.theme.bgMainColor};
  box-shadow: 0px 1px 20px 1px rgba(255, 255, 255, 0.1);
  display: flex;
`;

const Inner = styled.div`
  margin: 8px 10px;
  width: 100%;
  /* background-color: white; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  font-size: 16px;
`;

const LogoIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 40px;
  height: 40px;
  margin-right: 4px;
`;

const HeaderText = styled.div`
  color: white;
`;

const MovePopBox = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  font-size: 16px;
`;

const MoveIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 16px;
  height: 16px;
  margin-left: 4px;
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
        <LogoBox>
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
