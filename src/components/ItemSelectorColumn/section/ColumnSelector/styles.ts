import styled from 'styled-components';

export const Container = styled.div`
  padding: 8px;
  background-color: var(--white);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  grid-auto-rows: 100px;
  /* height: 100%; */
  overflow-y: scroll;

  height: calc(100% - 40px);
`;

interface ImageContainerProps {
  urlImage: string;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  background-image: url(${({ urlImage }) => urlImage});
  background-position: center;
  background-size: cover;

  :hover {
    filter: brightness(120%);
    transition: all 0.3s;
    cursor: pointer;
  }
`;
