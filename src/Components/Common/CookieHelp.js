import React from "react";
import styled from "styled-components";
import icon_help_close from "../../Assets/Icons/icon_help_close.png";
import icon_help_top_right from "../../Assets/Icons/icon_help_top_right.png";
import icon_help_top_left from "../../Assets/Icons/icon_help_top_left.png";
import icon_help_bottom_right from "../../Assets/Icons/icon_help_bottom_right.png";
import icon_help_right_bottom from "../../Assets/Icons/icon_help_right_bottom.png";
import icon_help_right_top from "../../Assets/Icons/icon_help_right_top.png";
import icon_help_left_bottom from "../../Assets/Icons/icon_help_left_bottom.png";

const Wrapper = styled.div`
  position: absolute;
  z-index: 300;
  width: 100%;
  height: 100%;
  min-height: 800px;
  background-color: rgba(0, 0, 0, 0.5);
  font-family: "Gaegu", sans-serif;
  font-weight: 400;
  font-size: 30px;
  color: white;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CommonIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 30px;
  height: 30px;
`;

const TopDiv = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-between;
`;

const LogoBox = styled.div`
  display: flex;
  margin-top: 90px;
  margin-left: 40px;
`;

const LogoText = styled.div``;

const CloseBox = styled.div`
  position: absolute;
  width: 100%;
  height: 55px;
  margin-top: 80px;
  display: flex;
  justify-content: center;
`;

const CloseBoxInner = styled.div`
  display: flex;
  cursor: pointer;
  padding: 0px 15px;
  border: 3px solid white;
  border-radius: 8px;
  align-items: center;
  background-color: black;
`;

const CloseText = styled.div``;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const HelpInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 220px;
  margin-top: 35px;
`;

const HelpText = styled.div`
  margin-right: 10px;
`;

const MenuInner = styled.div`
  display: flex;
  margin-right: 75px;
`;

const MenuText = styled.div`
  margin-top: 10px;
`;

const CenterDiv = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: space-between;
`;

const HubBox = styled.div``;

const HubInner = styled.div`
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  margin-top: 120px;
`;

const HubText = styled.div`
  margin-left: 20px;
  margin-top: 5px;
`;

const MainBox = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const RightBox = styled.div`
  margin-right: 30px;
`;

const DragInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: -50px;
  margin-bottom: 20px;
`;

const DragText = styled.div`
  margin-top: 5px;
`;

const RouteInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const RouteText = styled.div`
  margin-bottom: 5px;
`;

const BottomDiv = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-between;
`;

const ScrollBox = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
`;

const ScrollInner = styled.div`
  margin-left: 25px;
  margin-bottom: 160px;
  display: flex;
  align-items: flex-end;
`;

const ScrollText = styled.div`
  margin-bottom: 10px;
`;

const SearchBox = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 660px;
`;

const SearchInner = styled.div`
  display: flex;
  margin-left: 150px;
`;

const SearchText = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export default ({ handleVisitTrue, dragNext }) => {
  return (
    <>
      <Wrapper>
        <Inner>
          <SearchBox>
            <SearchInner>
              <CommonIcon
                url={icon_help_top_right}
                style={{ marginRight: 10 }}
              />
              <div>
                {dragNext === 0 ? (
                  <>
                    <SearchText style={{ marginTop: 10 }}>
                      여기에 검색어를 입력해주세요
                    </SearchText>
                    <SearchText style={{ marginTop: 20, marginBottom: 5 }}>
                      예) 브로드캐스터 닉네임 : 한동숙
                    </SearchText>
                    <SearchText style={{ marginLeft: 50 }}>
                      브로드캐스터 ID : handongsuk
                    </SearchText>
                  </>
                ) : (
                  <>
                    <SearchText style={{ marginTop: 10 }}>
                      원하시는 브로드캐스터를
                    </SearchText>
                    <SearchText style={{ marginTop: 5, marginBottom: 5 }}>
                      클릭하면 좀 더 보여드릴께요 :D
                    </SearchText>
                  </>
                )}
              </div>
            </SearchInner>
          </SearchBox>
          <TopDiv>
            <LogoBox>
              <CommonIcon
                url={icon_help_top_right}
                style={{ marginRight: 10 }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <LogoText>저는 와쳐스 로고예요</LogoText>
                <LogoText>누르면 새로고침을 해줘요</LogoText>
              </div>
            </LogoBox>
            <CloseBox>
              <CloseBoxInner
                onClick={() => {
                  handleVisitTrue();
                }}
              >
                <CloseText>도움말 끄기</CloseText>
                <CommonIcon url={icon_help_close} style={{ marginLeft: 10 }} />
              </CloseBoxInner>
            </CloseBox>
            <ButtonBox>
              <HelpInner>
                <CommonIcon
                  url={icon_help_right_bottom}
                  style={{ marginBottom: 10 }}
                />
                <HelpText>도움이 필요하시면?</HelpText>
              </HelpInner>
              <MenuInner>
                <MenuText>원하는 페이지로 슝~</MenuText>
                <CommonIcon
                  url={icon_help_top_left}
                  style={{ marginLeft: 10 }}
                />
              </MenuInner>
            </ButtonBox>
          </TopDiv>
          <CenterDiv>
            <HubBox>
              <HubInner>
                <CommonIcon url={icon_help_left_bottom} />
                <HubText>와쳐스가 뭔데요?</HubText>
              </HubInner>
            </HubBox>
            <MainBox></MainBox>
            <RightBox>
              <DragInner>
                <CommonIcon
                  url={icon_help_right_bottom}
                  style={{ marginRight: 75 }}
                />
                <DragText>클릭 또는 왼쪽으로 드래그 해보세요!</DragText>
              </DragInner>
              <RouteInner>
                <RouteText>현재 페이지 위치예요</RouteText>
                <CommonIcon
                  url={icon_help_right_top}
                  style={{ marginRight: 85 }}
                />
              </RouteInner>
            </RightBox>
          </CenterDiv>
          <BottomDiv>
            <ScrollBox>
              <ScrollInner>
                <CommonIcon
                  url={icon_help_bottom_right}
                  style={{ marginRight: 10 }}
                />
                <ScrollText>아래엔 뭐가 있을까요?</ScrollText>
              </ScrollInner>
            </ScrollBox>
          </BottomDiv>
        </Inner>
      </Wrapper>
    </>
  );
};
