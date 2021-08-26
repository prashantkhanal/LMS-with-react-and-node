import { Paper } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Main from './components/DashBoard/Main';
import Login from './pages/Login';
import { isUserLoggedIn } from './redux/Action/login.action';

function App() {
  const dispatch = useDispatch();
  const loginReducer = useSelector((state) => state.loginReducer);

  useEffect(() => {
    if (loginReducer.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  return (
    <>
      {/* // <Paper elevation={0}> */}
      {/* <Main /> */}
      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Route exact path="/dashboard" render={() => <Main />} />
      </Switch>
      {/* // </Paper> */}
    </>
  );
}

export default App;
