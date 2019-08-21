import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ callBack }) => {
  return (
    <StyledStartButton type="button" onClick={callBack}>
      Start Game
    </StyledStartButton>
  );
};

export default StartButton;
