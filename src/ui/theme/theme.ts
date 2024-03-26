import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontSize: 12,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          padding: '0',
          paddingRight: '0',
        },
      },
    },
  },
});
