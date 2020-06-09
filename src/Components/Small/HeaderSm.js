import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  z-index: ${(props) => (props.clickCard === 0 ? 150 : 0)};
  height: 56px;
  width: 100%;
  background-color: ${(props) => props.theme.bgMainColor};
  box-shadow: 0px 1px 20px 1px rgba(255, 255, 255, 0.2);
`;

export default ({ clickCard }) => {
  return <Wrapper clickCard={clickCard}></Wrapper>;
};
