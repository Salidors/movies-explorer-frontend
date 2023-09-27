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

function App() {
  const isAuth = false;

  return (
    <div className='app'>
      <Routes>
        <Route path='/'>
          <Route element={<LoginLayout />}>
            <Route path='signin' element={<Signin />} />
            <Route path='signup' element={<Signup />} />
          </Route>
          <Route element={<Layout isAuth={isAuth} />}>
            <Route index element={<Main />} />
            <Route path='profile' element={<Profile />} />
            <Route path='movies' element={<Movies />} />
            <Route path='saved-movies' element={<SavedMovies />} />
          </Route>
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
