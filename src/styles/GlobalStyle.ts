import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Pretendard';
      font-weight: 400;
      font-display: swap;
      src: local('Pretendard Regular'), url(../asset/fonts/Pretendard-Regular.woff2) format('woff2');
    }

    @font-face {
      font-family: 'Pretendard';
      font-weight: 700;
      font-display: swap;
      src: local('Pretendard Bold'), url(../asset/fonts/Pretendard-Bold.woff2) format('woff2');
    }


    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
        font-size : 62.5%;
    }

    body {
      font-family: 'Pretendard', sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Pretendard', sans-serif;
    }

    button {
        
    }

    canvas {
      
    }

`;
