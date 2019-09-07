import React from 'react';
import ReactDOM from 'react-dom';
import styles from '/Users/jenn/Desktop/HackReactor/FEC/stephen_proxy/public/styles.css';

const Menu = () => {
  return (
    <div className={`${styles.menu} ${styles.topMenu}`}>
          <a className={styles.installBtn}>Install Steam</a>  login | language
    </div>
  );
};

ReactDOM.render(<Menu />, document.getElementById('menu'));