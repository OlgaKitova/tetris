import React from 'react';
import { StyledPauseButton, StyledStartAgainButton } from './styles/styled__pause__button';

const PauseButton = ({callback, pause}) => {

  return pause === true ?  (<StyledStartAgainButton onClick={callback}>Start again</StyledStartAgainButton>) :
  (<StyledPauseButton onClick={callback}>Pause</StyledPauseButton>) 
   
  
  
  }
export default PauseButton;