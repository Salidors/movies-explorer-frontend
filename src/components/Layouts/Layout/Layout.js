import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './Layout.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

export default function Layout({ isAuth = false }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
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
