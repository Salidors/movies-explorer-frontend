import React, { useCallback, useState } from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';

export default function Movies({ moviesPerPage }) {
  const [movies, setMovies] = useState(_movies);
  const [isLoading, setIsLoading] = useState(false);
  const handleOnSearch = useCallback((event) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setMovies(_movies);
    }, 3000);
  }, []);

  return (
    <main className='movies-page'>
      <SearchForm onSearch={handleOnSearch} />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList movies={movies} moviesPerPage={moviesPerPage} />
      )}
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
