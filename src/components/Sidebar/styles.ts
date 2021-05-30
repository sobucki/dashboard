import styled from 'styled-components';

export const Container = styled.nav`
  grid-area: SB;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--tertiary);
  padding: 11px 0;
  max-height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  ul {
    list-style: none;
    width: 100%;

    li {
      background-color: var(--primary);
      margin-bottom: 8px;

      a {
        color: var(--white);
        padding-left: 16px;
        height: 64px;
        display: flex;
        align-items: center;
        text-decoration: none;
        :hover {
          color: var(--tertiary);
          background-color: aliceblue;
          font-weight: bold;
        }
      }
    }
  }
`;
