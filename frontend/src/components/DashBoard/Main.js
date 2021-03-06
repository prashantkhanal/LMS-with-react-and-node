import React, { lazy, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Dashboard from './Dashboard';
import Blog from './Blog';
import NotFound from './NotFound';
import LeftBar from './LeftBar';
import Navbar from './Navbar';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: theme.spacing(10, 0, 0, 40),
    height: '100vh',
    background: '#efefef',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(9, 0, 0, 0),
    },
  },
}));

const LazyDashBorad = lazy(() => import('./Dashboard'));

const Main = () => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerOpen = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  return (
    <>
      <Navbar handleDrawerOpen={handleDrawerOpen} />
      <LeftBar
        mobileOpen={mobileOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <Box className={classes.wrapper}>
        <React.Suspense fallback="loading">
          <Switch>
            <Route exact path="/" render={() => <LazyDashBorad />} />

            <Route exact path="/blog" render={() => <Blog />} />
            <Route exact path="*" render={() => <NotFound />} />
          </Switch>
        </React.Suspense>
      </Box>
    </>
  );
};

export default Main;
