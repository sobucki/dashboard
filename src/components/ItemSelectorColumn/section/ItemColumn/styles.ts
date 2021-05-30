import styled from 'styled-components';

interface ContainerProps {
  urlImage: string;
}

export const Container = styled.div<ContainerProps>`
  background-image: url(${({ urlImage }) => urlImage});
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
