import { Link } from 'react-router-dom';
import { Container } from './styles';

function Sidebar() {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </Container>
  );
}

export default Sidebar;
