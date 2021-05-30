import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    'SB CT'
    'SB CT';
  height: 100vh;
`;

export const ContentArea = styled.div`
  grid-area: CT;
  /* display: flex; */
  background-color: var(--primary);
  padding: 32px 24px;
`;
