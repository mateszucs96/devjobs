// import { useGetData } from 'hooks/useGetData';
// import { useGetInput } from 'hooks/useGetInput';
import { createContext, useEffect, useState } from 'react';
import { fetchData } from './fetchData';

export const DataContext = createContext({
  data: [],
  setData: () => {},
  detailsData: [],
  details: false,
  handleDetailsPage: () => {},
});

const DataContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [detailsData, setDetailsData] = useState([]);
  const [details, setDetails] = useState(false);

  useEffect(() => {
    fetchData().then(setData);
    console.log('running data');
  }, []);

  const handleDetailsPage = (e) => {
    const position = e.target.closest('.cardC').children[2].textContent.trim();
    const target = data.filter((element) => element.position === position);
    setDetailsData(target);
    setDetails(!details);
  };

  return (
    <DataContext.Provider
      value={{ data, setData, detailsData, details, handleDetailsPage }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
