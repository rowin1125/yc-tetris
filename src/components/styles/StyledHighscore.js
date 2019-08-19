import styled from 'styled-components';

export const StyledHighscore = styled.div`
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

    li {
      padding-bottom: 8px;
      padding-right: 8px;

      &:before {
        content: '';
        color: red;
        display: inline-block;
        margin-left: -1em;
        margin-right: 1em;
      }
    }
  }
`;
