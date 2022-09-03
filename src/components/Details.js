const Details = ({ data }) => {
  console.log(data);
  return <div>{data[0].company}</div>;
};

export default Details;
