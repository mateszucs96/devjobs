import Card from './Card';

const Cards = ({ data }) => {
  return (
    <div className="cards">
      {data.map((company) => {
        return <Card key={company.id} data={company} />;
      })}
    </div>
  );
};

export default Cards;
