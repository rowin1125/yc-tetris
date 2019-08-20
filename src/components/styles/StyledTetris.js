import styled from 'styled-components';
import bgImage from '../../img/bg.png';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;

  h3 {
    color: white;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    position: absolute;
    top: 3px;
    left: 50px;
    font-size: 16px;
  }
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 1000px;

  aside {
    width: 100%;
    max-width: 350px;
    display: block;
    padding: 0 20px;
  }
`;
