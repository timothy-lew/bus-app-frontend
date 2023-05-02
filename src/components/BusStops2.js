import React from 'react';
import styles from '../styles/modules/todoItem.module.scss';
import BusStop2 from './BusStop2';

function BusStops2({ busStops, setBuses, setDisplayBuses }) {
  // console.log(busStops);
  return (
    <div className={styles.scroll}>
      {busStops.map((busStop) => {
        return (
          <BusStop2
            key={`busStop2-${busStop.BusStopCode}`}
            busStop={busStop}
            setBuses={setBuses}
            setDisplayBuses={setDisplayBuses}
          />
        );
      })}
    </div>
  );
}

export default BusStops2;
