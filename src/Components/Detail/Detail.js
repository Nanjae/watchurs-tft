import React, { useState } from "react";
import styled from "styled-components";
import icon_detail_close_base from "../../Assets/Icons/icon_detail_close_base.png";
import icon_detail_close_focus from "../../Assets/Icons/icon_detail_close_focus.png";
import logo_twitch from "../../Assets/Twitch/logo_twitch.png";
import { PieChart } from "react-minimal-pie-chart";
import SetEmblem from "../Common/SetEmblem";
import AdBox from "../Common/AdBox";

const Warpper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: ${(props) => (props.clickCard === 0 ? 0 : 50)};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.clickCard === 0 ? 0 : 1)};
  transition: opacity 0.5s;
  color: white;
`;

const Inner = styled.div`
  /* width: ${(props) => (props.clickCard === 0 ? "0%" : "100%")};
  height: ${(props) => (props.clickCard === 0 ? "0%" : "100%")}; */
  /* background-color: rgba(
    255,
    255,
    255,
    ${(props) => (props.clickCard === 0 ? 0 : 0.2)}
  ); */
  width:100%;
  height:100%;
  transition: background-color 0.5s, width 0.5s, height 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentInner = styled.div`
  margin-top: 80px;
  margin-left: 120px;
  margin-right: 120px;
  margin-bottom: 10px;
  width: 880px;
  height: 660px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 2px black;
  /* border: 2px solid white; */
  background-color: rgba(0, 0, 0, 0.8);
`;

const TopDiv = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const BroadAvatar = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 108px;
  height: 108px;
  border: 1px solid white;
  /* border-radius: 50%; */
  margin-right: 20px;
`;

const BroadInfoBox = styled.div`
  height: 100px;
  width: 750px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px 0px;
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
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
`;

const BroadPlatformBox = styled.div`
  color: white;
  background-color: ${(props) => props.theme.twitchColor};
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  margin-top: 5px;
`;

const BroadPlatformIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 14px;
  height: 14px;
  margin-right: 5px;
`;

const BroadPlatformText = styled.div`
  font-size: 14px;
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
  padding: 5px;
  margin-top: -10px;
  margin-right: -5px;
`;

const CloseIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 24px;
  height: 24px;
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
  font-size: 28px;
  margin-right: 5px;
`;

const BroadIdText = styled.div``;

const BroadSumCount = styled.div`
  border: 1px solid white;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
`;

const CenterDiv = styled.div`
  width: 830px;
  height: 430px;
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
  width: 410px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SumInfoDiv = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 10px;
`;

const SumInfoBox = styled.div`
  display: flex;
  height: 110px;
  width: fit-content;
  align-items: flex-end;
`;

const SumAvatar = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 108px;
  height: 108px;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const SumLevel = styled.div`
  font-size: 16px;
  background-color: white;
  padding: 3px 6px;
  color: black;
`;

const SumNameBox = styled.div`
  margin-left: 20px;
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const SumName = styled.div`
  font-size: 24px;
  margin-bottom: 15px;
`;

const SumUpdate = styled.div`
  font-size: 16px;
  margin: 5px 0px;
  color: darkgray;
`;

const TierDiv = styled.div`
  width: 410px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TierBg = styled.div`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 410px;
  height: 200px;
  opacity: 0.6;
`;

const TierBox = styled.div`
  width: 410px;
  height: 300px;
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;

const TierText = styled.div``;

const RankText = styled.div`
  margin-left: 8px;
  margin-right: 8px;
`;

const PointText = styled.div``;

const SumMainRightDiv = styled.div`
  width: 410px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SumWinDiv = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WinRateDiv = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WinTotalDiv = styled.div`
  width: 220px;
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
  width: 100px;
  text-align: center;
`;

const BottomAdDiv = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const CenterAdDiv = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0px;
`;

export default ({ data, clickCard, setClickCard }) => {
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
      <Warpper clickCard={clickCard}>
        <Inner clickCard={clickCard}>
          <ContentInner>
            {clickCard !== 0 && (
              <>
                <TopDiv>
                  <BroadAvatar url={summoner.tftSummoner.broadcaster.avatar} />
                  <BroadInfoBox>
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
                      <BroadSumCount>
                        연결된 소환사 계정 :{" "}
                        {summoner.tftSummoner.broadcaster.countSumPerBroad}
                      </BroadSumCount>
                    </BroadInfoBottomDiv>
                  </BroadInfoBox>
                </TopDiv>
                <CenterAdDiv>
                  <AdBox
                    adTitle={"TFT_728_90"}
                    adWidth={728}
                    adHeight={90}
                    adSrc={`https://tab2.clickmon.co.kr/pop/wp_ad_728.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1065774%7C%5E%7CAdver_M_1046207&rt_ad_id_code=RTA_106389&mon_rf=REFERRER_URL`}
                  />
                </CenterAdDiv>
                <CenterDiv>
                  <SumMainDiv>
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
                        <WinTotalDiv>
                          <WinTotalBox>
                            <WinTotalText
                              style={{ color: "yellow", marginBottom: 10 }}
                            >
                              TOP 1
                            </WinTotalText>
                            <WinTotalText>{summoner.wins + 0}</WinTotalText>
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
                                height: 150,
                                width: 150,
                                margin: "0px 10px",
                              }}
                            />
                          </WinRateDiv>
                          <WinTotalBox>
                            <WinTotalText
                              style={{ color: "crimson", marginBottom: 10 }}
                            >
                              총 게임 수
                            </WinTotalText>
                            <WinTotalText>
                              {summoner.wins + summoner.losses}
                            </WinTotalText>
                          </WinTotalBox>
                        </WinTotalDiv>
                      </SumWinDiv>
                      <BottomAdDiv>
                        <AdBox
                          adTitle={"TFT_200x200_1"}
                          adWidth={200}
                          adHeight={200}
                          adSrc={`https://tab2.clickmon.co.kr/pop/wp_ad_200.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1065774%7C%5E%7CAdver_M_1046207&rt_ad_id_code=RTA_106390&mon_rf=REFERRER_URL`}
                        />
                        <AdBox
                          adTitle={"TFT_200x200_2"}
                          adWidth={200}
                          adHeight={200}
                          adSrc={`https://tab2.clickmon.co.kr/pop/wp_ad_200.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1065774%7C%5E%7CAdver_M_1046207&rt_ad_id_code=RTA_106391&mon_rf=REFERRER_URL`}
                        />
                      </BottomAdDiv>
                    </SumMainRightDiv>
                  </SumMainDiv>
                </CenterDiv>
              </>
            )}
          </ContentInner>
        </Inner>
      </Warpper>
    </>
  );
};
