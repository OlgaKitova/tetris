import React from 'react';
import {StyledDisplay} from './styles/styled__display';

const Display = ({gameOver, text}) => (
  <StyledDisplay gameover={gameOver}>{text}</StyledDisplay>
)

export default Display;