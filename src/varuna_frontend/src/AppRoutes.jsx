import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useConnect } from '@connect2ic/react';
import { useUser } from './UserContext';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import LogoutButton from './components/LogoutButton';
import Sensors from './components/Sensors';

function AppRoutes() {
  const { isConnected, principal, disconnect } = useConnect();
  const { setPrincipal } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isConnected && principal) {
      setPrincipal(principal);
      if (location.pathname === '/') {
        navigate('/home');
      }
    } else if (!isConnected && location.pathname !== '/') {
      navigate('/');
    }
  }, [isConnected, principal, setPrincipal, navigate, location.pathname]);

  return (
    <>
      {isConnected && location.pathname !== '/' && <LogoutButton onLogout={() => navigate('/')} />}
      <main>
        <Routes>
          <Route path="/" element={<LandingPage onEnter={() => navigate('/home')} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sensors" element = {<Sensors />} />
        </Routes>
      </main>
    </>
  );
}

export default AppRoutes;


