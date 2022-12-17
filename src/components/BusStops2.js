import React, { useState } from 'react';
import styles from '../styles/modules/todoItem.module.scss';
import BusStop2 from './BusStop2';

function BusStops2({ busStops, buses, displayBuses, setDisplayBuses }) {
  // const busStops = useSelector((state) => state.busStop.busStopList);

  console.log(busStops);
  // TODO remove [0] to make this component scalable
  // want to use this component in AppContent
  return (
    <div className={styles.scroll}>
      {busStops.map((busStop) => {
        return (
          <BusStop2
            key={`${busStop.BusStopCode}`}
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
