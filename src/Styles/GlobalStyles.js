import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    /* @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=fallback'); */
    /* @import url('https://fonts.googleapis.com/css2?family=Monoton&display=fallback'); */
    body {
        font-family: 'Noto Sans KR', 'Gaegu', sans-serif;
        font-weight: 500;
        font-size: 20px;
        -webkit-tap-highlight-color: transparent;
    }
    a {
        font-family: 'Gaegu', sans-serif;
        font-weight: 400;
        text-decoration: none;
    }
    div {
    }
    input {
        font-family:  'Noto Sans KR','Gaegu', sans-serif;
        font-weight: 500;
        font-size: 20px;
        outline: none;
        background-color: unset;
        ::placeholder {
            color: white;
            background-color: unset;
        }
    }
`;
