import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './Layout.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

export default function Layout({ isAuth = false }) {
  const { pathname } = useLocation();
  const isLight = pathname !== '/';

  return (
    <div className='layout'>
      <Header isAuth={isAuth} isLight={isLight} />
      <Outlet />
      <Footer />
    </div>
  );
}
