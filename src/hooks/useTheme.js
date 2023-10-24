import { useContext } from 'react';
import { Context } from '../Context/Context';

export const useTheme = () => {
  const { isLight } = useContext(Context);

  return { isLight };
};
