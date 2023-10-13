import React, { useEffect } from 'react';
import './Signout.css';
import { API_URL } from '../constants/constants';

export default function Signout({ onSignOut }) {
  useEffect(() => {
    fetch(`${API_URL}/signout`).then(() => {
      onSignOut();
    });
  }, [onSignOut]);

  return (
    <section className='signout'>
      <h2 className='signout__exit'>Выходим...</h2>
    </section>
  );
}
