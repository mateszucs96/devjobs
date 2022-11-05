import { DataContext } from 'helpers/data-context';
import { useContext } from 'react';
import Cards from '../Cards';
import Details from '../Details';

const Main = () => {
  const { details } = useContext(DataContext);

  return <>{details ? <Details /> : <Cards />}</>;
};

export default Main;
