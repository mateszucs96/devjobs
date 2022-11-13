import { Link } from 'react-router-dom';
import styles from './card.module.scss';

const Card = ({ data, handleDetailsPage }) => {
  return (
    <Link to={`details/${data.id}`}>
      <div className={'cardC ' + styles.card} onClick={handleDetailsPage}>
        <div
          className="logoContainer"
          style={{ backgroundColor: data.logoBackground }}
        >
          <img src={data.logo} alt="logo" />
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
    </Link>
  );
};

export default Card;
