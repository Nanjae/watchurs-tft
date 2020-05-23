import React from "react";
import styled from "styled-components";

const RankWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.page % 2 === 1 ? props.theme.fontSubColor : props.theme.fontPopColor};
  transform: translateX(${(props) => props.page * 100}%);
`;

export default ({ page }) => {
  return (
    <>
      <RankWrapper page={page}></RankWrapper>
    </>
  );
};
