import { useContext } from 'react';
import { Context } from '../Context/Context';

export const useCurrentUser = () => {
  const { currentUser, updateCurrentUser } = useContext(Context);

  return { currentUser, updateCurrentUser };
};
