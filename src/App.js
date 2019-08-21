import React from 'react';
import Tetris from './components/Tetris';
import mobile from 'is-mobile';
import { StyledMobile } from './components/styles/StyledMobile';
import { Cat } from 'react-kawaii';

const App = () =>
  mobile() ? (
    <StyledMobile>
      <aside>
        <h1>
          This app is not made for mobile{' '}
          <span role="img" aria-label="phone">
            📵
          </span>
        </h1>
        <h2>
          Please use a desktop{' '}
          <span role="img" aria-label="computer">
            💻
          </span>
        </h2>
        <Cat size={320} mood="sad" color="#f77f00" />
      </aside>
    </StyledMobile>
  ) : (
    <div className="app">
      <Tetris mobile={mobile()} />
    </div>
  );

export default App;
