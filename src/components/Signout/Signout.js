import React, { useEffect } from 'react';
import './Signout.css';

export default function Signout({ onSignOut }) {
  useEffect(() => {
    onSignOut();
  }, [onSignOut]);

  return (
    <section className='signout'>
      <h2 className='signout__exit'>Выходим...</h2>
    </section>
  );
}
