import React, { useEffect } from 'react';
import './Signout.css';
import { API_URL } from '../constants/constants';
import { useNavigate } from 'react-router-dom';

export default function Signout({ onSignOut }) {
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${API_URL}/signout`).then(() => {
      onSignOut();
      navigate('/');
    });
  }, [navigate, onSignOut]);

  return (
    <section className='signout'>
      <h2 className='signout__exit'>Выходим...</h2>
    </section>
  );
}
