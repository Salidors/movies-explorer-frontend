import React from 'react';
import './PageNotFound.css';
import { Link, useNavigate } from 'react-router-dom';

export default function PageNotFound() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <main className='not-found'>
      <div className='not-found__container'>
        <h2 className='not-found__container-title'>404</h2>
        <p className='not-found__container-text'>Страница не найдена</p>
      </div>
      <Link className='link not-found__link-back' onClick={goBack}>
        Назад
      </Link>
    </main>
  );
}
