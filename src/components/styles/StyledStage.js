import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(${props => props.height}, calc(25vw / ${props => props.width}));
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #f77f00;
  width: 100%;
  max-width: 35vw;
  background: #111;
`;
