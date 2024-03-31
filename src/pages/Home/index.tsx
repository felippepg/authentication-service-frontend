import { Alert, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    navigate('/login');
  };
  return (
    <Alert
      severity="success"
      action={
        <Button color="inherit" size="small" onClick={() => handleLogout()}>
          Logout
        </Button>
      }
    >
      Hello from security page
    </Alert>
  );
};
