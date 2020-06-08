import React from "react";
import styled from "styled-components";

const AdWrapper = styled.div`
  display: flex;
`;

const AdBlockBox = styled.div`
  z-index: 0;
  position: absolute;
  display: flex;
  background-color: crimson;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AdBlockText = styled.div``;

const AdBox = styled.div`
  z-index: 10;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ({ adTitle, adWidth, adHeight, adSrc }) => {
  return (
    <>
      <AdWrapper style={{ width: adWidth, height: adHeight }}>
        <AdBlockBox style={{ width: adWidth, height: adHeight }}>
          <AdBlockText style={{ marginBottom: 5 }}>
            애드블록을 꺼주시면
          </AdBlockText>
          <AdBlockText>감사하겠습니다. (_ _)</AdBlockText>
        </AdBlockBox>
        <AdBox style={{ width: adWidth, height: adHeight }}>
          <iframe
            title={adTitle}
            width={adWidth}
            height={adHeight}
            allowtransparency="true"
            src={adSrc}
            frameborder="0"
            scrolling="no"
          ></iframe>
        </AdBox>
      </AdWrapper>
    </>
  );
};
