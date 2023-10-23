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
import { Context } from '../../Context/Context';
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
  MOVIES_MORE_MOBILE_XS,
  MOVIES_PER_PAGE_MOBILE_XS,
} from '../../constants/constants';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { getUserInfo, fetchFavoriteMovies, signOut } from '../../utils/MainApi';
import { cleanStorage } from '../../utils/localStorage';

function App() {
  const [favoriteMovies, setFavoriteMovies] = useState();
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const { pathname } = useLocation();

  const isLight = pathname !== '/';

  const [currentUser, setCurrentUser] = useState();
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
  if (windowSize <= 500)
    moviesPerPage = {
      moviesPerPage: MOVIES_PER_PAGE_MOBILE_XS,
      moreMovies: MOVIES_MORE_MOBILE_XS,
    };
  else if (windowSize <= 900)
    moviesPerPage = {
      moviesPerPage: MOVIES_PER_PAGE_MOBILE,
      moreMovies: MOVIES_MORE_MOBILE,
    };
  else if (windowSize <= 1100)
    moviesPerPage = {
      moviesPerPage: MOVIES_PER_PAGE_TABLET,
      moreMovies: MOVIES_MORE_TABLET,
    };

  const loadUserInfo = useCallback(() => {
    getUserInfo()
      .then((info) => {
        setCurrentUser(info);
        setIsAuth(true);
        navigate('/movies');
      })
      .catch(() => {
        navigate('/');
      });
  }, [navigate]);

  const handleOnSuccessSignIn = useCallback(() => {
    loadUserInfo();
  }, [loadUserInfo]);

  const handleOnSuccessSignUp = useCallback(() => {
    loadUserInfo();
  }, [loadUserInfo]);

  const handleOnSignOut = () => {
    signOut().then(() => {
      cleanStorage();
      setIsAuth(false);
      navigate('/');
    });
  };

  useEffect(() => {
    if (currentUser) return;
    getUserInfo()
      .then((info) => {
        setCurrentUser(info);
        setIsAuth(true);
      })
      .catch(() => {
        setIsAuth(false);
        setCurrentUser();
      });
  }, [handleOnSuccessSignIn, currentUser]);

  useEffect(() => {
    if (!isAuth || favoriteMovies) return;
    fetchFavoriteMovies().then(setFavoriteMovies);
  }, [isAuth, favoriteMovies]);

  return (
    <Context.Provider
      value={{
        currentUser,
        updateCurrentUser,
        isAuth,
        isLight,
        windowSize,
        favoriteMovies,
        setFavoriteMovies,
      }}
    >
      <div className='app'>
        <Routes>
          <Route path='/'>
            <Route element={<LoginLayout />}>
              <Route
                path='signin'
                element={<Signin onSuccessSignIn={handleOnSuccessSignIn} />}
              />
              <Route
                path='signup'
                element={<Signup onSuccessSignUp={handleOnSuccessSignUp} />}
              />
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
                    <Movies
                      config={moviesPerPage}
                      key={moviesPerPage.moviesPerPage}
                    />
                  </ProtectedRoute>
                }
              />

              <Route
                path='saved-movies'
                element={
                  <ProtectedRoute isAuth={isAuth}>
                    <SavedMovies
                      config={moviesPerPage}
                      key={moviesPerPage.moviesPerPage}
                    />
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
