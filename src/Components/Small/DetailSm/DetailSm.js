import React, { useState } from "react";
import styled from "styled-components";
import icon_detail_close_base from "../../../Assets/Icons/icon_detail_close_base.png";
import icon_detail_close_focus from "../../../Assets/Icons/icon_detail_close_focus.png";
import logo_twitch from "../../../Assets/Twitch/logo_twitch.png";
import { PieChart } from "react-minimal-pie-chart";
import SetEmblem from "../../Common/SetEmblem";
import AdBox from "../../Common/AdBox";

const Wrapper = styled.div`
  position: absolute;
  z-index: 300;
  width: 100%;
  height: 640px;
  min-height: 640px;
  z-index: ${(props) => (props.clickCard === 0 ? 0 : 50)};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.clickCard === 0 ? 0 : 1)};
  transition: opacity 0.5s;
  color: white;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  transition: background-color 0.5s, width 0.5s, height 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentInner = styled.div`
  position: relative;
  z-index: 200;
  width: 100%;
  height: 640px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
`;

const TopDiv = styled.div`
  width: 100%;
  height: 90px;
  padding-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const BroadAvatar = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 88px;
  height: 88px;
  border: 1px solid white;
  /* border-radius: 50%; */
  margin: 0px 10px;
`;

const BroadInfoBox = styled.div`
  height: 82px;
  width: ${(props) => props.windowWidth - 118}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 4px 0px;
`;

const BroadInfoTopDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BroadInfoTopBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const BroadRanking = styled.div`
  color: white;
  background-color: crimson;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 12px;
`;

const BroadPlatformBox = styled.div`
  color: white;
  background-color: ${(props) => props.theme.twitchColor};
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 4px;
  border-radius: 4px;
  margin-top: 4px;
`;

const BroadPlatformIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 12px;
  height: 12px;
  margin-right: 4px;
`;

const BroadPlatformText = styled.div`
  font-size: 12px;
`;

const CloseBox = styled.div`
  height: fit-content;
  /* border: 1px solid; */
  /* border-color: white; */
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: border-color 0.3s;
  padding: 4px 8px;
  margin-top: -8px;
`;

const CloseIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 28px;
  height: 28px;
  transition: background-image 0.3s;
`;

const BroadInfoBottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BroadNameBox = styled.div`
  display: flex;
  align-items: center;
`;

const BroadNameText = styled.div`
  font-size: 20px;
  margin-right: 4px;
`;

const BroadIdText = styled.div`
  font-size: 16px;
`;

const BroadSumCount = styled.div`
  border: 1px solid white;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 12px;
`;

const CenterDiv = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
`;

const SumMainDiv = styled.div`
  width: 100%;
  height: 420px;
  display: flex;
  justify-content: space-between;
`;

const SumMainLeftDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SumInfoDiv = styled.div`
  height: fit-content;
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const SumInfoBox = styled.div`
  display: flex;
  height: 70px;
  width: fit-content;
  align-items: flex-end;
`;

const SumAvatar = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const SumLevel = styled.div`
  font-size: 12px;
  background-color: white;
  padding: 2px 4px;
  color: black;
`;

const SumNameBox = styled.div`
  margin-left: 10px;
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const SumName = styled.div`
  font-size: 20px;
  margin-bottom: 8px;
`;

const SumUpdate = styled.div`
  width: 100%;
  font-size: 12px;
  margin: 4px 0px;
  color: darkgray;
  display: flex;
  justify-content: flex-end;
`;

const TierDiv = styled.div`
  width: 320px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TierBg = styled.div`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 110px;
  opacity: 0.6;
  margin: 5px 0px;
`;

const TierBox = styled.div`
  width: 100%;
  height: 120px;
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

const TierText = styled.div``;

const RankText = styled.div`
  margin-left: 8px;
  margin-right: 8px;
`;

const PointText = styled.div``;

const RefreshBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 20px;
  width: 100%;
  font-size: 11px;
`;

const SumMainRightDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SumWinDiv = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin: 5px 0px;
`;

const WinRateDiv = styled.div`
  width: 88px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WinTotalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WinTotalText = styled.div`
  width: 80px;
  text-align: center;
`;

const BottomAdDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  padding: 15px 0px;
`;

