import styles from './detailsHeader.module.scss';

const DetailsHeader = ({ data }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.logoContainer}
        style={{ backgroundColor: data[0].logoBackground }}
      >
        <img src={data[0].logo} alt="logo" />
      </div>
      <div className={styles.header}>
        <div
          className={styles.medialogoContainer}
          style={{ backgroundColor: data[0].logoBackground }}
        >
          <img src={data[0].logo} alt="logo" />
        </div>
        <div className={styles.headerInfo}>
          <h3 className={styles.companyName}>{data[0].company}</h3>
          <p>{`${data[0].company.toLowerCase()}.com   `}</p>
        </div>
        <div className={styles.linkButton}>
          <a href={data[0].website}>Company Site</a>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
