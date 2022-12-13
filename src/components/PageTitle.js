import React from 'react';
import styles from '../styles/modules/title.module.scss';

function PageTitle({ children }) {
  return <div className={styles.title}>{children}</div>;
}

export default PageTitle;
