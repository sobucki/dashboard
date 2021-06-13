import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BottomContainer = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  flex-direction: row;
  max-width: 760px;
  margin: 16px 0px;
  justify-content: center;
  align-items: flex-end;
`;

export const WrapCollectionController = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  button {
    margin-left: 16px;
  }
`;

export const Button = styled.div`
  height: 32px;
  width: 100%;
  border-radius: 4px;
  margin-top: 8px;
  background-color: var(--discord);
  font-size: 14px;
  font-weight: bold;
  color: var(--white);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 4px;
`;

export const SaveButton = styled.button`
  height: 32px;
  width: 100%;
  border-radius: 4px;
  margin-top: 8px;
  background-color: var(--discord);
  font-size: 14px;
  font-weight: bold;
  color: var(--white);
`;
