import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export default createGlobalStyle`
    ${normalize}

    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
    }

    body {
        font-size: 1.6rem;
    }
`;
