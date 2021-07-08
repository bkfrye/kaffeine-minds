import Logo from '@images/logo.svg';
import styles from '../styles/Masthead.module.css';

const Masthead = () => {

  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
    </div>
  )
}

export default Masthead;