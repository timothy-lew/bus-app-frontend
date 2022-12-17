import React from 'react';

import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';

import styles from './styles/modules/app.module.scss';

function App() {
  return (
    <div className="container">
      <PageTitle>Bus App</PageTitle>
      <div className={styles.app_wrapper}>
        <AppHeader />
        <AppContent />
      </div>
    </div>
  );
}

export default App;
