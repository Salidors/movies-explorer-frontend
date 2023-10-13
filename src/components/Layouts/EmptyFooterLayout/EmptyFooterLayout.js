import React from 'react';
import Header from '../../Header/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';
import './EmptyFooterLayout.css';

export default function EmptyFooterLayout() {
  const navigate = useNavigate();
  const isAuth = useAuth();
  const { isLight } = useTheme();

  return (
    <div className='empty-footer-layout'>
      <Header
        isAuth={isAuth}
        isLight={isLight}
        onAccountClick={() => navigate('/profile')}
      />
      <Outlet />
    </div>
  );
}
