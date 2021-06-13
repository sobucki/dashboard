import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 150px auto;
  grid-template-areas: '. BT .';
  height: 100%;
  min-height: 0;
  min-width: 0;
  width: 100%;
`;

export const ButtonsArea = styled.div`
  grid-area: BT;
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    cursor: pointer;
    margin-bottom: 8px;
    margin-left: 8px;
    margin-right: 8px;
    height: 24px;
    border-radius: 4px;
  }
`;

export const DestinyWrap = styled.div`
  display: block;
  height: calc(100%);
  overflow-y: hidden;
`;
