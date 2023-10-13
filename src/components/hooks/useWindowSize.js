import { useContext } from 'react';
import { Context } from '../Context/Context';

export const useWindowSize = () => {
  const { windowSize } = useContext(Context);

  return { windowSize };
};
