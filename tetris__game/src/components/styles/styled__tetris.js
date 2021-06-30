import styled from 'styled-components';

import bg__image from '../../img/background.png';

export const StyledTetrisWrapper = styled.div`
width: 100vw;
height: 100vh;
background: url(${bg__image}) rgba(0,0,0,0.6);
background-blend-mode: darken;
background-size: contain;
overflow: hidden;
`

export const StyledTetris = styled.div`
display: flex;
align-items: flex-start;
max-width: 900px;
padding: 40px;
margin: 0 auto;

aside {
  display: block;
  width: 100%;
  max-width: 200px;
  padding: 0 20px;
}
`