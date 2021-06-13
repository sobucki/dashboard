import { CircularProgress } from '@material-ui/core';
import { Container } from './styles';

function LoadingContainer() {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
}

export default LoadingContainer;
