import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    margin: 0;
    transition: background-color 0.3s, color 0.3s;
  }
  #about > .innerbox > .contents-wrap > .education > .edu-wrap > div > p.term{
    color: ${({ theme }) => theme.text};
  }
`;