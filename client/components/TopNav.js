import {
  Typography,
  makeStyles,
  Toolbar,
  IconButton,
  AppBar,
  Button,
  Box,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
}));

const TopNav = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar disableGutters>
          <Box className={classes.title}>
            {/* <Link href="/"> */}
            <Typography variant="h6">Prashant</Typography>
            {/* </Link> */}
          </Box>
          <Box>
            <Link href="/login">
              <Button color="inherit">Login</Button>
            </Link>
            <Link href="/register">
              <Button color="inherit">Singup</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopNav;
