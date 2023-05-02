import React, { useState } from 'react';
import styles from '../styles/modules/todoItem.module.scss';
import BusStop from './BusStop';

function BusStops({ busStops, setBuses, setDisplayBuses }) {
  // const busStops = useSelector((state) => state.busStop.busStopList);

  // TODO remove [0] to make this component scalable
  // want to use this component in AppContent
  return (
    <div className={styles.scroll}>
      {busStops.map((busStop) => {
        // function needs to return something
        return (
          <BusStop
            key={`${busStop.BusStopCode}`}
            busStop={busStop}
            setBuses={setBuses}
            setDisplayBuses={setDisplayBuses}
          />
        );
      })}
    </div>
  );
}

export default BusStops;
