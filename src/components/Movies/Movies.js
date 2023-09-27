import React from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

export default function Movies() {
  return (
    <main className='movies-page'>
      <SearchForm />
      <MoviesCardList movies={movies} />
      <button className='btn movies-page__more'>Ещё</button>
    </main>
  );
}
const movies = [
  {
    _id: '6505a76e1608588f5257e314',
    country: 'США',
    director: 'Фрэнк Дарабонт',
    duration: 189,
    year: '1999',
    description:
      'Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них',
    image:
      'https://ih1.redbubble.net/image.2853088286.5158/cposter,medium,product,750x1000.2.jpg',
    trailerLink: 'https://www.youtube.com/watch?v=Ki4haFrqSrw',
    nameRU: 'Зеленая миля',
    nameEN: 'The Green Mile',
    thumbnail: 'https://www.kinopoisk.ru/film/435/?from=discovery_player',
    movieId: 1234,
  },
  {
    _id: '6505a76e1608588f5257e232',
    country: 'США',
    director: 'Фрэнк Дарабонт',
    duration: 189,
    year: '1999',
    description:
      'Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них',
    image:
      'https://ih1.redbubble.net/image.2853088286.5158/cposter,medium,product,750x1000.2.jpg',
    trailerLink: 'https://www.youtube.com/watch?v=Ki4haFrqSrw',
    nameRU: 'Зеленая миля2',
    nameEN: 'The Green Mile2',
    thumbnail: 'https://www.kinopoisk.ru/film/435/?from=discovery_player',
    movieId: 1234,
  },
  {
    _id: '6505a76e1608588f5257e232',
    country: 'США',
    director: 'Фрэнк Дарабонт',
    duration: 189,
    year: '1999',
    description:
      'Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них',
    image:
      'https://ih1.redbubble.net/image.2853088286.5158/cposter,medium,product,750x1000.2.jpg',
    trailerLink: 'https://www.youtube.com/watch?v=Ki4haFrqSrw',
    nameRU: 'Зеленая миля2',
    nameEN: 'The Green Mile2',
    thumbnail: 'https://www.kinopoisk.ru/film/435/?from=discovery_player',
    movieId: 1234,
  },
  {
    _id: '6505a76e1608588f5257e232',
    country: 'США',
    director: 'Фрэнк Дарабонт',
    duration: 189,
    year: '1999',
    description:
      'Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них',
    image:
      'https://ih1.redbubble.net/image.2853088286.5158/cposter,medium,product,750x1000.2.jpg',
    trailerLink: 'https://www.youtube.com/watch?v=Ki4haFrqSrw',
    nameRU: 'Зеленая миля2',
    nameEN: 'The Green Mile2',
    thumbnail: 'https://www.kinopoisk.ru/film/435/?from=discovery_player',
    movieId: 1234,
  },
  {
    _id: '6505a76e1608588f5257e232',
    country: 'США',
    director: 'Фрэнк Дарабонт',
    duration: 189,
    year: '1999',
    description:
      'Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них',
    image:
      'https://ih1.redbubble.net/image.2853088286.5158/cposter,medium,product,750x1000.2.jpg',
    trailerLink: 'https://www.youtube.com/watch?v=Ki4haFrqSrw',
    nameRU: 'Зеленая миля2',
    nameEN: 'The Green Mile2',
    thumbnail: 'https://www.kinopoisk.ru/film/435/?from=discovery_player',
    movieId: 1234,
  },
  {
    _id: '6505a76e1608588f5257e232',
    country: 'США',
    director: 'Фрэнк Дарабонт',
    duration: 189,
    year: '1999',
    description:
      'Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них',
    image:
      'https://ih1.redbubble.net/image.2853088286.5158/cposter,medium,product,750x1000.2.jpg',
    trailerLink: 'https://www.youtube.com/watch?v=Ki4haFrqSrw',
    nameRU: 'Зеленая миля2',
    nameEN: 'The Green Mile2',
    thumbnail: 'https://www.kinopoisk.ru/film/435/?from=discovery_player',
    movieId: 1234,
  },
];
