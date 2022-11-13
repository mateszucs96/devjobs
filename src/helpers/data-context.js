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
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  const [details, setDetails] = useState(false);

  //set data and allData arrays with fetch results
  useEffect(() => {
    fetchData().then(setAllData);
    console.log('running data');
  }, []);

  useEffect(() => {
    fetchData().then(setData);
    console.log('fetch filter');
  }, []);

  const handleDetailsPage = (e) => {
    const position = e.target.closest('.cardC').children[2].textContent.trim();
    const target = data.filter((element) => element.position === position);
    console.log(target);
    setData(target);
    setDetails(!details);
  };

  return (
    <DataContext.Provider
      value={{ data, allData, setData, details, handleDetailsPage }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
