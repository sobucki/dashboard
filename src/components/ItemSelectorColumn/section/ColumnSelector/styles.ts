import styled from 'styled-components';

export const Container = styled.div`
  padding: 8px;
  background-color: var(--white);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  grid-auto-rows: 100px;
`;
