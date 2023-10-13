import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './LoginLayout.css';
import LoginHeader from '../../Header/LoginHeader/LoginHeader';

export default function LoginLayout() {
  const navigate = useNavigate();

  return (
    <div className='login-layout'>
      <LoginHeader onAccountClick={() => navigate('/profile')} />
      <Outlet />
    </div>
  );
}
