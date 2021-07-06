import React, {useState} from 'react';

import {createStage, checkCollision} from '../gameHelpers';
//--import Components start--
import Stage from './stage';
import Display from './display';
import StartButton from './startButton';
import PauseButton from './pauseButton';
//--import Components over--
//import custom hooks
import {usePlayer} from '../hooks/usePlayer';
import {useStage} from '../hooks/useStage';
import {useInterval} from '../hooks/useInterval';
import { useGameStatus } from '../hooks/useGameStatus';
//import style components
import {StyledTetrisWrapper, StyledTetris} from './styles/styled__tetris';

export let pause = false;

const Tetris = () => {

  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const  [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

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
   setScore(0);
   setRows(0);
   setLevel(0);
  }

  const pauseGame = () => {
    if(pause) {
      setDropTime(1000 / (level + 1) + 200);
      pause = !pause;
      return pause;
    } else if(!pause) {
      setDropTime(null); 
      pause = !pause; 
      return pause;
    }
  }
  const drop = () => {

    if(rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      setDropTime(1000 / (level + 1) + 200);
    }

     if(!checkCollision(player, stage, {x: 0, y: 1})) {
       updatePlayerPos({x: 0, y: 1, collided: false});
     } else {
       if(player.pos.y < 1 ) {
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
        pause = true;
        pauseGame();
      } else if(keyCode === 39) {
        movePlayer(1);
        pause = true;
        pauseGame();
      } else if(keyCode === 40) {
        dropPlayer();
        pause = true;
        pauseGame();
      } else if(keyCode === 38) {
        playerRotate(stage, 1);
        pause = true;
        pauseGame();
      }
    }
  }

  const keyUp = ({keyCode}) => {
    if(!gameOver) {
      if(keyCode === 40) {
        setDropTime(1000 / (level + 1) + 200);
        pause = true;
        pauseGame();
      }
    }
  }



  useInterval(() => {
    drop()
  }, dropTime)

  return (
    <StyledTetrisWrapper role="button" tabIndex="0"  autoFocus={true} onBlur={({ target }) => target.focus()} onKeyDown={e => move(e)} onKeyUp={keyUp}> 
      <StyledTetris>
      <Stage stage={stage}/>
      <aside>
        {gameOver ? (<Display gameOver={gameOver} text="Game over"/>) : (
          <div>
        <Display text={`Score: ${score}`}/>
        <Display text={`Rows: ${rows}`}/>
        <Display text={`Level: ${level}`}/>
        </div>
        )}
        <StartButton callback={startGame}/>
        <PauseButton callback={pauseGame} pause={pause}/>
      </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris;