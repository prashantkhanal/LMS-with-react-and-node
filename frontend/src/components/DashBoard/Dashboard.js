import { Typography } from '@material-ui/core';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/Action/login.action';

// const useStyles = makeStyles((theme) => ({}));

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginAction());
  });

  // const classes = useStyles();
  return <Typography>DashBoard</Typography>;
};

export default Dashboard;
