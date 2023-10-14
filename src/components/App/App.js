import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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
import { useCallback, useEffect, useState } from 'react';
import EmptyFooterLayout from '../Layouts/EmptyFooterLayout/EmptyFooterLayout';
import Signout from '../Signout/Signout';
import {
  MOVIES_MORE_DESKTOP,
  MOVIES_MORE_MOBILE,
  MOVIES_MORE_TABLET,
  MOVIES_PER_PAGE_DESKTOP,
  MOVIES_PER_PAGE_MOBILE,
  MOVIES_PER_PAGE_TABLET,
} from '../constants/constants';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const { pathname } = useLocation();
  const isLight = pathname !== '/';

  const [currentUser, setCurrentUser] = useState({
    name: 'Нина',
    email: 'abramova.nina.g@gmail.com',
  });
  const [isAuth, setIsAuth] = useState(false);

  const updateCurrentUser = ({ name, email }) => {
    setCurrentUser({ name, email });
  };

  const memoizedCallback = useCallback(() => {
    setTimeout(() => {
      setWindowSize(window.innerWidth);
    }, 1000);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', memoizedCallback);
    return () => window.removeEventListener('resize', memoizedCallback);
  }, [memoizedCallback]);

  let moviesPerPage = {
    moviesPerPage: MOVIES_PER_PAGE_DESKTOP,
    moreMovies: MOVIES_MORE_DESKTOP,
  };
  if (windowSize <= 320)
    moviesPerPage = {
      moviesPerPage: MOVIES_PER_PAGE_MOBILE,
      moreMovies: MOVIES_MORE_MOBILE,
    };
  else if (windowSize <= 768)
    moviesPerPage = {
      moviesPerPage: MOVIES_PER_PAGE_TABLET,
      moreMovies: MOVIES_MORE_TABLET,
    };

  const handleOnSignIn = () => {
    setIsAuth(true);
    navigate('/');
  };

  const handleOnSignOut = () => {
    setIsAuth(false);
    navigate('/');
  };

  return (
    <Context.Provider
      value={{ currentUser, updateCurrentUser, isAuth, isLight, windowSize }}
    >
      <div className='app'>
        <Routes>
          <Route path='/'>
            <Route element={<LoginLayout />}>
              <Route
                path='signin'
                element={<Signin onSignIn={handleOnSignIn} />}
              />
              <Route path='signup' element={<Signup />} />
            </Route>
            <Route
              element={
                <ProtectedRoute isAuth={isAuth}>
                  <EmptyFooterLayout />
                </ProtectedRoute>
              }
            >
              <Route
                path='profile'
                element={
                  <ProtectedRoute isAuth={isAuth}>
                    <Profile />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route element={<Layout />}>
              <Route index element={<Main />} />

              <Route
                path='movies'
                element={
                  <ProtectedRoute isAuth={isAuth}>
                    <Movies config={moviesPerPage} />
                  </ProtectedRoute>
                }
              />

              <Route
                path='saved-movies'
                element={
                  <ProtectedRoute isAuth={isAuth}>
                    <SavedMovies config={moviesPerPage} />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route
              path='signout'
              element={<Signout onSignOut={handleOnSignOut} />}
            />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
