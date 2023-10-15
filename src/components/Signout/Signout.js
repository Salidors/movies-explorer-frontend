import React, { useEffect } from 'react';
import './Signout.css';
import { cleanStorage } from '../../utils/localStorage';
import { signOut } from '../../utils/MoviesApi';

export default function Signout({ onSignOut }) {
  useEffect(() => {
    signOut().then(() => {
      onSignOut();
      cleanStorage();
    });
  }, [onSignOut]);

  return (
    <section className='signout'>
      <h2 className='signout__exit'>Выходим...</h2>
    </section>
  );
}
