import styled from 'styled-components';

export const StyledHighscore = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 2px solid #f77f00;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${props => (props.gameOver ? 'red' : '#999')};
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;

  ol {
    list-style-type: decimal;
    list-style-position: inside;
    margin: 0;
    padding: 0;
    width: 100%;

    li {
      padding-bottom: 8px;
      padding-right: 8px;
      position: relative;

      &:after {
        position: absolute;
        top: -5px;
        right: 20px;
        margin-left: 1em;
      }

      &:first-of-type {
        &:after {
          content: '🥇';
        }
      }

      &:nth-of-type(2) {
        &:after {
          content: '🥈';
        }
      }

      &:nth-of-type(3) {
        &:after {
          content: '🥉';
        }
      }
    }
  }
`;
