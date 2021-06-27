import React from 'react';

//--import Components start--
import Stage from './stage';
import Display from './display';
import StartButton from './startButton';
//--import Components over--

const Tetris = () => {

  return (
    <div>
      <Stage/>
      <aside>
        <div>
        <Display text="Score"/>
        <Display text="Rows"/>
        <Display text="Level"/>
        </div>
        <StartButton/>
      </aside>
    </div>
  )
}

export default Tetris;