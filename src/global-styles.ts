import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import InterRegularWoff from './fonts/inter-regular.woff';
import InterRegularWoff2 from './fonts/inter-regular.woff2';
import InterMediumWoff from './fonts/inter-medium.woff';
import InterMediumWoff2 from './fonts/inter-medium.woff2';
import InterSemiBoldWoff from './fonts/inter-semibold.woff';
import InterSemiBoldWoff2 from './fonts/inter-semibold.woff2';
import InterBoldWoff from './fonts/inter-bold.woff';
import InterBoldWoff2 from './fonts/inter-bold.woff2';

export default createGlobalStyle`
  ${normalize}
  
  @font-face {
    font-style: normal;
    font-weight: 400;
    font-family: "Inter";
    font-display: swap;
    src:
      url(${InterRegularWoff2}) format("woff2"),
      url(${InterRegularWoff}) format("woff");
  }

  @font-face {
    font-style: normal;
    font-weight: 500;
    font-family: "Inter";
    font-display: swap;
    src:
      url(${InterMediumWoff2}) format("woff2"),
      url(${InterMediumWoff}) format("woff");
  }

  @font-face {
    font-style: normal;
    font-weight: 600;
    font-family: "Inter";
    font-display: swap;
    src:
      url(${InterSemiBoldWoff2}) format("woff2"),
      url(${InterSemiBoldWoff}) format("woff");
  }

  @font-face {
    font-style: normal;
    font-weight: 700;
    font-family: "Inter";
    font-display: swap;
    src:
      url(${InterBoldWoff2}) format("woff2"),
      url(${InterBoldWoff}) format("woff");
  }

  :root {
    --color-default-white: #ffffff;
    --color-text-default: #050510;
    --color-text-light-primary: #97979b;
    --color-text-light-secondary: #c3c3c6;
    --color-text-light-thirdly: 55555c;
    --color-bg: #f7f7f8;
    --color-brand-violet: #6534ff;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  html {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
    font-family: "Inter", Arial, sans-serif;
    color: var(--color-text-default);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    width: 100%;
    height: 100%;

    background-color: var(--color-default-white);
  }

  a {
    color: #000000;
    text-decoration: none;
  }

  img,
  video {
    display: block;
    max-width: 100%;
    height: auto;
  }

  textarea {
    resize: none;
  }

  input:-webkit-autofill {
    box-shadow: inset 0 0 0 1000px $color-default-white;

    -webkit-text-fill-color: $color-default-black;
  }

  // firefox placeholder \ invalid fix + ios bdrs
  input,
  textarea {
    border-radius: 0;

    &::placeholder {
      opacity: 1;
    }

    &:invalid {
      box-shadow: none;
    }
  }

  select {
    border-radius: 0;
  }

  // chrome search X removal
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    appearance: none;
  }

  // input[number] arrows removal
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;

    appearance: none;
  }

  input[type="number"] {
    appearance: textfield;
  }

  // ios button \ inputs reset
  select,
  textarea,
  input:matches([type="email"],
    [type="number"],
    [type="password"],
    [type="search"],
    [type="tel"],
    [type="text"],
    [type="url"]) {
    appearance: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    appearance: none;
  }
`;

export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
