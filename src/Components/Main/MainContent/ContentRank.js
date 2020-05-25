import React from "react";
import styled from "styled-components";
import CardBox from "../../Card.js/CardBox";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 800px;
  transform: translateX(${(props) => props.page * 100}%);
  justify-content: center;
`;

const Opacity = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 800px;
  background-color: ${(props) =>
    props.page % 2 === 1
      ? props.theme.fontSubColor
      : props.theme.bgFooterColor};
  transform: translateX(${(props) => props.page * 100}%);
  opacity: 0.8;
`;

const Inner = styled.div`
  margin-top: 80px;
  margin-left: 120px;
  margin-right: 120px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const CardDiv = styled.div`
  width: 800px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default ({ page }) => {
  return (
    <>
      <Opacity page={page} />
      <Wrapper page={page}>
        <Inner>
          <CardDiv>
            <CardBox
              rankText={`999`}
              broadIcon={``}
              broadName={`브로드캐스터이름`}
              sumIcon={``}
              sumName={`롤소환사여덟글자`}
              tierText={`GRANDMASTER`}
              tierNum={`1`}
              tierPoint={`2311`}
            />
            <CardBox
              rankText={`999`}
              broadIcon={``}
              broadName={`브로드캐스터이름`}
              sumIcon={``}
              sumName={`롤소환사여덟글자`}
              tierText={`GRANDMASTER`}
              tierNum={`1`}
              tierPoint={`2311`}
            />
            <CardBox
              rankText={`999`}
              broadIcon={``}
              broadName={`브로드캐스터이름`}
              sumIcon={``}
              sumName={`롤소환사여덟글자`}
              tierText={`GRANDMASTER`}
              tierNum={`1`}
              tierPoint={`2311`}
            />
            <CardBox
              rankText={`999`}
              broadIcon={``}
              broadName={`브로드캐스터이름`}
              sumIcon={``}
              sumName={`롤소환사여덟글자`}
              tierText={`GRANDMASTER`}
              tierNum={`1`}
              tierPoint={`2311`}
            />
            <CardBox
              rankText={`999`}
              broadIcon={``}
              broadName={`브로드캐스터이름`}
              sumIcon={``}
              sumName={`롤소환사여덟글자`}
              tierText={`GRANDMASTER`}
              tierNum={`1`}
              tierPoint={`2311`}
            />
            <CardBox
              rankText={`999`}
              broadIcon={``}
              broadName={`브로드캐스터이름`}
              sumIcon={``}
              sumName={`롤소환사여덟글자`}
              tierText={`GRANDMASTER`}
              tierNum={`1`}
              tierPoint={`2311`}
            />
            <CardBox
              rankText={`999`}
              broadIcon={``}
              broadName={`브로드캐스터이름`}
              sumIcon={``}
              sumName={`롤소환사여덟글자`}
              tierText={`GRANDMASTER`}
              tierNum={`1`}
              tierPoint={`2311`}
            />
            <CardBox
              rankText={`999`}
              broadIcon={``}
              broadName={`브로드캐스터이름`}
              sumIcon={``}
              sumName={`롤소환사여덟글자`}
              tierText={`GRANDMASTER`}
              tierNum={`1`}
              tierPoint={`2311`}
            />
            <CardBox
              rankText={`999`}
              broadIcon={``}
              broadName={`브로드캐스터이름`}
              sumIcon={``}
              sumName={`롤소환사여덟글자`}
              tierText={`GRANDMASTER`}
              tierNum={`1`}
              tierPoint={`2311`}
            />
            <CardBox
              rankText={`999`}
              broadIcon={``}
              broadName={`브로드캐스터이름`}
              sumIcon={``}
              sumName={`롤소환사여덟글자`}
              tierText={`GRANDMASTER`}
              tierNum={`1`}
              tierPoint={`2311`}
            />
          </CardDiv>
        </Inner>
      </Wrapper>
    </>
  );
};
