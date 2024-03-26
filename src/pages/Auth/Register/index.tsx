import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', paddingTop: '2em' }}
    >
      <FormControl
        sx={{
          width: '80%',
          maxWidth: '700px',
          padding: '2em',
          borderRadius: '10px',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '80vh',
        }}
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
          />
          <TextField
            id="last-name"
            label="Lastname"
            variant="outlined"
            fullWidth
            sx={{
              marginBottom: '10px',
            }}
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
          />
        </div>

        <FormControlLabel control={<Switch />} label="Enable 2FA" />

        <Button
          onClick={() => {
            navigate('/validation');
          }}
        >
          Submit
        </Button>
      </FormControl>
    </Grid>
  );
};
