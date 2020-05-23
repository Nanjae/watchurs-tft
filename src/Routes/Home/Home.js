import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import ThemeDark from "../../Styles/ThemeDark";
import ThemeLight from "../../Styles/ThemeLight";
import Main from "../../Components/Main/Main";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import { useWindowScroll } from "@react-hook/window-scroll";
import Intro from "../../Components/Intro/Intro";

const Wrapper = styled.div`
  /* overflow-y: hidden; */
`;

const Inner = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
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

const AboutWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 700px;
  background-color: ${(props) => props.theme.bgMainColor};
`;

export default () => {
  const [siteTheme] = useState(false);
  // const [siteTheme, setSiteTheme] = useState(false);
  const { windowWidth, windowHeight } = useWindowDimensions();
  const scrollY = useWindowScroll();

  // console.log(scrollY);

  return (
    <>
      <ThemeProvider theme={siteTheme ? ThemeLight : ThemeDark}>
        <Wrapper style={{ height: windowHeight }}>
          <Inner>
            <Main
              windowWidth={windowWidth}
              windowHeight={windowHeight}
              siteTheme={siteTheme}
              scrollY={scrollY}
            />
            <Intro windowWidth={windowWidth} />
            <AboutWrapper style={{ height: windowHeight }}></AboutWrapper>
            <AboutWrapper
              style={{ height: windowHeight, backgroundColor: "black" }}
            ></AboutWrapper>
          </Inner>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
