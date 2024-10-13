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
        background-color : #1f1f1f;
    
    }

    body {
      font-family: 'Pretendard', sans-serif;
      min-height : 100vh;
      color : #fff;
     
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Pretendard', sans-serif;
    }

    button {
        background-color : transparent;
        outline : none;
        border : none;
        cursor: pointer;
    }
    
    
   
    .canvas-container {
      position : absolute !important;
      top  : 0;
      left : 0;
      z-index : 100000;
    }
    
     a {
      text-decoration : none;
      display : block;
      color : inherit;
     }

     li {
      list-style : none;
     }

  @media screen and (max-width : 1080px) {
    .canvas-container {
      display : none;
    }
  }
`;
