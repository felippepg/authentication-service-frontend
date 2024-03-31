import {
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../services/login';
import { verifyCode } from '../../../services/verifyCode';

export const Login = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [responseMessage, setResponseMessage] = useState<string>('');
  const [showVerifyCode, setShowVerifyCode] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (email.trim() === '' || password === '') {
      setResponseMessage('Fields required');
      setTimeout(() => {
        setResponseMessage('');
      }, 4000);
      return;
    }
    const response = await login(email, password);

    if (response.message != '') {
      setResponseMessage(response.message);
    }

    if (response.verifyCode == true) {
      setShowVerifyCode(true);
    } else {
      setShowVerifyCode(false);
    }

    setTimeout(() => {
      setResponseMessage('');
    }, 4000);
  };

  const handleSubmitCode: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();

    const response = await verifyCode(code, email);

    if (response.message != '') {
      setResponseMessage(response.message);
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
      sx={{ minHeight: '100%', paddingTop: '2em' }}
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
              <h2>Login</h2>
              <h4>Wellcome user</h4>
              <div style={{ marginTop: '5%', width: '80%' }}>
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
                    marginTop: '10px',
                  }}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>
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
              <Button onClick={() => navigate('/register')}>Register</Button>
            </div>
          </form>
        </FormControl>
      ) : (
        <Box
          sx={{
            width: '80%',
            padding: '2em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh%',
          }}
        >
          <h1>Insert the code below</h1>

          <form
            style={{
              width: '50%',
              maxWidth: '400px',
              padding: '2em',
              borderRadius: '10px',
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'column',
              height: '30vh',
            }}
            onSubmit={handleSubmitCode}
          >
            <TextField
              id="qr-code"
              label="Code"
              variant="outlined"
              fullWidth
              sx={{
                marginBottom: '10px',
              }}
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Box>
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
