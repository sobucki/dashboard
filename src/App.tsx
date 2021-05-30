import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Layout />
    </Router>
  );
}

export default App;
