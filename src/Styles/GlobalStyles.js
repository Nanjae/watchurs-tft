import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    /* @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=fallback'); */
    /* @import url('https://fonts.googleapis.com/css2?family=Monoton&display=fallback'); */
    body {
        font-family: 'Gaegu', sans-serif;
        font-weight: 400;
        font-size: 14px;
        -webkit-tap-highlight-color: transparent;
    }
    a {
        font-family: 'Gaegu', sans-serif;
        font-weight: 400;
        text-decoration: none;
    }
    div {
    }
`;
