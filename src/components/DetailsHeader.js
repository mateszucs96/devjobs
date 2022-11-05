// import { DataContext } from 'helpers/data-context';
// import { useContext } from 'react';
import { DataContext } from 'helpers/data-context';
import { useContext } from 'react';
import styles from './detailsHeader.module.scss';
import LinkButton from './Buttons/LinkButton';

const DetailsHeader = () => {
  const { data } = useContext(DataContext);

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
        <LinkButton
          link={data[0].website}
          text="Company Site"
          bgColor="rgba(89, 100, 224, 0.1)"
          color="#5964e0"
        />
      </div>
    </div>
  );
};

export default DetailsHeader;
