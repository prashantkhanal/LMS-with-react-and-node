import { Typography, makeStyles, Box } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Blog from './components/DashBoard/Blog';
import NotFound from './components/NotFound';
import Login from './pages/Login';

const Routes = () => {
  return (
    <Switch>
      {/* <Route exact path="/" render={() => <M />} /> */}
      <Route exact path="/login" render={() => <Login />} />
    </Switch>
  );
};

export default Routes;
