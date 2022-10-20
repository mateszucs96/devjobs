import { useEffect, useState } from 'react';
import { fetchData } from '../helpers/fetchData';

export const useGetData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(setData);
  }, []);
  return { data, setData };
};
