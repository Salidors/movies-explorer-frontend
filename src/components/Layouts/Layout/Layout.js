import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './Layout.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';

export default function Layout() {
  const navigate = useNavigate();
  const isAuth = useAuth();
  const { isLight } = useTheme();

  return (
    <div className='layout'>
      <Header
        isAuth={isAuth}
        isLight={isLight}
        onAccountClick={() => navigate('/profile')}
      />
      <Outlet />
      <Footer />
    </div>
  );
}
