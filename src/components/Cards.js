import Card from './Card';
import styles from './cards.module.scss';
import { DataContext } from '../helpers/data-context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
  const { data, handleDetailsPage } = useContext(DataContext);
  let navigate = useNavigate();

  const handleLoadMore = () => {
    navigate(`/details/${data[0].id}`);
  };

  return (
    <main>
      <div className={styles.cards}>
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
      </div>
      <button onClick={handleLoadMore} className={styles.button}>
        Load More
      </button>
    </main>
  );
};

export default Cards;
