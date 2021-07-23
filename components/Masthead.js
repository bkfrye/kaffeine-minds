import Logo from '@images/logo.svg';
import styles from '../styles/Masthead.module.css';

const Masthead = () => {

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Logo className={styles.logo} />
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Shop</a>
          <a href="#">About us</a>
        </nav>
      </div>
    </div>
  )
}

export default Masthead;