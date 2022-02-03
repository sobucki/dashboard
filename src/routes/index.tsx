import { Route, Switch } from 'react-router';
import About from '../pages/About';
import Category from '../pages/Category';
import Home from '../pages/Home';
import User from '../pages/User';

function Routes() {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <User />
      </Route>
      <Route path="/category">
        <Category />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
