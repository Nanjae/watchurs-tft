import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import ThemeDark from "../../Styles/ThemeDark";
import ThemeLight from "../../Styles/ThemeLight";
import Main from "../../Components/Main/Main";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import { useWindowScroll } from "@react-hook/window-scroll";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer";
import CookieHelp from "../../Components/Common/CookieHelp";

const Wrapper = styled.div`
  /* overflow-y: hidden; */
`;

const Inner = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 575.98px) {
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
  const [dragNext, setDragNext] = useState(0);
  const [clickCard, setClickCard] = useState(0);
  // const [siteTheme, setSiteTheme] = useState(false);
  const { windowWidth, windowHeight } = useWindowDimensions();
  const scrollY = useWindowScroll();

  // console.log(scrollY);

  return (
    <>
      <ThemeProvider theme={siteTheme ? ThemeLight : ThemeDark}>
        <Wrapper style={{ height: windowHeight }}>
          {visit !== "true" && windowWidth >= 1200 ? (
            <CookieHelp
              handleVisitTrue={handleVisitTrue}
              dragNext={dragNext}
              clickCard={clickCard}
            />
          ) : null}
          <Inner>
            <Main
              dragNext={dragNext}
              setDragNext={setDragNext}
              windowWidth={windowWidth}
              windowHeight={windowHeight}
              siteTheme={siteTheme}
              scrollY={scrollY}
              handleVisitTrue={handleVisitTrue}
              handleVisitFalse={handleVisitFalse}
              clickCard={clickCard}
              setClickCard={setClickCard}
            />
            <About />
            <Footer />
          </Inner>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
