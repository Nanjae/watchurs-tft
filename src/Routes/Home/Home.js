import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import ThemeDark from "../../Styles/ThemeDark";
import ThemeLight from "../../Styles/ThemeLight";
import Main from "../../Components/Main/Main";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import { useWindowScroll } from "@react-hook/window-scroll";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer";
import CookieHelp from "../../Components/Main/MainUpper/CookieHelp";

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

export default ({ visit, handleVisitTrue, handleVisitFalse }) => {
  const [siteTheme] = useState(false);
  // const [siteTheme, setSiteTheme] = useState(false);
  const { windowWidth, windowHeight } = useWindowDimensions();
  const scrollY = useWindowScroll();

  // console.log(scrollY);

  return (
    <>
      <ThemeProvider theme={siteTheme ? ThemeLight : ThemeDark}>
        <Wrapper style={{ height: windowHeight }}>
          {visit === "false" ? (
            <CookieHelp handleVisitTrue={handleVisitTrue} />
          ) : null}
          <Inner>
            <Main
              windowWidth={windowWidth}
              windowHeight={windowHeight}
              siteTheme={siteTheme}
              scrollY={scrollY}
              handleVisitTrue={handleVisitTrue}
              handleVisitFalse={handleVisitFalse}
            />
            <About />
            <Footer />
          </Inner>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