const CenterAdDiv = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0px;
`;

export default ({ data, clickCard, setClickCard, windowWidth }) => {
  const [enter, setEnter] = useState(0);

  let icon_detail_close =
    enter !== 0 ? icon_detail_close_focus : icon_detail_close_base;

  const summoner = data.seeSortTFTSummoners[clickCard - 1];

  let updatedTime = "";

  if (clickCard !== 0) {
    const updatedAt = new Date(summoner.updatedAt);
    const year = updatedAt.getFullYear().toString().slice(2);
    const month = (updatedAt.getMonth() + 1).toString().padStart(2, "0");
    const date = updatedAt.getDate().toString().padStart(2, "0");
    const hours = updatedAt.getHours().toString().padStart(2, "0");
    const minutes = updatedAt.getMinutes().toString().padStart(2, "0");
    updatedTime = `${year}-${month}-${date} ${hours}:${minutes}`;
  }

  return (
    <>
      <Wrapper clickCard={clickCard}>
        <Inner clickCard={clickCard}>
          <ContentInner>
            {clickCard !== 0 && (
              <>
                <TopDiv>
                  <BroadAvatar url={summoner.tftSummoner.broadcaster.avatar} />
                  <BroadInfoBox windowWidth={windowWidth}>
                    <BroadInfoTopDiv>
                      <BroadInfoTopBox>
                        <BroadRanking>전체 {clickCard}위</BroadRanking>
                        <BroadPlatformBox>
                          <BroadPlatformIcon url={logo_twitch} />
                          <BroadPlatformText>트위치</BroadPlatformText>
                        </BroadPlatformBox>
                      </BroadInfoTopBox>
                      <CloseBox
                        onMouseEnter={() => {
                          setEnter(1);
                        }}
                        onMouseLeave={() => {
                          setEnter(0);
                        }}
                        onClick={() => {
                          setClickCard(0);
                          setEnter(0);
                        }}
                      >
                        <CloseIcon url={icon_detail_close} />
                      </CloseBox>
                    </BroadInfoTopDiv>
                    <BroadInfoBottomDiv>
                      <BroadNameBox>
                        <BroadNameText>
                          {summoner.tftSummoner.broadcaster.name}
                        </BroadNameText>
                        <BroadIdText>
                          ({summoner.tftSummoner.broadcaster.broadId})
                        </BroadIdText>
                      </BroadNameBox>
                    </BroadInfoBottomDiv>
                  </BroadInfoBox>
                </TopDiv>
                <CenterAdDiv>
                  <AdBox
                    adTitle={"TFT_320_50_M"}
                    adWidth={320}
                    adHeight={50}
                    adSrc={
                      "https://mtab.clickmon.co.kr/pop/wp_m_320.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1065774%7C%5E%7CAdver_M_1046207&rt_ad_id_code=RTA_106392&mon_rf=REFERRER_URL"
                    }
                    fontSize={12}
                  />
                </CenterAdDiv>
                <CenterDiv>
                  <SumMainLeftDiv>
                    <SumInfoDiv>
                      <SumInfoBox>
                        <SumAvatar url={summoner.tftSummoner.avatar}>
                          <SumLevel>{summoner.tftSummoner.level}</SumLevel>
                        </SumAvatar>
                        <SumNameBox>
                          <SumName>{summoner.tftSummoner.name}</SumName>
                          <SumUpdate>최종 업데이트 : {updatedTime}</SumUpdate>
                        </SumNameBox>
                      </SumInfoBox>
                    </SumInfoDiv>
                    <TierDiv>
                      <TierBg
                        url={() => {
                          return SetEmblem(summoner.tierNum);
                        }}
                      />
                      <TierBox>
                        <TierText>{summoner.tier}</TierText>
                        {summoner.tier !== "UNRANKED" && (
                          <RankText>{summoner.rank}</RankText>
                        )}
                        {summoner.tier !== "UNRANKED" && (
                          <PointText>({summoner.points}LP)</PointText>
                        )}
                      </TierBox>
                    </TierDiv>
                  </SumMainLeftDiv>
                  <SumMainRightDiv>
                    <SumWinDiv>
                      <WinTotalBox>
                        <WinTotalText
                          style={{ color: "yellow", marginBottom: 10 }}
                        >
                          TOP 1
                        </WinTotalText>
                        <WinTotalText>{summoner.wins + 0}승</WinTotalText>
                      </WinTotalBox>
                      <WinRateDiv>
                        <PieChart
                          animate={true}
                          animationDuration={500}
                          animationEasing="ease-out"
                          center={[50, 50]}
                          data={[
                            {
                              color: "crimson",
                              title: "TOP 1",
                              value: summoner.wins,
                              key: 0,
                            },
                            {
                              color: "#6A2135",
                              title: "Others",
                              value: summoner.losses,
                              key: 1,
                            },
                          ]}
                          label={({ dataEntry }) => {
                            if (dataEntry.key === 0)
                              return Math.round(dataEntry.percentage) + "%";
                            else return null;
                          }}
                          labelStyle={{
                            fontSize: 16,
                            fontWeight: "bold",
                            fill: "white",
                          }}
                          labelPosition={0}
                          lengthAngle={360}
                          lineWidth={30}
                          onClick={undefined}
                          onMouseOut={undefined}
                          onMouseOver={undefined}
                          paddingAngle={4}
                          radius={50}
                          rounded={false}
                          startAngle={180}
                          viewBoxSize={[100, 100]}
                          style={{
                            height: 80,
                            width: 80,
                            margin: "0px 4px",
                          }}
                        />
                      </WinRateDiv>
                      <WinTotalBox>
                        <WinTotalText
                          style={{ color: "crimson", marginBottom: 10 }}
                        >
                          플레이 수
                        </WinTotalText>
                        <WinTotalText>
                          {summoner.wins + summoner.losses}전
                        </WinTotalText>
                      </WinTotalBox>
                    </SumWinDiv>
                    <RefreshBox>
                      * 소환사 정보는 평균 2시간 이내로 자동 업데이트됩니다.
                    </RefreshBox>
                    <BottomAdDiv>
                      <AdBox
                        adTitle={"TFT_320x100_M"}
                        adWidth={320}
                        adHeight={100}
                        adSrc={
                          "https://mtab.clickmon.co.kr/pop/wp_m_320_100.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1065774%7C%5E%7CAdver_M_1046207&rt_ad_id_code=RTA_106393&mon_rf=REFERRER_URL"
                        }
                        fontSize={12}
                      />
                    </BottomAdDiv>
                  </SumMainRightDiv>
                </CenterDiv>
              </>
            )}
          </ContentInner>
        </Inner>
      </Wrapper>
    </>
  );
};
