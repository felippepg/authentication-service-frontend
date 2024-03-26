import { FormControl, TextField } from '@mui/material';

export const Register = () => {
  return (
    <FormControl>
      <TextField id="first-name" label="Firstname" variant="outlined" />
      <TextField id="last-name" label="Lastname" variant="outlined" />
      <TextField id="email" label="Email" variant="outlined" type="email" />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        type="password"
      />
    </FormControl>
  );
};
