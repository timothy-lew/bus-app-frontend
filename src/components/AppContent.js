import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import styles from '../styles/modules/app.module.scss';

import BusStops2 from './BusStops2';

import Buses from './Buses';

function AppContent() {
  const busStops = useSelector((state) => state.busStop.busStopList);
  const [displayBuses, setDisplayBuses] = useState(false);
  const [buses, setBuses] = useState();

  return (
    <div className={styles.content__wrapper}>
      {displayBuses ? (
        <Buses buses={buses} />
      ) : (
        <BusStops2
          busStops={busStops}
          buses={buses}
          setBuses={setBuses}
          setDisplayBuses={setDisplayBuses}
        />
      )}
    </div>
  );
}

export default AppContent;
