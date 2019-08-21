import React, { useRef } from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ callBack }) => {
  const inputEl = useRef(null);

  const unFocus = () => {
    inputEl.current.blur();
    callBack();
  };
  return (
    <StyledStartButton ref={inputEl} type="button" onClick={unFocus}>
      Start Game
    </StyledStartButton>
  );
};

export default StartButton;
