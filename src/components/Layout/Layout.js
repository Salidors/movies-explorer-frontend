import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Layout() {
  return (
    <div className='layout'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
