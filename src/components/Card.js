import styles from './card.module.scss';

const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.logoContainer}
        style={{ backgroundColor: data.logoBackground }}
      >
        <img className={styles.logo} src={data.logo} alt="logo" />
      </div>
      <div className={styles.times}>
        <p>{data.postedAt}</p>
        <div className="dot"></div>
        <p>{data.contract}</p>
      </div>
      <h3 className={styles.title}>{data.position}</h3>
      <p className={styles.companyName}>{data.company}</p>
      <p className={styles.location}>{data.location}</p>
    </div>
  );
};

export default Card;
