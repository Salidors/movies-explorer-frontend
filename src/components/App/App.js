import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const isAuth = false;

  return (
    <div className='app'>
      <Routes>
        <Route path='/'>
          <Route element={<Layout isAuth={isAuth} />}>
            <Route index element={<Main />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
