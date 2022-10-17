import styles from './header.module.scss';
import logo from '../assets/desktop/logo.svg';
import sun from '../assets/desktop/icon-sun.svg';
import moon from '../assets/desktop/icon-moon.svg';

const Header = ({ setTheme }) => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.container}>
          <img src={logo} alt="logo" className="logo" />
          <div className={styles.toggleBox}>
            <img src={sun} alt="logo" className="sun" />
            <div className={`toggle ${styles.toggle}`} onClick={setTheme}>
              <div className="circle"></div>
            </div>
            <img src={moon} alt="logo" className="moon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
