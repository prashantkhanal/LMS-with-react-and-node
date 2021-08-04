import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
  LinearProgress,
} from '@material-ui/core';
import Link from 'next/link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import SyncIcon from '@material-ui/icons/Sync';
import { useDispatch } from 'react-redux';
import { login } from '../redux/Actions/auth';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [loading, setLoading] = useState(false);

  console.log(process.env.NEXT_PUBLIC_API);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // setLoading(true);
      const user = {
        email,
        password,
      };

      dispatch(login(user));
      toast.success('User created sucessfully. Please Login.');
      router.push('/');
      // setLoading(false);
    } catch (err) {
      console.log(err.response.data.message);
      toast.error(err.response.data.message);
      // setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            label="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            type="email"
          />
          <TextField
            margin="normal"
            label="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            type="password"
          />
          {/* {loading && (
            <div className={classes.root} style={{ marginTop: '10px' }}>
              <LinearProgress color="secondary" />
            </div>
          )} */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            disabled={!email || !password}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              Do you want to
            </Grid>
            <Grid item>
              <Link href="/login" variant="body2">
                {'Register'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
