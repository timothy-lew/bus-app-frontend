import React, { useState } from 'react';
import styles from '../styles/modules/todoItem.module.scss';
import BusStop2 from './BusStop2';

function BusStops2({ busStops, buses, displayBuses, setDisplayBuses }) {
  return (
    <div className={styles.scroll}>
      {busStops.map((busStop) => {
        return (
          <BusStop2
            key={`busStop2-${busStop.busStopCode}`}
            busStop={busStop}
            buses={buses}
            setDisplayBuses={setDisplayBuses}
          />
        );
      })}
    </div>
  );
}

export default BusStops2;
