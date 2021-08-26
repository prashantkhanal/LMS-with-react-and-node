import { Paper } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
// import Main from './components/DashBoard/Main';
import Login from './pages/Login';

function App() {
  return (
    <Paper elevation={0}>
      <BrowserRouter>
        {/* <Main /> */}
        <Login />
      </BrowserRouter>
    </Paper>
  );
}

export default App;
