import Card from './Card';

const Cards = ({ data, handleDetailsPage }) => {
  return (
    <main className="cards">
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
