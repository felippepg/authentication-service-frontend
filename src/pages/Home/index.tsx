import { Alert, Button } from '@mui/material';

export const Home = () => {
  return (
    <Alert
      severity="success"
      action={
        <Button color="inherit" size="small">
          UNDO
        </Button>
      }
    >
      Hello from security page
    </Alert>
  );
};
