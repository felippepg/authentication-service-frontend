import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Auth/Login';
import { Register } from './pages/Auth/Register';
import { Validation } from './pages/Auth/Validation';
import { Home } from './pages/Home';
import { theme } from './ui/theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/validation" element={<Validation />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
