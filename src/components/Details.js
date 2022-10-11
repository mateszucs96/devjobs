import '../globals.scss';

const Details = ({ data }) => {
  console.log(data[0].role.items);
  return (
    <section>
      <div className="times">
        <p>{data[0].postedAt}</p>
        <div className="dot"></div>
        <p>{data[0].contract}</p>
      </div>
      <h3 className="title">{data[0].position}</h3>
      <p className="location">{data[0].location}</p>
      <p>{data[0].description}</p>
      <p>{data[0].requirements.content}</p>
      <ul>
        {data[0].requirements.items.map((el, i) => {
          return <li key={i}>{el}</li>;
        })}
      </ul>
      <p>{data[0].role.content}</p>
      <ul>
        {data[0].role.items.map((el, i) => {
          return <li key={i}>{el}</li>;
        })}
      </ul>
    </section>
  );
};

export default Details;
