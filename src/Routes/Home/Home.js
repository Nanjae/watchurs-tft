import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import ThemeDark from "../../Styles/ThemeDark";
import ThemeLight from "../../Styles/ThemeLight";

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
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

export default () => {
  const [siteTheme, setSiteTheme] = useState(false);

  return (
    <>
      <ThemeProvider theme={siteTheme ? ThemeLight : ThemeDark}>
        <Wrapper>HELLO, WORLD!!!</Wrapper>
      </ThemeProvider>
    </>
  );
};
