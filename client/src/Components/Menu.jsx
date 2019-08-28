import React from 'react';
import ReactDOM from 'react-dom';
import styles from '/Users/jenn/Desktop/HackReactor/FEC/stephen_proxy/public/styles.css';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.body} align="center">
        <div id={styles.topMenu}>
          <a className={styles.installBtn}>Install Steam</a>  login | language
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Menu />, document.getElementById('menu'));