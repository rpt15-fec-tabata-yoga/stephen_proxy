import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.css';

const Menu = () => {
  return (
    <div className={`${styles.menu} ${styles.login}`}>
      <a className={styles.installBtn}>Install Steam</a> login | language
    </div>
  );
};

ReactDOM.render(<Menu />, document.getElementById('menu'));