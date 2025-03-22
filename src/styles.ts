import { createGlobalStyle } from 'styled-components'

export const colors = {
  back: '#FFF8F2',
  letters: '#E66767',
  buttonLetters: '#FFEBD9',
  white: '#FFFFFF',
  inputColor: '#000'
}

export const breakpoints = {
  desktop: '1042px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", serif;
  list-style: none;

  body {
    background-color: ${colors.back}
  }


  .container {
  max-width: 1042px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 120px;

   @media(max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
}
`
