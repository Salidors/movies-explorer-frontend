import React from 'react';
import { Outlet } from 'react-router-dom';
import './LoginLayout.css';
import LoginHeader from '../../Header/LoginHeader/LoginHeader';

export default function LoginLayout() {
  return (
    <div className='login-layout'>
      <LoginHeader />
      <Outlet />
    </div>
  );
}
