import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from '../Layouts/Layout/Layout';
import LoginLayout from '../Layouts/LoginLayout/LoginLayout';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Signin from '../Login/Signin';

function App() {
  const isAuth = false;

  return (
    <div className='app'>
      <Routes>
        <Route path='/signin' element={<LoginLayout />}>
          <Route index element={<Signin />} />
        </Route>
        <Route path='/'>
          <Route element={<Layout isAuth={isAuth} />}>
            <Route index element={<Main />} />
          </Route>
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
