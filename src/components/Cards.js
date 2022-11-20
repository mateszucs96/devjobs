import Card from './Card';
import styles from './cards.module.scss';
import { DataContext } from '../helpers/data-context';
import { useContext, useState } from 'react';

const Cards = () => {
  const { data, handleDetailsPage } = useContext(DataContext);
  const [visibleItems, setVisibleItems] = useState(12);

  const handleLoadMore = () => {
    setVisibleItems((prevState) => prevState + 3);
  };

  return (
    <main>
      <div className={styles.cards}>
        {data.slice(0, visibleItems).map((company) => {
          return (
            <Card
              key={company.id}
              data={company}
              handleDetailsPage={handleDetailsPage}
            />
          );
        })}
      </div>
      <button onClick={handleLoadMore} className={styles.button}>
        Load More
      </button>
    </main>
  );
};

export default Cards;
