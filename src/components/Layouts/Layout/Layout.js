import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './Layout.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

export default function Layout({ isAuth = false }) {
  const { pathname } = useLocation();
  const isLogin = pathname === '/signin' || pathname === '/signup';

  return (
    <div className='layout'>
      <Header isAuth={isAuth} isLogin={isLogin} />
      <Outlet />
      <Footer />
    </div>
  );
}
