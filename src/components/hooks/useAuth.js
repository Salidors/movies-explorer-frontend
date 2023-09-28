import { useContext } from 'react';
import { Context } from '../Context/Context';

export const useAuth = () => {
  const { isAuth } = useContext(Context);

  return isAuth;
};
