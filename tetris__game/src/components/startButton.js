import React from 'react';
import { StyledStartButton } from './styles/styled__start__button';

const StartButton = ({callback}) => (
<StyledStartButton onClick={callback}>Start Game</StyledStartButton>
)
export default StartButton;