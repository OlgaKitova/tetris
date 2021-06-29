import React, {useState} from 'react';

import {createStage, checkCollision} from '../gameHelpers';
//--import Components start--
import Stage from './stage';
import Display from './display';
import StartButton from './startButton';
//--import Components over--
//import custom hooks
import {usePlayer} from '../hooks/usePlayer';
import {useStage} from '../hooks/useStage';
import {useInterval} from '../hooks/useInterval';
//import style components
import {StyledTetrisWrapper, StyledTetris} from './styles/styled__tetris';

const Tetris = () => {

  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);

  const movePlayer = dir => {
    if(!checkCollision(player, stage, {x: dir, y: 0})) { 
      updatePlayerPos({x: dir, y: 0})
    }
    
  }
  const startGame = () => {
   setStage(createStage());
   setDropTime(1000);
   resetPlayer();
   setGameOver(false);
  }

  const drop = () => {
     if(!checkCollision(player, stage, {x: 0, y: 1})) {
       updatePlayerPos({x: 0, y: 1, collided: false});
     } else {
       if(player.pos.y < 1 ) {
         console.log("Game over");
         setGameOver(true);
         setDropTime(null);
       }
       updatePlayerPos({x: 0, y: 0, collided: true})
     }
  }
  const dropPlayer = () => {
    setDropTime(null);
    drop();
  }
  const move = ({keyCode}) => {
    if(!gameOver) {
      if(keyCode === 37){
        movePlayer(-1);
      } else if(keyCode === 39) {
        movePlayer(1);
      } else if(keyCode === 40) {
        dropPlayer();
      } else if(keyCode === 38) {
        playerRotate(stage, 1)
      }
    }
  }

  useInterval(() => {
    drop()
  }, dropTime)
  console.log('re-render');
  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} > 
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
        
        <StartButton callback={startGame}/>
      </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris;