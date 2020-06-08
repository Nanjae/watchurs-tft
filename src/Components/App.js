import React, { Component } from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
// import { DefaultRoute } from "./Routes";
import "swiper/css/swiper.css";
import { BlockLoading } from "react-loadingg";
import { Cookies, withCookies } from "react-cookie";
import { instanceOf } from "prop-types";
import Home from "../Routes/Home/Home";

const Wrapper = styled.div`
  user-select: none;
`;

const BlockLoadingDiv = styled.div`
  z-index: 500;
  position: fixed;
  background-color: #1f1f25;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  opacity: 1;
  transform: scale(2, 2) translate(25%, 25%);
  transition: opacity 1s, z-index 1.3s;
`;

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = {
      isLoading: true,
      visit: cookies.get("visit") || false,
    };
  }

  componentDidMount() {
    window.addEventListener("load", () => {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 0);
    });
  }

  handleVisitTrue() {
    const { cookies } = this.props;
    cookies.set("visit", "true", { path: "/" });
    this.setState({ visit: "true" });
  }

  handleVisitFalse() {
    const { cookies } = this.props;
    cookies.set("visit", "false", { path: "/" });
    this.setState({ visit: "false" });
  }

  render() {
    const { visit } = this.state;

    return (
      <>
        <GlobalStyles />
        <Router>
          <Wrapper>
            {this.state.isLoading ? (
              <BlockLoadingDiv>
                <BlockLoading size={"large"} />
              </BlockLoadingDiv>
            ) : (
              <BlockLoadingDiv style={{ opacity: 0, zIndex: -50 }} />
            )}
            <Home
              visit={visit}
              handleVisitTrue={this.handleVisitTrue.bind(this)}
              handleVisitFalse={this.handleVisitFalse.bind(this)}
            />
          </Wrapper>
        </Router>
      </>
    );
  }
}

export default withCookies(App);
