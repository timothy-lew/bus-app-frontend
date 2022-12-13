import React from 'react';

import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';

import styles from './styles/modules/app.module.scss';

function App() {
  return (
    <div className="container">
      <PageTitle>Bus App</PageTitle>
      <div className={styles.app_wrapper}>
        <AppHeader />
      </div>
    </div>
  );
}

export default App;
