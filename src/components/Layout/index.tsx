import Sidebar from '../Sidebar';
import Routes from '../../routes';
import { Grid, ContentArea } from './styles';

function Layout() {
  return (
    <Grid>
      <Sidebar />
      <ContentArea>
        <Routes />
      </ContentArea>
    </Grid>
  );
}

export default Layout;
