import React, {useState} from 'react';

//--import Components start--
import Stage from './stage';
import Display from './display';
import StartButton from './startButton';
//--import Components over--
//import custom hooks
import {usePlayer} from '../hooks/usePlayer';
import {useStage} from '../hooks/useStage';
//import style components
import {StyledTetrisWrapper, StyledTetris} from './styles/styled__tetris';

const Tetris = () => {

  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);


  console.log('re-render');
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
      <Stage stage={stage}/>
      <aside>
        {gameOver ? (<Display gameOver={gameOver} text="Game over"/>) : (
          <div>
        <Display text="Score"/>
        <Display text="Rows"/>
        <Display text="Level"/>
        </div>
        )}
        
        <StartButton/>
      </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris;