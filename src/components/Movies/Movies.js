import React, { useRef, useState } from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { MOVIES_PER_PAGE } from '../constants/constants';

export default function Movies() {
  const startPosition = useRef(0);
  const endPosition = useRef(MOVIES_PER_PAGE - 1);
  const [movies, setMovies] = useState(
    _movies.slice(startPosition.current, endPosition.current + 1)
  );

  const handleOnMore = () => {
    startPosition.current += MOVIES_PER_PAGE;
    endPosition.current += MOVIES_PER_PAGE;
    setMovies(_movies.slice(startPosition.current, endPosition.current + 1));
  };

  return (
    <main className='movies-page'>
      <SearchForm />
      <MoviesCardList movies={movies} />
      <button className='btn movies-page__more' onClick={handleOnMore}>
        Ещё
      </button>
    </main>
  );
}

const _movies = [
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
    _id: '6505a76e1608588f5257e23211111',
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
    _id: '6505a76e1608588f5257e23222222',
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
    _id: '6505a76e16083434588f5257e232',
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
    _id: '6505a76e16085884343f5257e232',
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
    _id: '6505a763e1608588f5257e232',
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
    _id: '6505a76e1608588f5257e2322',
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
    _id: '6505a76e1608588f5257e23233',
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
    _id: '6505a76e1608588f5257e2324',
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
    _id: '6505a76e1608588f5257e2325',
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
    _id: '6505a76e1608588f5257e2326',
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
    _id: '6505a76e1608588f5257e2327',
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
    _id: '6505a76e1608588f5257e2328',
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
    _id: '6505a76e1608588f5257e2329',
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
    _id: '16505a76e1608588f5257e2329',
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
    _id: '26505a76e1608588f5257e2329',
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
    _id: '36505a76e1608588f5257e2329',
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
    _id: '116505a76e1608588f5257e2329',
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
