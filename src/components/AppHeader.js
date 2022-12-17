import React, { useState } from 'react';

import styles from '../styles/modules/app.module.scss';
import BusModel from './BusModel';
import Button from './Button';

function AppHeader() {
  const [modelOpen, setModelOpen] = useState(false);

  return (
    <div className={styles.AppHeader}>
      <Button variant="primary" onClick={() => setModelOpen(true)}>
        Search
      </Button>

      <Button variant="primary" onClick={() => window.location.reload()}>
        Home
      </Button>

      <BusModel type="add" modelOpen={modelOpen} setModelOpen={setModelOpen} />
    </div>
  );
}

export default AppHeader;
