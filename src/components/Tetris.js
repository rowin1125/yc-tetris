import React, { useState } from 'react';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import Highscore from './Highscore';
import Modal from './Modal';
import Legend from './Legend';
import Logo from './Logo';
import { createStage, checkCollision } from '../gameHelpers';

import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useInterval } from '../hooks/useInterval';
import { useGameStatus } from '../hooks/useGameStatus';

import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
import { StyledLegend } from './styles/StyledLegend';
import { StyledLogo } from './styles/StyledLogo';

const Tetris = ({ db }) => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [open, setOpen] = useState(false);
  const [showHelp, setShowHelp] = useState(true);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);

  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    // reset everything
    setStage(createStage());
    setDropTime(700);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
    setShowHelp(false);
  };

  const drop = () => {
    // Increase level when player has cleared 10 rows
    if (rows > (level + 1) * 5) {
      setLevel(prev => prev + 1);
      // increase speed
      setDropTime(700 / (level + 1) + 125);
    }
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // GAME OVER BRO
      if (player.pos.y < 1) {
        console.log('GAME OVER');
        setOpen(true);
        setGameOver(true);
        setDropTime(null);
        setShowHelp(true);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };
  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(700 / (level + 1) + 125);
      }
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
      <h3>
        Made by <span style={{ color: '#f77f00' }}>Rowin Mol </span>of <span style={{ color: '#f77f00' }}>YC Hoofddorp</span>
      </h3>
      {showHelp && (
        <StyledLegend>
          <Legend showHelp={showHelp} />
        </StyledLegend>
      )}
      <StyledLogo>
        <Logo />
      </StyledLogo>

      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <>
              <Display gameOver={gameOver} text="Game Over" />
              <Highscore />
            </>
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
              <Highscore />
            </div>
          )}

          <StartButton callBack={startGame} />
        </aside>
        <Modal open={open} setOpen={setOpen} score={score} />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
