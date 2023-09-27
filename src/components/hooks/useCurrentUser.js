import { useContext } from 'react';
import { Context } from '../Context/Context';

export const useCurrentUser = () => {
  const { currentUser } = useContext(Context);

  return currentUser;
};
