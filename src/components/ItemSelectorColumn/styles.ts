import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 150px auto;
  grid-template-areas: '. BT .';
  height: 100%;
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

export const SaveButton = styled.button`
  height: 32px;
  width: 100%;
  /* padding: 8px; */
  border-radius: 4px;
  margin-top: 8px;
  background-color: var(--discord);
  font-size: 14px;
  font-weight: bold;
  color: var(--white);
  /* line-height: 20px; */
`;
