import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from '../Layouts/Layout/Layout';
import LoginLayout from '../Layouts/LoginLayout/LoginLayout';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Signin from '../Login/Signin';
import Signup from '../Register/Signup';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { Context } from '../Context/Context';
import { useState } from 'react';
import EmptyFooterLayout from '../Layouts/EmptyFooterLayout/EmptyFooterLayout';
import Signout from '../Signout/Signout';

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: 'Нина Абрамова',
    email: 'abramova.nina.g.@gmail.com',
  });
  const [isAuth, setIsAuth] = useState(true);

  const updateCurrentUser = ({ name, email }) => {
    setCurrentUser({ name, email });
  };

  const isLight = window.location.pathname !== '/';

  return (
    <Context.Provider
      value={{ currentUser, updateCurrentUser, isAuth, isLight }}
    >
      <div className='app'>
        <Routes>
          <Route path='/'>
            <Route element={<LoginLayout />}>
              <Route path='signin' element={<Signin />} />
              <Route path='signup' element={<Signup />} />
            </Route>
            <Route element={<EmptyFooterLayout />}>
              <Route path='profile' element={<Profile />} />
            </Route>
            <Route element={<Layout />}>
              <Route index element={<Main />} />
              <Route path='movies' element={<Movies />} />
              <Route path='saved-movies' element={<SavedMovies />} />
            </Route>
            <Route path='signout' element={<Signout />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
