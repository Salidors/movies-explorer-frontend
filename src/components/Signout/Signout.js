import React, { useEffect } from 'react';
import './Signout.css';
import { API_URL } from '../constants/constants';
import { useNavigate } from 'react-router-dom';

export default function Signout() {
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${API_URL}/signout`).then(() => navigate('/'));
  }, [navigate]);

  return (
    <section className='signout'>
      <h2 className='signout__exit'>Выходим...</h2>
    </section>
  );
}
