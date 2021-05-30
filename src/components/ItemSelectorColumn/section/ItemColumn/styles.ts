import styled from 'styled-components';
import Image1 from '../../../../assets/4244df55c1fe.jpg';

export const Container = styled.div`
  background-image: url(${Image1});
  background-position: center;
  background-size: cover;

  :hover {
    filter: brightness(120%);
    transition: all 0.3s;
    cursor: pointer;
  }

  &.selected {
    filter: grayscale(1);
    cursor: not-allowed;
  }
`;
