import { Alert, Box, Button, Grid, TextField } from '@mui/material';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../../services/api';

export const Validation = ({
  uriImage,
  email,
}: {
  uriImage: string;
  email: string;
}) => {
  const navigate = useNavigate();
  const [code, setCode] = useState<string>('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const request = await api.post('/auth/verify', {
        code,
        email,
      });

      const response = await request.data;
      if (response.hasOwnProperty('token')) {
        const { token } = response;
        const { sub } = jwtDecode(token);
        if (sub) {
          setResponseMessage('Success: User created and verified');
          setTimeout(() => {
            if (!localStorage.getItem('authenticated')) {
              localStorage.setItem('authenticated', sub);
            }
            navigate('/');
          }, 3000);
        } else {
          setResponseMessage('Error: Invalid Token');
        }
      } else {
        setResponseMessage('Error: User not valid');
      }
    } catch (error: any) {
      if (error.hasOwnProperty('response')) {
        setResponseMessage(error.response.data);
      } else {
        setResponseMessage(error.message);
      }
    }
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', paddingTop: '2em' }}
    >
      <Box
        sx={{
          width: '80%',
          maxWidth: '700px',
          padding: '2em',
          borderRadius: '10px',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '80vh',
        }}
      >
        <h2>To finish your account scan the QRCode Below</h2>

        <div>
          <img src={uriImage} alt="QRcode" />
        </div>

        <form onSubmit={handleSubmit}>
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

        {responseMessage && (
          <Alert
            severity={
              responseMessage.startsWith('Success') ? 'success' : 'error'
            }
          >
            {responseMessage}
          </Alert>
        )}
      </Box>
    </Grid>
  );
};
