import {
  Alert,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../../services/register';
import { verifyToken } from '../../../services/verifyToken';
import { Validation } from './Validation';

export const Register = () => {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mfaEnabled, setMfaEnabled] = useState(false);
  const [showVerifyCode, setShowVerifyCode] = useState(false);
  const [imageURI, setImageURI] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (firstname.length < 3) {
      setResponseMessage('Error: Firstname must have at least 3 characters');
      setTimeout(() => {
        setResponseMessage('');
      }, 4000);
      return;
    }

    if (lastname.length < 3) {
      setResponseMessage('Error: Lastname must have at least 3 characters');
      setTimeout(() => {
        setResponseMessage('');
      }, 4000);
      return;
    }

    if (!email || !email.includes('@')) {
      setResponseMessage('Error: Invalid email');
      setTimeout(() => {
        setResponseMessage('');
      }, 4000);
      return;
    }

    if (password.length < 8) {
      setResponseMessage('Error: Password must have at least 8 characters');
      setTimeout(() => {
        setResponseMessage('');
      }, 4000);
      return;
    }

    //registrar usuário
    const response = await register(
      firstname,
      lastname,
      email,
      password,
      mfaEnabled
    );

    if (mfaEnabled) {
      setShowVerifyCode(true);
      setImageURI(response.data.secretImageUri);
    } else {
      const verify = await verifyToken(response.data);
      setResponseMessage(verify.message);
      if (verify.success == true && verify.sub != null) {
        setTimeout(() => {
          localStorage.setItem('authenticated', verify.sub);
          navigate('/');
        }, 3000);
      }
    }

    setTimeout(() => {
      setResponseMessage('');
    }, 4000);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ height: '100%', paddingTop: '2em' }}
    >
      {showVerifyCode == false ? (
        <FormControl
          sx={{
            width: '80%',
            maxWidth: '700px',
            padding: '2em',
            borderRadius: '10px',
            backgroundColor: 'white',
            display: 'flex',
            height: '80vh',
          }}
        >
          <form
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
            onSubmit={handleSubmit}
          >
            <div
              style={{
                height: '70%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <h2>Fill in the fields below</h2>
              <TextField
                id="first-name"
                label="Firstname"
                variant="outlined"
                fullWidth
                sx={{
                  marginBottom: '10px',
                }}
                value={firstname}
                onChange={(event) => setFirstName(event.target.value)}
              />
              <TextField
                id="last-name"
                label="Lastname"
                variant="outlined"
                fullWidth
                sx={{
                  marginBottom: '10px',
                }}
                value={lastname}
                onChange={(event) => setLastName(event.target.value)}
              />
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                sx={{
                  marginBottom: '10px',
                }}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                sx={{
                  marginBottom: '10px',
                }}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <FormControlLabel
              control={<Switch onChange={() => setMfaEnabled(!mfaEnabled)} />}
              label="Enable 2FA"
            />

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <div>
                <Button type="submit">Submit</Button>
              </div>
              <Button onClick={() => navigate('/login')}>Login</Button>
            </div>
          </form>
        </FormControl>
      ) : (
        <Validation uriImage={imageURI} email={email} />
      )}

      {responseMessage && (
        <Alert
          severity={responseMessage.startsWith('Success') ? 'success' : 'error'}
        >
          {responseMessage}
        </Alert>
      )}
    </Grid>
  );
};
