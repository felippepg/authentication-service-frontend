import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute(props: any) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('authenticated');
    user !== null ? setIsAuthenticated(true) : setIsAuthenticated(false);
    setLoad(true);
  }, []);

  if (load) {
    if (isAuthenticated) {
      return props.children;
    } else {
      return <Navigate to="/login" />;
    }
  }
}
