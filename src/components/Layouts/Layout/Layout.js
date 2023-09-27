import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './Layout.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { useAuth } from '../../hooks/useAuth';

export default function Layout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAuth = useAuth();
  const isLight = pathname !== '/';

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
