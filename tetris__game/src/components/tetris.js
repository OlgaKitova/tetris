import React from 'react';

//--import Components start--
import Stage from './stage';
import Display from './display';
import StartButton from './startButton';
//--import Components over--

import { createStage } from '../gameHelpers.js';
import {StyledTetrisWrapper, StyledTetris} from './styles/styled__tetris';

const Tetris = () => {

  return (
    <StyledTetrisWrapper>
      <StyledTetris>
      <Stage stage={createStage()}/>
      <aside>
        <div>
        <Display text="Score"/>
        <Display text="Rows"/>
        <Display text="Level"/>
        </div>
        <StartButton/>
      </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris;