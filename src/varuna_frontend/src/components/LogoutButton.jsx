import React from 'react';
import { useConnect } from '@connect2ic/react';
import '@connect2ic/core/style.css';

const LogoutButton = ({ onLogout }) => {
  const { disconnect } = useConnect();

  const handleLogout = () => {
    disconnect();
    onLogout();
  };

  return (
    <button
      className="btn btn-danger logout-button"
      onClick={handleLogout}
      aria-label="Logout"
    >
      Logout
    </button>
  );
};

export default LogoutButton;

