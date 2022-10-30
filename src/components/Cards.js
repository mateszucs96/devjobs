import Card from './Card';
import styles from './cards.module.scss';

const Cards = ({ data, handleDetailsPage }) => {
  return (
    <main className={styles.cards}>
      {data.map((company) => {
        return (
          <Card
            key={company.id}
            data={company}
            handleDetailsPage={handleDetailsPage}
          />
        );
      })}
    </main>
  );
};

export default Cards;
