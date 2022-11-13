import { DataContext } from 'helpers/data-context';
import { useContext } from 'react';
import styles from './details.module.scss';
import LinkButton from './Buttons/LinkButton';

const Details = () => {
  const { data } = useContext(DataContext);
  console.log(data);
  return (
    <>
      <section className={styles.detailsSection}>
        <div className={styles.header}>
          <div className={styles.headerInfo}>
            <div className="times">
              <p>{data[0].postedAt}</p>
              <div className="dot"></div>
              <p>{data[0].contract}</p>
            </div>
            <h3 className={'title ' + styles.title}>{data[0].position}</h3>
            <p className={'location ' + styles.location}>{data[0].location}</p>
          </div>

          <LinkButton
            link={data[0].website}
            text="Apply now"
            bgColor="#5964e0"
            color="white"
          />
        </div>

        <div className={styles.description}>
          <p>{data[0].description}</p>
        </div>

        <div className={styles.requirements}>
          <h3 className={styles.reqTitle}>Requirements</h3>
          <p className={styles.reqContent}>{data[0].requirements.content}</p>
          <ul className={styles.reqList}>
            {data[0].requirements.items.map((el, i) => {
              return <li key={i}>{el}</li>;
            })}
          </ul>
        </div>

        <div className={styles.role}>
          <h3 className={styles.title}>What You Will Do</h3>
          <p className={styles.content}>{data[0].role.content}</p>
          <ol className={styles.list}>
            {data[0].role.items.map((el, i) => {
              return <li key={i}>{el}</li>;
            })}
          </ol>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerInfo}>
            <h3 className={'title ' + styles.title}>{data[0].position}</h3>
            <p>So Digital Inc.</p>
          </div>
          <LinkButton
            link={data[0].website}
            text="Apply now"
            bgColor="#5964e0"
            color="white"
          />
        </div>
      </footer>
    </>
  );
};

export default Details;
