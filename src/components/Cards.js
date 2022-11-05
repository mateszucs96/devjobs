import Card from './Card';
import styles from './cards.module.scss';
import { DataContext } from '../helpers/data-context';
import { useContext } from 'react';

const Cards = () => {
  const { data, handleDetailsPage } = useContext(DataContext);

  return (
    <main className={styles.cards}>
      {data.map((company, i) => {
        while (i < 12) {
          return (
            <Card
              key={company.id}
              data={company}
              handleDetailsPage={handleDetailsPage}
            />
          );
        }
      })}
    </main>
  );
};

export default Cards;
