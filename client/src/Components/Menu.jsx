import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.css';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div>
        <div id={styles.topMenu}>
          <a className={styles.installBtn}>Install Steam</a> login | language
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Menu />, document.getElementById('menu'));