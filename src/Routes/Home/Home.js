import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import ThemeDark from "../../Styles/ThemeDark";
import ThemeLight from "../../Styles/ThemeLight";
import Main from "../../Components/Main/Main";
import useWindowDimensions from "../../Hooks/useWindowDimensions";

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
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
  const { windowWidth, windowHeight } = useWindowDimensions();

  return (
    <>
      <ThemeProvider theme={siteTheme ? ThemeLight : ThemeDark}>
        <Wrapper>
          <Main
            windowWidth={windowWidth}
            windowHeight={windowHeight}
            siteTheme={siteTheme}
          />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
