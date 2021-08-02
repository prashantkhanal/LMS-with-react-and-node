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
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);

  console.log(process.env.NEXT_PUBLIC_API);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/register`,
        {
          fullName,
          email,
          password,
        }
      );
      toast.success('User created sucessfully. Please Login.');
      setLoading(false);
    } catch (err) {
      console.log(err.response.data.message);
      toast.error(err.response.data.message);
      setLoading(false);
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
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            label="Enter your Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            fullWidth
          />
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
          {loading && (
            <div className={classes.root} style={{ marginTop: '10px' }}>
              <LinearProgress color="secondary" />
            </div>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            disabled={!fullName || !email || !password || loading}
          >
            {loading ? <SyncIcon /> : 'Register'}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Do you want to
              </Link>
            </Grid>
            <Grid item>
              <Link href="/login" variant="body2">
                {'Login'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
